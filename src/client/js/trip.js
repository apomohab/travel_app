function createTripBox(data) {
    return `
<div class=\"box\" id=\"${data.id}\">
<div class=\"leftbox\">

    <div class=\"preview\">
        <img src="${data.imgsrc}" width="165" height="165">
    </div>

</div>

    <div class=\"rightbox\">

        <div class=\"info\">
            <b>Destination: ${data.destination}</b>
            <b>Departing: ${data.departdate}</b>
            <b>Returning: ${data.returndate}</b> 
        </div>

        <div class=\"btns\">
            <input type="button" value="remove trip" onclick="Client.removeTrip('${data.id}')">
        </div>

        <div class=\"description\">
            <p>
                ${data.destination} is ${data.deadline} days away and will take ${data.duration} days<br/>
            </p>
            <div>
                <big>Typical weather for then is:</big>
                <small>${data.temp} will be the approximately temperature.</small>
                <small>${data.summary} throughout the day.</small>
            </div>
        </div>

    </div>
</div>`
}

export {
    createTripBox
}