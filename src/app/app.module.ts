import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShoppingListManagementComponent } from './components/shopping-list-management/shopping-list-management.component';
import { GroceryService } from './services/grocery.service';
import { Environment } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListManagementComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule, HttpClientModule, CommonModule
    
  ],
  providers: [GroceryService,{provide:Environment, useValue:Environment}],
  bootstrap: [AppComponent]
})
export class AppModule { }
