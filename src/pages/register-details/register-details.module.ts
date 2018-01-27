import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterDetailsPage } from './register-details';

@NgModule({
  declarations: [
    RegisterDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterDetailsPage),
  ],
})
export class RegisterDetailsPageModule {}
