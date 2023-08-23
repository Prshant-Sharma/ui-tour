import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcRoutingModule } from './abc-routing.module';
import { HelloComponent } from './hello/hello.component';
import { SidebarComponent } from './hello/components/sidebar/sidebar.component';
import { WelcomeComponent } from './hello/components/welcome/welcome.component';
import { RegistrationComponent } from './hello/components/registration/registration.component';
import { FinishComponent } from './hello/components/finish/finish.component';

@NgModule({
  declarations: [
    HelloComponent,
    SidebarComponent,
    WelcomeComponent,
    RegistrationComponent,
    FinishComponent
  ],
  imports: [
    CommonModule,
    AbcRoutingModule,
  ]
})
export class AbcModule { }
