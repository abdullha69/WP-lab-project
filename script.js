
document.getElementById('bookTicketButton').addEventListener('click', function() {
   
    const departure = document.getElementById('departure').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const travelClass = document.getElementById('class').value;
    const passengers = document.getElementById('passengers').value;

    if (!departure || !destination || !date || !time || !travelClass || !passengers) {
        alert('Please fill out all fields before booking.');
        return;
    }

    alert(`Ticket Booked Successfully!\n\nDetails:\nDeparture: ${departure}\nDestination: ${destination}\nDate: ${date}\nTime: ${time}\nClass: ${travelClass}\nPassengers: ${passengers}`);
});
