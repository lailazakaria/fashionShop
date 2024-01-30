import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private service:CartsService) { }
  cartProducts:any[] = [];
  total:number = 0;
  success:boolean = false
  ngOnInit(): void {
    this.getCartProducts()
  }


  getCartProducts() {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartProducts)
    }
    this.getCartTotal()
  }

  addAmount(index:number) {
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  minsAmount(index:number) {
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  detectChange() {
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  deleteProduct(index:number) {
    this.cartProducts.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }

  clearCart() {
    this.cartProducts = []
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  getCartTotal() {
    this.total = 0
    for( let ele in this.cartProducts) {
      this.total =this.total +  this.cartProducts[ele].item.price * this.cartProducts[ele].quantity;
    }
  }

  addCart() {
   let products1 = this.cartProducts.map(ele => {
    return {productId:ele.item.id , quantity:ele.quantity}
   })

    let Model = {
      userId:5,
      date: new Date().toISOString(),
      products:products1
    }

    console.log(Model)
    this.service.createNewCart(Model).subscribe(res => {
      this.success = true
      localStorage.clear()

    })

    // console.log(Model)
  }


}

