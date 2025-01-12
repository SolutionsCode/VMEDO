import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VmedoHomepageComponent } from './vmedo-homepage/vmedo-homepage.component';


const routes: Routes = [

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  

  {
    path: 'home',
    component: VmedoHomepageComponent
  },


  {
    path:'info',   loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
  }, 

  {
    path:'services',   loadChildren: () => import('./vmedo-services/vmedo-services.module').then(m => m.VmedoServicesModule)
  }, 
 
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'emergency', loadChildren: () => import('./emergency-module/emergency-module.module').then(m => m.EmergencyModuleModule)
  },

  {
    path: 'hospitals', loadChildren: () => import('./hospital-module/hospital-module.module').then(m => m.HospitalModuleModule)
  },
  {
    path: 'subscription', loadChildren: () => import('./subscription-module/subscription-module.module').then(m => m.SubscriptionModuleModule)
  },
  {
    path: 'emid', loadChildren: () => import('./emid-module/emid-module.module').then(m => m.EmidModuleModule)
  },
  
  

  {
    path: '**', // Catch-all route
    component: PagenotfoundComponent // Replace 'NotFoundComponent' with the component you want to display for invalid paths
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
