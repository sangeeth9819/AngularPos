import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerDto} from '../../dto/customer-dto';
import {ItemService} from '../../service/item.service';
import {ItemDto} from '../../dto/item-dto';
import {CustomDto} from '../../dto/custom-dto';

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
    private itemService: ItemService
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
    this.priceTXT = this.qty * parseFloat(this.priceTXT);
  }

  addtoTable() {
    this.customDTO.code = this.itemId;
    this.customDTO.price = parseFloat(this.priceTXT);
    this.customDTO.qty = this.qty;
    this.customList.push(this.customDTO);
    this.customDTO = new CustomDto();
    this.total += parseFloat(this.priceTXT);
    console.log('Total :-----> ' + this.total);

  }



}
