import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GrocessoryItem } from '../models/gorcery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private header :any= {
    'content-Type': 'application/json'
  }
  constructor(private http: HttpClient) { }

  public addItem(url: string, groceryItem:GrocessoryItem): Observable<any> {
    const body = JSON.stringify(groceryItem);
    return this.http.post<any>(url,body,{'headers':this.header});
    
  }

   public getGroceryList(url: string): Observable<any> {
    return this.http.get<any>(url, {'headers':this.header});
   }

   public detelteGroceryItem(url: string, item_id:number): Observable<any> {

    return this.http.delete<any>(url+'/'+item_id, {'headers':this.header});
   }
}
