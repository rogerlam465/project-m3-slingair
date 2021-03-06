const flightInput = document.getElementById('flight');
const seatsDiv = document.getElementById('seats-section');
const confirmButton = document.getElementById('confirm-button');

let selection = '';

const renderSeats = (seatData) => {
  document.querySelector('.form-container').style.display = 'block';

  const alpha = ['A', 'B', 'C', 'D', 'E', 'F'];

  seatsDiv.innerHTML = "";

  for (let r = 1; r < 11; r++) {
    const row = document.createElement('ol');
    row.classList.add('row');
    row.classList.add('fuselage');
    seatsDiv.appendChild(row);
    for (let s = 1; s < 7; s++) {
      const seatNumber = `${r}${alpha[s - 1]}`;
      const seat = document.createElement('li');

      // Two types of seats to render
      const seatOccupied = `<li><label class="seat"><span id="${seatNumber}" class="occupied">${seatNumber}</span></label></li>`;
      const seatAvailable = `<li><label class="seat"><input type="radio" name="seat" value="${seatNumber}" /><span id="${seatNumber}" class="avail">${seatNumber}</span></label></li>`;

      // TODO: render the seat availability based on the data...

      let result = seatData.find(obj => {
        return obj.id === seatNumber;
      })

      if (result.isAvailable === true) {
        seat.innerHTML = seatAvailable;
      } else {
        seat.innerHTML = seatOccupied;
      }

      row.appendChild(seat);
    }
  }

  let seatMap = document.forms['seats'].elements['seat'];
  seatMap.forEach((seat) => {
    seat.onclick = () => {
      selection = seat.value;
      seatMap.forEach((x) => {
        if (x.value !== seat.value) {
          document.getElementById(x.value).classList.remove('selected');
        }
      });
      document.getElementById(seat.value).classList.add('selected');
      document.getElementById('seat-number').innerText = `(${selection})`;
      confirmButton.disabled = false;
    };
  });
};

const toggleFormContent = (event) => {
  const flightNumber = flightInput.value;

  // validate flight number: 'SA###' is desired format
  // this feels quick-and-dirty, but I suspect it'll do the job.

  const initialLetters = flightNumber[0] + flightNumber[1];

  const endDigits = Number(flightNumber[2] + flightNumber[3] + flightNumber[4]);

  if (initialLetters != "SA" || endDigits === NaN) {
    // you attempted to access the endpoint directly
    // and you did it with an incorrect flight number
    // nope!
    res.status(404).redirect("/seat-select");
  }

  console.log('toggleFormContent: ', flightNumber);

  let seatData = fetch(`/slingair/flights/${flightNumber}`)
    .then((res) => res.json())
    .then((data) => {
      renderSeats(data);
    });

  // TODO: contact the server to get the seating availability
  //      - only contact the server if the flight number is this format 'SA###'.
  //      - Do I need to create an error message if the number is not valid?

  // TODO: Pass the response data to renderSeats to create the appropriate seat-type.
};

const handleConfirmSeat = async (event) => {
  event.preventDefault();

  let pickedSeat = document.getElementById('seat-number').innerText.slice(1, 3);

  // TODO: everything in here!

  // fetch *always* returns a promise; the server doesn't give a crap about whether
  // it's post or get or whatever; that's just syntactic sugar for frail humans.

  let response = await fetch('/slingair/users', {
    method: 'POST',
    body: JSON.stringify({
      givenName: document.getElementById('givenName').value,
      surname: document.getElementById('surname').value,
      email: document.getElementById('email').value,
      seat: pickedSeat,
      flight: document.getElementById('flight').value,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  let flightId = await response.text();

  window.location.assign('/slingair/confirmed/' + flightId);
};

// step 1: fetch the flights
// step 2: iterate through array, create elements
// step 3: ???
// step 4: profit

// ok, this works now. Nice.

const populateFlightSelect = async () => {
  let flightsResponse = await fetch('/slingair/flights')
  let flightsArr = await flightsResponse.json();

  flightsArr.forEach((flight) => {
    let option = document.createElement("option");
    option.setAttribute("value", flight);
    option.innerHTML = flight;
    document.querySelector("#flight").append(option);
  })

  console.log(flightsArr);

  await fetch(`/slingair/flights/${flightsArr[0]}`)
    .then((res) => res.json())
    .then((data) => {
      renderSeats(data);
    });

};

populateFlightSelect();

flightInput.addEventListener('change', toggleFormContent);