import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCardItemModel } from '../interfaces/shopping-cart-item.models';

@Component({
  selector: 'app-shoping-card-item',
  templateUrl: './shoping-card-item.component.html',
  styleUrls: ['./shoping-card-item.component.scss']
})
export class ShopingCardItemComponent implements OnInit {
  
  

  @Input() item?: ShoppingCardItemModel;

  @Output() deletItem = new EventEmitter<number>();

  @Output() onRefresh = new EventEmitter();

  @Output() onCountUpdatted = new EventEmitter<ShoppingCardItemModel>();

  private count: number = 0
  
  ngOnInit(): void {
    
  }

  public plusFun(){
    {
      this.count++;
       this.item!.count = this.count
    }
    this.onCountUpdatted.emit(this.item);
    this.onRefresh.emit();
  }

  public minuseFun(){
    if(!(this.count <= 0) ){
      this.count--;
      this.item!.count = this.count
    }
    this.onCountUpdatted.emit(this.item);
    this.onRefresh.emit();
  }

  public del(ID?: number){
    this.deletItem.emit(ID);
    this.onRefresh.emit();
  }



}
