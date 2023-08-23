import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './hello/components/welcome/welcome.component';
import { RegistrationComponent } from './hello/components/registration/registration.component';
import { FinishComponent } from './hello/components/finish/finish.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'finish',
        component: FinishComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
