import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerDto} from '../../dto/customer-dto';
import {ItemService} from '../../service/item.service';
import {ItemDto} from '../../dto/item-dto';
import {CustomDto} from '../../dto/custom-dto';
import {OrderService} from '../../service/order.service';
import Swal from 'sweetalert2';
import {OrderDto} from '../../dto/order-dto';
import {OrderDetailDto} from '../../dto/order-detail-dto';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private customerList: Array<CustomerDto> = [];
  private ItemList: Array<ItemDto> = [];
  private orderValues: Array<OrderDetailDto> = [];
  private customList: Array<CustomDto> = [];
  customDTO: CustomDto = new CustomDto();
  orderDetailDTO: OrderDetailDto = new OrderDetailDto();
  itemDTO: ItemDto = new ItemDto();
  orderDTO: OrderDto = new OrderDto();

  itemId: number;
  cid: string;
  priceTXT: string;
  description: string;
  qty: string;
  priceText2: number;
  qty2: number;
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
      // console.log('Customer List Combo :- ' + JSON.stringify(this.customerList));
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
      this.itemDTO = result;
      console.log(JSON.stringify(this.itemDTO));
      this.priceTXT = this.itemDTO.price;
      this.description = this.itemDTO.name;
      this.itemId = this.itemDTO.code;
      // alert(this.itemId);

    });
  }

  myfunction() {
    this.priceText2 = parseFloat(this.priceTXT);
    this.qty2 = parseFloat(this.qty);
    this.priceText2 = this.qty2 * this.priceText2;
    this.priceTXT = this.priceText2.toString();
  }

  addtoTable() {
    this.orderDetailDTO.code = this.itemId,
      this.orderDetailDTO.oid = 0,
      this.orderDetailDTO.unitPrice = parseFloat(this.priceTXT),
      this.orderDetailDTO.qty = parseFloat(this.qty),
      this.orderValues.push(this.orderDetailDTO);
    // alert('Total :-----> ' + JSON.stringify(this.orderValues));

    this.customDTO.description = this.description;
    this.customDTO.price = parseFloat(this.priceTXT);
    this.customDTO.qty = parseFloat(this.qty);
    this.customList.push(this.customDTO);
    this.customDTO = new CustomDto();
    this.total = parseFloat(this.priceTXT);
    // for (const i in this.customList) {
    //   // alert('Total :-----> ' + this.orderValues);
    // }
  }

  clearText() {
    this.priceTXT = ' ';
  }


  placeOrder() {
    this.orderDTO.total = parseFloat(this.priceTXT);
    this.orderDTO.oid = 0;
    this.orderDTO.date = '2019-11-11';
    this.orderDTO.cid = parseFloat(this.cid),
      this.orderDTO.orderDetailDTOS = this.orderValues;
    this.orderService.addItem(this.orderDTO).subscribe(result => {
      if (result) {
        Swal.fire('Order Added Successfully');
        this.getAll();
      } else {
        Swal.fire('Oops...', 'Something went wrong!', 'error');
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
        this.clearText();
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
