import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CustomerDto} from '../dto/customer-dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,
  ) {
  }

  addCustomer(customerDto): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'Application/json');
    headers = headers.append('operation', 'add');
    console.log(customerDto);
    console.log(`headers ${headers.keys()}`);
    return this.http.post('http://localhost:8080/pos/customer', customerDto, {headers});
  }

  getAllCustomers(): Observable<Array<CustomerDto>> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'Application/json');
    headers = headers.append('operation', 'getAll');
    return this.http.get<Array<CustomerDto>>('http://localhost:8080/pos/customer', {headers});
  }
}
