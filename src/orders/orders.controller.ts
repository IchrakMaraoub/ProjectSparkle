import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Order } from './Entity/OrdersEntity';
import { addOrderDto } from './DTO/AddOrdersDto';
import { UpdateOrderDto } from './DTO/UpdateOrdersDto';
import { OrdersService } from './orders.service';
@Controller('orders')
export class OrdersController {
   OrderService: any;
    @Get()
 async getAllOrder() : Promise<Order[]>{
    return  await this.OrderService.getOrder();
  }
  @Post ()
  async addOrder(
@Body() addOrderDto:addOrderDto):Promise<Order>{
  return await this.OrderService.addOrder(addOrderDto);}
@Patch ()
async updateOrder(
@Body() UpdateOrderDto:UpdateOrderDto,
@Param('id') id:number):Promise<Order>{
return await this.OrderService.updateOrder(id,UpdateOrderDto);
}
@Delete(':id')
async removeOrder(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.OrderService.removeOrder(id);
}
}
