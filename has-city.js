function hasCity(country, cities) {
    if (typeof country === 'string' && Array.isArray(cities)) {
        return function (city) {
            if (typeof city === 'string') {
                return cities.includes(city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`;
            }
        }
    }
}