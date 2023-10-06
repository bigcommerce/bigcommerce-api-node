import { AxiosInstance } from 'axios';

import CartLineItems from './CartLineItems';
import CartRedirect from './CartRedirect';
import Carts from './Carts';
import CartSettingsChannel from './CartSettingsChannel';
import CartSettingsGlobal from './CartSettingsGlobal';

class CartsV3 {
  public carts: Carts;
  public cartLineItems: CartLineItems;
  public cartRedirect: CartRedirect;
  public cartSettingsGlobal: CartSettingsGlobal;
  public cartSettingsChannel: CartSettingsChannel;

  constructor(client: AxiosInstance) {
    this.carts = new Carts(client);
    this.cartLineItems = new CartLineItems(client);
    this.cartRedirect = new CartRedirect(client);
    this.cartSettingsGlobal = new CartSettingsGlobal(client);
    this.cartSettingsChannel = new CartSettingsChannel(client);
  }
}

export default CartsV3;
