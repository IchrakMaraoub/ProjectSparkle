import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Review } from './Entity/ReviewEntity';
import { ReviewsService } from './reviews.service';
import { addReviewDto } from './DTO/AddReviewDto';
@Controller('reviews')
export class ReviewsController {
    constructor(private ReviewService: ReviewsService) {}
    @Post ()
  async addReview(
@Body() addReviewDto:addReviewDto):Promise<Review>{
return await this.ReviewService.addReview(addReviewDto)}

@Delete(':id')
async removeRev(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.ReviewService.removeRev(id);
}

}
