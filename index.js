const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.f45226ea845708165c1747088de18c3a;
const city = process.argv[2];

if (!city) {
    console.log('Please provide a city name.');
    process.exit(1);
}

const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

axios.get(url)
    .then(response => {
        const data = response.data;
        if (data.error) {
            console.log('Unable to find location. Try another search.');
        } else {
            console.log(`It's currently ${data.current.temperature} degrees in ${data.location.name}.`);
        }
    })
    .catch(error => {
        console.log('Unable to connect to weather service!');
    });
