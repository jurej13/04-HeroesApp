import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes : Routes =[
  {
    path:'auth',
    // Cuando alguien entre al path auth, recien carga el auth module, mediante la promesa
    // Recien al entrar en auth hace el import del modulo, el buen lazy
    loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule),
  },{
    path:'heroes',
    loadChildren:()=> import('./heroes/heroes.module').then(m=> m.HeroesModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
  },
  {path:'404',component:ErrorPageComponent},
  {path:'**',redirectTo:'404'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
