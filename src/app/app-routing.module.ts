import { ContactoComponent } from './components/contacto/contacto.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
 {path: "inicio", component: InicioComponent},
 {path: "acerca", component: AcercaComponent},
 {path: "contacto", component: ContactoComponent},
 {path: "", redirectTo: "/inicio", pathMatch: "full"},
 {path:"**", component: ContactoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
