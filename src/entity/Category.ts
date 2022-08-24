import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(type => Product, product => product.category)
    product: Product[];
}