import { Component, Inject, OnInit } from '@angular/core';
import { GrocessoryItem } from '../../models/gorcery-item.model';
import { GroceryService } from 'src/app/services/grocery.service';
import { Environment } from 'src/app/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-list-management',
  templateUrl: './shopping-list-management.component.html',
  styleUrls: ['./shopping-list-management.component.scss']
})
export class ShoppingListManagementComponent implements OnInit{

  public groceryItem: GrocessoryItem = new GrocessoryItem('','','');
  public itemName:any;
  public notes:any;

  constructor(
              private groceryService: GroceryService,
              @Inject(Environment) private config:any,
              private snackBar: MatSnackBar
            ) {
            }
  ngOnInit(): void {
    this.getGroceryItemList();
  }
  displayedColumns: string[] = ['ItemId','ItemName','Notes','Action'];  
  dataSource: GrocessoryItem[]=[]; 

  public addGroceryItem() {

    this.groceryItem.itemPurchased='no';
    this.groceryService.addItem(this.config.API+'addItem',this.groceryItem).subscribe({
      next: message =>{
       // this.snackBar.open(message, this.groceryItem.itemName);
        this.getGroceryItemList();
      }
    });
  }
  public getGroceryItemList() {
    /*this.groceryService.getGroceryList(this.config.API+'getGroceryList').subscribe((groceryItemList: any) => {
     
        this.dataSource = groceryItemList;
    },
    (error) => {

    }
    );*/
    this.groceryService.getGroceryList(this.config.API+'getGroceryList').subscribe({
      next: groceryItemList =>{
        this.dataSource = groceryItemList;
      }
    });
  }
  public deleteGroceryItem(item_id:number) {
    this.groceryService.detelteGroceryItem(this.config.API+'deleteItem', item_id).subscribe({
      next: groceryItemList =>{
        this.dataSource = groceryItemList;
      }
    });
  }
}
