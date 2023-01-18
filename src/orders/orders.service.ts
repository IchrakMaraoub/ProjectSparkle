import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './Entity/OrdersEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addOrderDto } from './DTO/AddOrdersDto';
import { UpdateOrderDto } from './DTO/UpdateOrdersDto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private OrderRepository: Repository<Order>,
  ) { }
  async getOrder(): Promise<Order[]> {
    return await this.OrderRepository.find();
  }
  async getCompletedOrder(): Promise<Order[]> {
    
    return await this.OrderRepository.findBy({paid: true});
  }
  async getIncompletedOrder(): Promise<Order[]> {
    return await this.OrderRepository.findBy({paid:false});
  }

  async addOrder(Order: addOrderDto): Promise<Order> {
    return this.OrderRepository.save(Order);
  }

  async updateOrder(id: number, Order: UpdateOrderDto): Promise<Order> {
    const newOrder = await this.OrderRepository.preload({
      id,
      ...Order
    });
    return await this.OrderRepository.save(newOrder);
    if (!newOrder) {
      throw new NotFoundException('le Ordre n existe pas ');
    }
  }
  async removeOrder(id: number) {

    return await this.OrderRepository.delete(id);
  }

}


