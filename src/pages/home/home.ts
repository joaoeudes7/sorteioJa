import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {random} from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public historic: any = [];
  public num = 0;
  public min = 1;
  public max = 50;
  public _form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder) {

    this._form = formBuilder.group({
      entity: this.formBuilder.group({
        max: [this.max, Validators.required],
        min: [this.min, Validators.required]
      })
    });

  }

  ionViewWillLeave() {
    localStorage.setItem('historic', JSON.stringify(this.historic));
  }

  random() {
    this.num = random(this.min, this.max);
    this.historic.push(this.num);
  }

}
