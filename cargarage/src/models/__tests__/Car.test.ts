import Car from '../Car';

it('should construct properly', () => {
    const car = new Car(2020, 'A', 'B');
    expect(car.year).toEqual(2020);
    expect(car.make).toEqual('A');
    expect(car.model).toEqual('B');
    expect(car.price).toEqual(1000.00);
})