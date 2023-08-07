import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Voo } from 'src/app/models/voo';
import { VooService } from 'src/app/services/voo.service';


@Component({
  selector: 'app-voo-list',
  templateUrl: './voo-list.component.html',
  styleUrls: ['./voo-list.component.css']
})
export class VooListComponent {

  ELEMENT_DATA: Voo[] = []
  FILTERED_DATA: Voo[] = []

  displayedColumns: string[] = ['id', 'aeroportoIda', 'aeroportoVolta', 'status', 'actions'];
  dataSource = new MatTableDataSource<Voo>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private service: VooService) { }

  
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Voo>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  retornaStatus(status: any): string {
    if (status == '0') {
      return 'ABERTO'
    } else if (status == '3') {
      return 'CANCELADO'
    } else {
      return 'ENCERRADO'
    }
  }

  orderByStatus(status: any): void {
    let list: Voo[] = [];
    this.ELEMENT_DATA.forEach(element => {
      if (element.status == status) {
        list.push(element);
      };
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Voo>(list);
    this.dataSource.paginator = this.paginator;
  }
}
