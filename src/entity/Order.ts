import fetch from "node-fetch";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Customer } from "./Customer";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => Customer, customer => customer.orders, {eager: true, cascade: true})
    customer: Customer;

}