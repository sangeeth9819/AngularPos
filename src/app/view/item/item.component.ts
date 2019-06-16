import {Component, OnInit} from '@angular/core';
import {ItemDto} from '../../dto/item-dto';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  private itemDto: ItemDto = new ItemDto();
  private ItemList: Array<ItemDto> = [];

  constructor(
    private itemService: ItemService
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  addItem() {
    this.itemService.addItem(
      {
        code: 0,
        name: this.itemDto.name,
        price: parseFloat(this.itemDto.price),
        qty: parseFloat(this.itemDto.qty)
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

  getAll() {
    this.itemService.getAllItems().subscribe(result => {
      this.ItemList = result;
      // console.log('Customer List :- ' + JSON.stringify(this.ItemList));
    });

  }

  loadItem(item) {
    const obj = this.itemDto;
    this.itemDto = Object.assign(obj, item);
  }

}
