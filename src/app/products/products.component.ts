import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { forEach, last } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$;
  selectedProduct$;
  filteredProducts;
  lastId = -1;
  _filterValue = '';
  selectedOrder;
  options = ['creation date', 'name'];
  get filterValue(): string{
    return this._filterValue;
  }
  set filterValue(value :string)
  {
    this._filterValue = value;
    this.filteredProducts = this.filterProducts();
  }
  constructor(private data: DataService, private pager: NgxPaginationModule, private renderer: Renderer2, private el: ElementRef) { }

  //one of several lifecycle hooks -> refer to anguler lifecycle hooks
  ngOnInit() {
    this.products$ = this.data.getItems();
    this.filteredProducts = this.data.getItems();
    for (var i = 0; i < this.products$.length; i++) {
      if (this.products$[i].id > this.lastId)
        this.lastId = this.products$[i].id;
    }
    this.data.currentProduct.subscribe(product => this.selectedProduct$ = product);
  }
  //define your method
  selectProduct(event, product) {
    this.data.selectProduct(product);
  }
  addProduct(event) {debugger;
    var product = this.data.createNewItem(++this.lastId);
    this.data.selectProduct(product);
  }
  removeProduct(event,cssclass: string,product)
  {
    var activeElement = document.getElementsByClassName(cssclass);
    for (var i = 0; i < activeElement.length; i++) {
      this.renderer.removeClass(activeElement[i], cssclass);
    }
    this.data.removeProduct(product);
  }
  filterProducts()
  {
    return this.products$.filter(product=> (product.name.toLowerCase().indexOf(this._filterValue.toLowerCase()) >=0) ||
    (product.description.toLowerCase().indexOf(this._filterValue.toLowerCase()) >= 0));
  }
}
