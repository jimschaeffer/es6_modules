import Car from "./car";

export default class WishList {
    constructor(list, id) {
        this.list = [];
        this.nextId = 0;
    }
    
    add(make, model, year) {
        const car = new Car(++this.nextId, make, model, year);
        this.list.push(car);
    }

    remove(carId) {
        this.list = this.list.filter((car) => {
            return car.id != carId;
        })
    }
}