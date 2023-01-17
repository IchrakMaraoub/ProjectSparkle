import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Admin } from './Entity/AdminEntity';
import { addAdminDto } from './DTO/AddAdminDto';

@Controller('admin')
export class AdminsController {
  constructor(private AdminService: AdminsService) {}
  @Get()
 async getAllAdmin() : Promise<Admin[]>{
    return  await this.AdminService.getAdmin();
  }
  @Post ()
  async addAdmin(
@Body() addAdminDto:addAdminDto):Promise<Admin>{
  return await this.AdminService.addAdmin(addAdminDto);}
@Patch ()

@Delete(':id')
async removeAdmin(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.AdminService.removeAdmin(id);
}

}
