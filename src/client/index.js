import './assets/logo.jpg';
import { getDestCords, getDestImage, getDestForecast } from './js/app';
import { createTripBox } from './js/trip';
import './styles/index.scss';

async function createTrip() {
    // get trip fields value
    const destination = $('#destination').val();
    const departdate = $('#departdate').val();
    const returndate = $('#returndate').val();

    // create a moment object parsed by the date given by the user
    const departmoment = moment(departdate);
    const departformat = departmoment.format('MMM Do YYYY');

    // create a moment object based on return date
    const returnmoment = moment(returndate);
    const returnformat = returnmoment.format('MMM Do YYYY');

    // calc the days between departure and arrival
    const duration = returnmoment.diff(departmoment, 'days');

    // create a moment object with current date in same format as input
    const now = moment().format('YYYY-MM-DD');

    // calc the days left
    const deadline = departmoment.diff(now, 'days');

    // get image url of destination
    const imgsrc = await getDestImage(destination);

    // get destination lat and lng
    const cords = await getDestCords(destination);

    let forecast;

    // if the trip is within a week, then we get the current forecast
    if (deadline <= 7) {
        forecast = await getDestForecast(cords.lat, cords.lng);
    }
    // else (more than a week), we get future forecast
    else {
        const unix = departmoment.unix();
        forecast = await getDestForecast(cords.lat, cords.lng, unix);
    }

    const temp = forecast.currently.temperature;
    const summary = forecast.currently.summary;

    const id = unique();

    const data = {
        destination: destination,
        departdate: departformat,
        returndate: returnformat,
        duration: duration,
        deadline: deadline,
        imgsrc: imgsrc,
        temp: temp,
        summary: summary,
        id: id
    };

    localStorage.setItem(`trip-${id}`, JSON.stringify(data));

    return createTripBox(data);
}

async function appendTrip() {
    const trip = await createTrip();

    // append new trip first
    $(".boxcontainer").prepend(trip);
}

function removeTrip(id) {
    localStorage.removeItem(`trip-${id}`);
    document.getElementById(id).remove();
}

function loadTrips() {
    const len = localStorage.length;

    if (len > 0) {
        len.forEach((n) => {
            const key = localStorage.key(n);

            if (key.includes('trip-')) {
                const trip = localStorage.getItem(key);

                const data = JSON.parse(trip);

                const box = createTripBox(data);

                $(".boxcontainer").prepend(box);
            }
        })
    }
}

export {
    appendTrip,
    removeTrip,
    loadTrips
}