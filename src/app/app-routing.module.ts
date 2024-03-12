import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { MenupageComponent } from './page/menupage/menupage.component';
import { OrderrecordComponent } from './page/orderrecord/orderrecord.component';
const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'menu' , component: MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about' , component: AboutComponent},
  {path:'contact' , component: ContactComponent},
  {path:'orderecord' , component:OrderrecordComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
