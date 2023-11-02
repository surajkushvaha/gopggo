import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:ViewComponent,
    children: [
      {
        path:'home',
        component:LandingPageComponent
      },
      {
        path:'app',
        component:DashboardComponent
      },
      {
        path:'auth',
        loadChildren:()=>import('../auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },

];
@NgModule({
  declarations: [
    DashboardComponent,
    LandingPageComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
   ],
  exports:[
    DashboardComponent,
    LandingPageComponent,
    ViewComponent
  ]
})
export class HomeModule { }
