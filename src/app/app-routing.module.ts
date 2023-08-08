import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './components/chamado/chamado-read/chamado-read.component';
import { AeroportoListComponent } from './components/aeroporto/aeroporto-list/aeroporto-list.component';
import { VooListComponent } from './components/voo/voo-list/voo-list.component';
import { VooCreateComponent } from './components/voo/voo-create/voo-create.component';
import { VooUpdateComponent } from './components/voo/voo-update/voo-update.component';
import { ClassAirListComponent } from './components/classAir/class-air-list/class-air-list.component';
import { ClassAirUpdateComponent } from './components/classAir/class-air-update/class-air-update.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
{
  path: '', component: NavComponent, canActivate: [AuthGuard], children: [
    {path: 'home', component: HomeComponent},

    {path: 'tecnicos', component:TecnicoListComponent},
    {path: 'tecnicos/create', component: TecnicoCreateComponent},
    {path: 'tecnicos/update/:id', component: TecnicoUpdateComponent},
    {path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent},

    {path: 'clientes', component:ClienteListComponent},
    {path: 'clientes/create', component: ClienteCreateComponent},
    {path: 'clientes/update/:id', component: ClienteUpdateComponent},
    {path: 'clientes/delete/:id', component: ClienteDeleteComponent},
    
    { path: 'chamados', component: ChamadoListComponent },
    { path: 'chamados/create', component: ChamadoCreateComponent },
    { path: 'chamados/update/:id', component: ChamadoUpdateComponent },
    { path: 'chamados/read/:id', component: ChamadoReadComponent },

    { path: 'aeroportos', component: AeroportoListComponent },

    { path: 'voo', component: VooListComponent },
    { path: 'voo/create', component: VooCreateComponent },
    { path: 'voo/update/:id', component: VooUpdateComponent },

    { path: 'classAir', component: ClassAirListComponent },
    { path: 'classAir/update/:id', component: ClassAirUpdateComponent },
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
