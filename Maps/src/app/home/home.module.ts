import{ViewChild, ElementRef} from '@angular/core';
import{NavController, Platform} from '@ionic/angular';

import {HomePage} from './home.page';

@Component({
  selector:'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage{
  constructor(public navCtrl: NavController){

  }
}