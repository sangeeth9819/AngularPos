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
  private searchItemList: Array<ItemDto> = [];
  private customList: Array<CustomDto> = [];
  private oneItem: Array<ItemDto> = [];
  customDTO: CustomDto = new CustomDto();
  private item: ItemDto = new ItemDto();

  itemId: number;
  itemName: string;
  priceTXT: number;
  qtyTotal: number;
  qty: number;
  total: number;
  searchId: number;

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
    });
  }


  setPrice11(i: number) {
    this.searchId = i;
    this.itemService.getItemOne(this.searchId).subscribe(result => {
      this.ItemList = result;
      alert(JSON.stringify(this.ItemList));
    });
    // for (const num of this.ItemList) {
    //   if (num.code == i) {
    //     console.log(num.price);
    //     this.priceTXT = parseFloat(num.price);
    //   } else {
    //     console.log('lll');
    //   }
    // }
  }

  myfunction() {
    this.priceTXT = this.qty * this.priceTXT;
  }

  addtoTable() {
    this.customDTO.code = 12;
    this.customDTO.price = this.priceTXT;
    this.customDTO.qty = this.qty;
    this.customList.push(this.customDTO);
    this.customDTO = new CustomDto();
    this.total = this.priceTXT;
    for (const i in this.customList) {
      console.log('Total :-----> ' + this.total);
    }
  }


  placeOrder() {
    this.orderService.addItem(
      {
        oid: 0,
        date: '2019-12-12',
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
