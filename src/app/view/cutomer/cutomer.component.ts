import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerDto} from '../../dto/customer-dto';



@Component({
  selector: 'app-cutomer',
  templateUrl: './cutomer.component.html',
  styleUrls: ['./cutomer.component.css']
})
export class CutomerComponent implements OnInit {

  // @ViewChild('serviceForm') public serviceForm: NgForm;

  private customerDto: CustomerDto = new CustomerDto();
  private customerList: Array<CustomerDto> = [];

  constructor(
    private customerservice: CustomerService
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {

    this.customerservice.getAllCustomers().subscribe(result => {
      this.customerList = result;
      console.log('Customer List :- ' + JSON.stringify(this.customerList));
    });

  }

  addCustomer() {
    this.customerservice.addCustomer(
      {
        cid: 0,
        name: this.customerDto.name,
        address: this.customerDto.address,
        mobile: this.customerDto.mobile
      }
    ).subscribe(result => {
      console.log(result);
      if (result) {
        alert('success');
        this.getAll();
        // this.customerList.push(this.customerDto);
      } else {
        alert('fail');
      }
    });
  }

  loadCustomer(customer) {
    const obj = this.customerDto;
    this.customerDto = Object.assign(obj, customer);
  }

}