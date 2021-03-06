import { Component, EventEmitter } from '@angular/core';

import { Client } from '../../../services/api';
import { CreditCard } from '../../../interfaces/card-interface';

@Component({
  moduleId: module.id,
  selector: 'minds-checkout-card-input',
  outputs: ['_confirm: confirm'],
  templateUrl: 'card.html'
})

export class CardInput {

  _confirm : EventEmitter<any> = new EventEmitter();
  card : CreditCard = <CreditCard>{ month: 'mm', year: 'yyyy'};
  inProgress : boolean = false;
  confirmation: boolean = false; // @todo: ??
  error: string = ''; // @todo: ??

  constructor(public client : Client) {
  }

  validate(){

    if(!this.card.number || !this.card.sec || !this.card.name)
      return false;

    if(this.card.month == 'mm' || this.card.year == 'yyyy')
      return false;

    return true;
  }

  confirm(){
    this._confirm.next(this.card);
  }

}
