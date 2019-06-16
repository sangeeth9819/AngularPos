import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CustomerDto} from '../dto/customer-dto';
import {ItemDto} from '../dto/item-dto';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient,
  ) { }


  addItem(itemDto) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'Application/json');
    headers = headers.append('operation', 'add');
    console.log(itemDto);
    console.log(`headers ${headers.keys()}`);
    return this.http.post('http://localhost:8080/pos/item', itemDto, {headers});
  }

  getAllItems() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'Application/json');
    headers = headers.append('operation', 'getAll');
    return this.http.get<Array<ItemDto>>('http://localhost:8080/pos/item', {headers});
  }
}
