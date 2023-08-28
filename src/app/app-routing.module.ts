import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMatchComponent } from './create-match/create-match.component';
import { FeaturesComponent } from './features/features.component';
import { LogPageComponent } from './log-page/log-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
{path:'',component:LogPageComponent},
{path:'sign-up',component:SignUpComponent},
{path:'main-page',component:MainPageComponent},
{path:'main-page/features',component:FeaturesComponent},
{path:'main-page/create-match',component: CreateMatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
