import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Order } from './Entity/OrdersEntity';
import { addOrderDto } from './DTO/AddOrdersDto';
import { UpdateOrderDto } from './DTO/UpdateOrdersDto';
import { OrdersService } from './orders.service';
@Controller('orders')
export class OrdersController {
    constructor(private OrderService:OrdersService){}
    @Get()
 async getAllOrder() : Promise<Order[]>{
    return  await this.OrderService.getOrder();
  }
  @Get('completd')
  async getCompletedOrder() : Promise<Order[]>{
     return  await this.OrderService.getCompletedOrder();
   }
   @Get('incompleted')
   async getIncompletedOrder() : Promise<Order[]>{
    return  await this.OrderService.getIncompletedOrder();
  }
  @Post ()
  async addOrder(
@Body() addOrderDto:addOrderDto):Promise<Order>{
  return await this.OrderService.addOrder(addOrderDto);}
@Patch (':id')
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
