import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Address } from "./Address"
import { Order } from "./Order"

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(type => Order, order => order.customer)
    orders: Order[];

    @OneToMany(type => Address, address => address.customer)
    address: Address[];

}