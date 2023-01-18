import { Injectable } from '@nestjs/common';
import { Review } from './Entity/ReviewEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addReviewDto } from './DTO/AddReviewDto';


@Injectable()
export class ReviewsService {
   
    constructor(
        @InjectRepository(Review)
    private ReviewRepository: Repository<Review>,
  ){}
  async getReviews(): Promise<Review[]> {
    return await this.ReviewRepository.find();
  }
  async addReview(Review:addReviewDto) : Promise<Review>{
    return this.ReviewRepository.save(Review);
  }

  async getReview(): Promise<Review[]> {
    return await this.ReviewRepository.find();
  

}
async removeRev(id:number){
    await this.ReviewRepository.delete(id);
}
}