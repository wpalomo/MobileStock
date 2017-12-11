import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WooCommerceProvider } from '../../providers/woocommerce/woocommerce';

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {

  order:any;
  WooCommerce:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public woocommerce: WooCommerceProvider) {
    this.order = this.navParams.get("order");
    this.WooCommerce = this.woocommerce.initialize();

  }

  ionViewDidLoad() {
    
  }

}
