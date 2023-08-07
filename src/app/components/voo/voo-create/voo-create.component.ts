import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aeroporto } from 'src/app/models/aeroporto';
import { AeroportoService } from 'src/app/services/aeroporto.service';
import { Voo } from 'src/app/models/voo';
import { VooService } from 'src/app/services/voo.service';

@Component({
  selector: 'app-voo-create',
  templateUrl: './voo-create.component.html',
  styleUrls: ['./voo-create.component.css']
})
export class VooCreateComponent {

  voo: Voo = {
   aeroportoIda: {
    id: '',
    nome: '',
    airportIATA: '',
    cidade: ''
   },
   aeroportoVolta: {
    id: '',
    nome: '',
    airportIATA: '',
    cidade: ''
   },
   status: '' 
  }

  aeroportos: Aeroporto[] = []
  aeroportosFiltrados: Aeroporto[] = []
  filtro: string = '';

  aeroportoIda: FormControl = new FormControl(null, [Validators.required]);
  aeroportoVolta: FormControl = new FormControl(null, [Validators.required]);
  status: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private aeroportoService: AeroportoService,
    private vooService: VooService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAllAeroportos();
  }

  create(): void {
    if(this.voo.aeroportoIda.id == this.voo.aeroportoVolta.id){
      this.toastr.error('Error: Origem e chegada não podem ter o mesmo destino');
    }else{
      this.vooService.create(this.voo).subscribe(resposta => {;
      this.toastr.success('Viagem criada com sucesso', 'Nova viagem');
      this.router.navigate(['voo'])
      }, ex => {
        this.toastr.error(ex.error.error);
      })
    }
  }

  findAllAeroportos(): void {
    this.aeroportoService.findAll().subscribe(resposta => {
      this.aeroportos = resposta;
    })
  }


  applyFilterAeroporto(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filtro = filterValue;

    this.aeroportosFiltrados = this.aeroportos.filter(tec =>
      tec.nome.toLowerCase().includes(filterValue)
    );
  }

}
