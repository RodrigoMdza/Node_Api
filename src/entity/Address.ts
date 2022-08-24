import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Customer } from "./Customer";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    postalCode: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    houseNumber: string;

    @Column()
    complement: string;

    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    neighborhood: string;

    @Column()
    reference: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => Customer, customer => customer.address)
    customer: Customer;

}