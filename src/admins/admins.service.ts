import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateAdminDto } from './DTO/UpdateAdminDto';
import { InjectRepository } from '@nestjs/typeorm';
import { addAdminDto } from './DTO/AddAdminDto';
import { Admin } from './Entity/AdminEntity';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admin)
        private AdminRepository: Repository<Admin>,
      ){}
      async getAdmin(): Promise<Admin[]> {
        return await this.AdminRepository.find();
      }
    async addAdmin(Admin:addAdminDto) : Promise<Admin>{
      return this.AdminRepository.save(Admin);  
    }
    
    async updateAdmin(id:number,Admin:UpdateAdminDto): Promise<Admin>{
      const  newAdmin = await this.AdminRepository.preload({
        id,
        ...Admin
      });
      return await this.AdminRepository.save(newAdmin);
    if(!newAdmin)
    {
      throw new NotFoundException('le Admin n existe pas ');
    }}
     async removeAdmin(id : number) {
      
      return await this.AdminRepository.delete(id);
     }
    
  }


