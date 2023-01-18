import { Injectable, NotFoundException } from '@nestjs/common';
import { createQueryBuilder, Repository } from 'typeorm';
import { UpdateAdminDto } from './DTO/UpdateAdminDto';
import { InjectRepository } from '@nestjs/typeorm';
import { addAdminDto } from './DTO/AddAdminDto';
import { Admin } from './Entity/AdminEntity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admin)
        private AdminRepository: Repository<Admin>,
        private jwtService: JwtService
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
     async login(credential:addAdminDto){

      const {UserName, Password} = credential;
      // On peut se logger ou via le username ou le password
      // Vérifier est ce qu'il y a un admin avec ce login ou ce mdp
      /*const admin = await this.AdminRepository.createQueryBuilder("admin")
        .where("admin.username = :username or admin.password = :password",
          {UserName}
          )
        .getOne();
        */
      const admin = await createQueryBuilder()
      .select()
      .from(Admin, 'admin')
      .where('admin.UserName=:UserName', { UserName })
      .getOne();
  
      if (!admin)
        throw new NotFoundException('username ou password erronée');
      const hashedPassword = await bcrypt.hash(Password, admin.salt);
      if (hashedPassword === admin.Password) {
        const payload = {
          username: admin.UserName
        };
        const jwt = await this.jwtService.sign(payload);
        return {
          "access_token" : jwt
        };
      } else {
        // Si mot de passe incorrect je déclenche une erreur
        throw new NotFoundException('username ou password erronée');
      }
    }
  
  
    
    
  }


