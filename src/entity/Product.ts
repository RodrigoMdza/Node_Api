import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @ManyToMany(type => Category, category => category.product, {eager: true, cascade: true})
    @JoinTable({
        name: "product_category",
        joinColumn: {
            name: "product_id",
        },
        inverseJoinColumn: {
            name: "category_id",
        },        
    })
    category: Category[];
}