import {OrderDetailDto} from './order-detail-dto';

export class OrderDto {
  oid: number;
  date: string;
  total: number;
  cid: number;
  orderDetailDTOS: Array<OrderDetailDto>;
}
