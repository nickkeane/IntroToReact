import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Car {
    constructor(year: number, make: string, model: string) {
        this.year = year;
        this.make = make;
        this.model = model;
    }

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({type: 'number'})
    year: number = 2000;

    @Column({type: 'string'})
    make: string = "";

    @Column({type: 'string'})
    model: string = "";
}