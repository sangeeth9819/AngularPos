import {OrderDetailDto} from './order-detail-dto';

export class OrderDto {
  oid: number;
  date: Date;
  total: number;
  cid: number;
  orderDetail: OrderDetailDto;
}
