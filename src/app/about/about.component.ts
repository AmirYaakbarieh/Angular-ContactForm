import { Component, OnInit } from '@angular/core';
import { ShoppingCardItemModel } from '../interfaces/shopping-cart-item.models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  totalPrice: number = 0;

  items: ShoppingCardItemModel[] = []
  
  ngOnInit(): void {
    // this.initCart();
    this.initLocalStorage();
  }


  
  
    

  deletEvent(event: number){
    // console.log(event);
    const index = this.items.findIndex(item => item.id === event);
    this.items.splice(index, 1);
  }

  onCountUpdattedEvent(event: ShoppingCardItemModel ){
    const index = this.items.findIndex(item => item.id === event.id);
    this.items[index] = event;
  }
  
  public initCart(){
    this.items = [
      {id:1,
        image: 'assets/images/iphone14.jpg',
        name: 'iphone 14 ',
        count: 0,
        price: 999 },
  
      {id:2,
        image: 'assets/images/iphone-14-pro-maxx.jpg',
        name: 'iphone 14 pro ',
        count: 5,
        price: 1280}
    ];
    this.refresh();
  }

  public refresh(){
    let sumPrice: number = 0;
   
    this.items.forEach(item => {
      const price: number = item.price ?? 0;                                    //if the "item.price" equl null then item.price = 0
      sumPrice += (price * (item.count ?? 0));
    });
    this.totalPrice = sumPrice;

    localStorage.setItem('cart', JSON.stringify(this.items));                     //update our data
  }

  private initLocalStorage(){
    var data = localStorage.getItem('cart');
    if(data){
      this.items = JSON.parse(data);    
      this.refresh();              
    }
  }

}
