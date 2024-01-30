import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getallproduct().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCatergorys().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getProducts() : this.getProductsCategory(value);
  }
  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false;
      this.products = res;
    });
  }
  addToCart(event: any) {
    console.log(event);
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (ele: any) => ele.item.id === event.item.id
      );
      if (exist) {
        alert('Product is already in your cart');
      } else {
        this.cartProducts.push({ item: event.item, quantity: event.quantity });
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push({ item: event.item, quantity: event.quantity });
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
