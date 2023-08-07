import { Component } from '@angular/core';
import { Aeroporto } from 'src/app/models/aeroporto';
import {  ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AeroportoService } from 'src/app/services/aeroporto.service';

@Component({
  selector: 'app-aeroporto-list',
  templateUrl: './aeroporto-list.component.html',
  styleUrls: ['./aeroporto-list.component.css']
})
export class AeroportoListComponent {

  ELEMENT_DATA: Aeroporto[] = []
  displayedColumns: string[] = ['position', 'name', 'airportIATA' ,'cidade'];
  dataSource = new MatTableDataSource<Aeroporto>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: AeroportoService){}

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Aeroporto>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
