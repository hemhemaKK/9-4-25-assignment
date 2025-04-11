function createCar(make,model,year){
    let car = {}
    car.make = make
    car.model = model
    car.year = year
    car.describeCar = function(){
        console.log(`This car is ${year} ${make} ${model}.`)
    }
    return car
}
const car1 = createCar("Toyota", "Camry", 2022);
car1.describeCar();