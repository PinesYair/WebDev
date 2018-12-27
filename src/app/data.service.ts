import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = ([{
    name: 'name1',
    id: 1,
    description: 'name1 DESCRIPTION',
    thumbnailUrl: "https://www.oz-code.com/Content/Images/oz_code_shared-img.png",
    price: 50,
    creationDate: new Date(1980, 10, 1)
  },
  {
    name: 'name3',
    id: 3,
    description: 'name3 DESCRIPTION',
    thumbnailUrl: "https://www.oz-code.com/Content/Images/oz_code_shared-img.png",
    price: 10,
    creationDate: new Date(1980, 12, 1)
  },
  {
    name: 'name2',
    id: 2,
    description: 'name2 DESCRIPTION',
    thumbnailUrl: "https://www.oz-code.com/Content/Images/oz_code_shared-img.png",
    price: 40,
    creationDate: new Date(1999, 12, 1)
  },
  {
    name: 'name4',
    id: 4,
    description: 'name4 DESCRIPTION',
    thumbnailUrl: "https://www.oz-code.com/Content/Images/oz_code_shared-img.png",
    price: 20,
    creationDate: new Date(1990, 12, 1)
  }]);
  private productSub = new BehaviorSubject<Object>(null);
  private Updateproductes = new BehaviorSubject<Object>(null);
  currentProduct = this.productSub.asObservable();

  constructor() { }

  getItems() {
    return this.dataSource.sort(function (a, b) {
      var aid = a.id;
      var bid = b.id;
      return aid - bid;
    });
    return this.dataSource;
  }
  selectProduct(product) {
    var productSelected = undefined;
    if (product != null) {
      productSelected = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        thumbnailUrl: product.thumbnailUrl
      }
    }
    this.productSub.next(productSelected);
  }
  removeProduct(product) {
    var indexToRemove = -1;
    for (var i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].id == product.id) {
        indexToRemove = i;
        break;
      }
    }
    if (indexToRemove >= 0) {
      this.dataSource.splice(indexToRemove, 1);
      this.productSub.next(null);
    }
  }
  saveProduct(product) {
    var foundProduct = false;
    for (var i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].id == product.id) {
        this.dataSource[i].name = product.name;
        this.dataSource[i].description = product.description;
        this.dataSource[i].price = product.price;
        foundProduct = true;
        break;
      }
    }
    if (!foundProduct) {
      this.dataSource.push(product);
    }
  }
  createNewItem(idtoUse) {
    var product = {
      id: idtoUse,
      name: '',
      description: '',
      price: '',
      thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW4mBySYP9CQkTgS6BeSOQCemJk5IaWdRdPoPT8RysPi2hJB8MA',
      creationDate: Date.now()
    }
    return product;
  }
}
