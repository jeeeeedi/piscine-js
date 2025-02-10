const arfs = new Map([
    ['earth', 1],
    ['mercury', 0.2408467],
    ['venus', 0.61519726],
    ['mars', 1.8808158],
    ['jupiter', 11.862615],
    ['saturn', 29.447498],
    ['uranus', 84.016846],
    ['neptune', 164.79132],
]);



function dogYears(planet, ageSec) {
    const planetYear = arfs.get(planet);
    const arfYears = (ageSec / (31557600 * planetYear)) * 7;
    roundedArfs = Math.round(arfYears * 100) / 100;
    return roundedArfs;
}

//console.log(dogYears('earth', 1000000000))