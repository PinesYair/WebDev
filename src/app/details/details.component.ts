import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private currentProduct;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentProduct.subscribe(product=> this.currentProduct = product);
  }
  saveItem()
  {
    this.data.saveProduct(this.currentProduct);
    this.data.selectProduct(null);
  }
  
}
