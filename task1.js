const car = {
    company: 'Honda',
    model: 'Pilot',
    doors: 4,
    color: 'blue'
};


const carJSON = JSON.stringify(car);
console.log(carJSON, typeof carJSON);

const carObject = JSON.parse(carJSON);
console.log(carObject, typeof carObject);
