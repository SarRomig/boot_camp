class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk (make, model, year) {
        const noise = "Beep!";
        return noise;
    }
    toString (make, model, year) {
        const descriptString = `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
        return descriptString;
    }
}

class Car extends Vehicle (make, model, year) {
    constructor (make, model, year) {
        super();
    }
    numWheels () {
        return 4;
    }
}

class Motorcycle extends Vehicle (make, model, year) {
    constructor (make, model, year){
        super();
    }
    numWheels () {
        return 2;
    }
    revEngine() {
        const noise = "VROOM!!";
        return noise;
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity; //each new Garage will have a different capacity
    }
add(vehicle) {
    if (this.vehicles,length >= this.capacity) {
        return "Sorry we're full!";
    }
    if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!!"; //had to get help here for instanceof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
    }
    this.vehicles.push(vehicle);
    return "Your vehicle is parked successfully in the garage!";
}
}
