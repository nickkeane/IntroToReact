import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Car {
    constructor(year: number, make: string, model: string) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = 1000.0;
    }

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ type: 'number' })
    year: number = 2000;

    @Column({ type: 'string' })
    make: string = '';

    @Column({ type: 'string' })
    model: string = '';

    @Column({ type: 'number' })
    price: number = 0.0;
}
