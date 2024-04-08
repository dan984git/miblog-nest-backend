import { IsDate, IsDateString, IsNumber, IsString, Length } from "class-validator";

export class CreateArticleDto {


    @IsString()
    @Length(3, 255)
    title: string;

    @IsString()
    @Length(3, 255)
    description: string;

    @IsDate()
    date: Date;

    @IsString()
    @Length(3, 255)
    image: string;

    @IsString()
    @Length(3, 255)
    author: string;

    @IsNumber()
    outstanding: number;

    @IsString()
    @Length(1, 99999)
    text: string

}