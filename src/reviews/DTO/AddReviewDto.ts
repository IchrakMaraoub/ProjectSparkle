import { IsNotEmpty, IsString } from "class-validator";

export class addReviewDto{
@IsString()
@IsNotEmpty()
text: String;

}