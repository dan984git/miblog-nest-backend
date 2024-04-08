import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('article', { name: 'article' })
export class Article {

    @PrimaryGeneratedColumn({ name: 'ar_id' })
    id: number;

    @Column({ length: 100, name: 'ar_title' })
    title: string;

    @Column({ length: 255, name: 'ar_description' })
    description: string;

    @Column({ name: 'ar_date' })
    date: Date;

    @Column({ length: 255, name: 'ar_image' })
    image: string;

    @Column({ length: 255, name: 'ar_author' })
    author: string

    @Column({ name: 'ar_outstanding' })
    outstanding: number

    @Column({ length: 9999, name: 'ar_text' })
    text: string

}