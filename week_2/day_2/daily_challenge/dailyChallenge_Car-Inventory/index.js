const inventory1 = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

/**
 * Part I
 */

const getCarHonda = (carInventory)=>{

    const honda = carInventory.find(car=>car.car_make === 'Honda')

    console.log(`This is a ${honda.car_make} ${honda.car_model} fron ${honda.car_year}`);

}


/**
 * Part II
 */
  
const sortCarInventoryByYear = (carInventory) =>{

    return carInventory.sort((car1,car2)=>car1.car_year - car2.car_year);

}

console.log(sortCarInventoryByYear(inventory));
