import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerDto} from '../dto/customer-dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) {
  }

  addCustomer(customerDto: CustomerDto): Observable<any> {
    return this.http.post('http://localhost:8080/Customer/add', customerDto);
  }

  getAllCustomers(): Observable<Array<CustomerDto>> {
    return this.http.get<Array<CustomerDto>>('http://localhost:8080/Customer/getAll');
  }
}
