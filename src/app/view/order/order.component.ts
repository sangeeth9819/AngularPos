import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerDto} from '../../dto/customer-dto';
import {ItemService} from '../../service/item.service';
import {ItemDto} from '../../dto/item-dto';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private customerList: Array<CustomerDto> = [];
  private ItemList: Array<ItemDto> = [];
  private oneItem: Array<ItemDto> = [];
  private item: ItemDto = new ItemDto();

  itemId: number;
  itemName: string;
  priceTXT: string;

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
      console.log('item List :- ' + JSON.stringify(this.ItemList));
    });
  }

  setPrice11(i: number) {
    // console.log(JSON.stringify(i));
    //   const d = 0;
    //
    //   for (d = 0; d < this.ItemList.length; d++) {
    //     console.log(JSON.stringify(t));
    //   }
    // }

    // const numbers = [1, 2, 3];
    for (const num of this.ItemList) {
      if (num.code == i) {
        console.log(num.price);
        this.priceTXT = num.price;
      } else {
        console.log('lll');
      }
    }
  }

}
