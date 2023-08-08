import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aeroporto } from 'src/app/models/aeroporto';
import { AeroportoService } from 'src/app/services/aeroporto.service';
import { ClassAir } from 'src/app/models/classAir';
import { ClassAirService } from 'src/app/services/classAir.service';

@Component({
  selector: 'app-class-air-update',
  templateUrl: './class-air-update.component.html',
  styleUrls: ['./class-air-update.component.css']
})
export class ClassAirUpdateComponent {
  classAir: ClassAir = {
    price: 0,
    voo: '',
    nome: '',
    accents: '',
    dispatch: false,
    status: ''
  }
 
 
   price: FormControl = new FormControl(null, [Validators.required]);
 
   constructor(
     private classService: ClassAirService,
     private toastr: ToastrService,
     private router: Router,
    private route: ActivatedRoute
   ) { }
 
   ngOnInit(): void {
    this.classAir.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }
 
   update(): void {
      this.classService.update(this.classAir).subscribe(resposta => {
        this.toastr.success('Passagem alterada com sucesso', 'Nova passagem');
        this.router.navigate(['classAir'])
  
      }, ex => {
        this.toastr.error(ex.error.error);
      })
    
   }

   findById(): void {
    this.classService.findById(this.classAir.id).subscribe(resposta => {
      this.classAir = resposta;
      console.log(this.classAir)
    }, ex => {
      this.toastr.error(ex.error.error);
    })
  }
}
