import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClassAir } from 'src/app/models/classAir';
import { ClassAirService } from 'src/app/services/classAir.service';

@Component({
  selector: 'app-class-air-list',
  templateUrl: './class-air-list.component.html',
  styleUrls: ['./class-air-list.component.css']
})
export class ClassAirListComponent {
  ELEMENT_DATA: ClassAir[] = []
  displayedColumns: string[] = ['nome', 'accents', 'price', 'voo', 'status', 'actions'];

  dataSource = new MatTableDataSource<ClassAir>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ClassAirService){}

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<ClassAir>(resposta);
      this.dataSource.paginator = this.paginator;
      console.log(resposta);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
