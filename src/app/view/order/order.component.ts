import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerDto} from '../../dto/customer-dto';
import {ItemService} from '../../service/item.service';
import {ItemDto} from '../../dto/item-dto';
import {CustomDto} from '../../dto/custom-dto';
import {OrderService} from '../../service/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private customerList: Array<CustomerDto> = [];
  private ItemList: Array<ItemDto> = [];
  private customList: Array<CustomDto> = [];
  private oneItem: Array<ItemDto> = [];
  customDTO: CustomDto = new CustomDto();
  private item: ItemDto = new ItemDto();

  itemId: number;
  itemName: string;
  priceTXT: string;
  qtyTotal: number;
  qty: number;
  total: number;

  constructor(
    private customerService: CustomerService,
    private itemService: ItemService,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.getAll();
    this.getAllItem();
  }

  getAll() {
    this.customerService.getAllCustomers().subscribe(result => {
      this.customerList = result;
      console.log('Customer List Combo :- ' + JSON.stringify(this.customerList));
    });

  }

  getAllItem() {
    this.itemService.getAllItems().subscribe(result => {
      this.ItemList = result;
      // console.log('item List :- ' + JSON.stringify(this.ItemList));
    });
  }

  setPrice11(i: number) {
    for (const num of this.ItemList) {
      if (num.code == i) {
        console.log(num.price);
        this.priceTXT = num.price;
      } else {
        console.log('lll');
      }
    }
  }

  myfunction() {
    this.priceTXT = this.qty * this.priceTXT;
  }

  addtoTable() {
    this.customDTO.code = this.itemId;
    this.customDTO.price = parseFloat(this.priceTXT);
    this.customDTO.qty = this.qty;
    this.customList.push(this.customDTO);
    this.customDTO = new CustomDto();
    this.total = parseFloat(this.priceTXT);

    // for (const a = 0; a < this.customList.length; a++) {
    //   // this.total += this.customList.indexOf(a).getPr;
    //   console.log('Total :-----> ');
    // }

    for (const i in this.customList) {
      // this.total = this.total + parseFloat(this.priceTXT);
      // this.total += parseFloat(this.priceTXT);
      console.log('Total :-----> ' + this.total);
    }


  }


  placeOrder() {
    this.orderService.addItem(
      {
        oid: 0,
        date: '10-05-2018',
        total: 12.00,
        cid: 1,
        orderDetailDTOS: this.customList
      }
    ).subscribe(result => {
      if (result) {
        alert('success');
        this.getAll();
      } else {
        alert('fail');
      }
    });
  }

  tableRow_Click(c: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Item Successfully deleted',
          'success'
        );
        this.customList.splice(c, 1);
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

}
