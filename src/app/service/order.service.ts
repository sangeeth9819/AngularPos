import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
  ) {
  }

  addItem(OrderDto) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'Application/json');
    headers = headers.append('operation', 'add');
    console.log(OrderDto);
    console.log(`headers ${headers.keys()}`);
    return this.http.post('http://localhost:8080/pos/orders', OrderDto, {headers});
  }


}
