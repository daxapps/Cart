import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data !== null){
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Americano",
        description: "Americano",
        img: "assets/noun_942609_cc.png",
        price: 2
      },
      {
        id:2,
        title: "Espresso Machine",
        description: "Italian Espresso Machine",
        img:"assets/noun_943220_cc.png",
        price:800
      },
      {
        id:3,
        title: "Coffee",
        description: "Cup of coffee",
        img:"assets/noun_11819_cc.png",
        price:3
      },
      {
        id:4,
        title: "Latte",
        description: "12oz Latte",
        img:"assets/noun_980115_cc.png",
        price:3
      },
      {
        id:5,
        title: "Cappuccino",
        description: "12oz Cappuccino",
        img:"assets/noun_924233_cc.png",
        price:4
      },
      {
        id:6,
        title: "Milk",
        description: "Pint of milk",
        img:"assets/noun_731877_cc.png",
        price:3
      },
      {
        id:7,
        title: "1lb Coffee",
        description: "1lb Coffee",
        img:"assets/noun_952355_cc.png",
        price:4
      },
      {
        id:8,
        title: "Cocoa",
        description: "Hot Cocoa",
        img:"assets/noun_731881_cc.png",
        price:2
      },
      {
        id:9,
        title: "Macchiato",
        description: "12oz macchiato",
        img:"assets/noun_1014669_cc.png",
        price:3
      }
    ]
  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
