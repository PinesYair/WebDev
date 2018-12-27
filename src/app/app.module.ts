import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { NameDescFilterPipe } from './name-desc-filter.pipe';
import { SortPipe } from './sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    DetailsComponent,
    NameDescFilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
