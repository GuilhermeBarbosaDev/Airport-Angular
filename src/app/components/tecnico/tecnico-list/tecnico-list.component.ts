import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit{
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: TecnicoService){

  }

  ngOnInit(): void {
      this.findAll();
  }

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'teste',
      cpf: '123.456.789-10',
      email: 'teste@gmail.com',
      senha: '1234',
      perfis: ['0']
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  
  findAll(){
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response 
      this.dataSource = new MatTableDataSource<Tecnico>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}