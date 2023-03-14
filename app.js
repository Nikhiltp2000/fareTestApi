// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}.`);
// });

// app.post("/calculate-fare", (req, res) => {
//   const { distance, numPassengers } = req.body;
//   console.log(req.body);
//   const fare = calculateFare(distance, numPassengers);
//   console.log(fare);
//   res.json({ fare });
// });

// function calculateFare(distance, numPassengers) {
//   // Replace this with your fare calculation logic
//   return distance * numPassengers;
// }

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());

// // Define your API endpoints here
// // For example:
// app.post("/calculate-fare", (req, res) => {
//   const { distance, numPassengers } = req.body;

//   // Calculate the fare based on distance and number of passengers
//   const fare = distance * 0.1 + numPassengers * 0.5;

//   // Return the calculated fare as a JSON response
//   res.json({ fare });
// });

// // Start the server
// app.listen(3000, () => console.log("Server started on port 3000"));

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post("/calculate-fare", (req, res) => {
  const { distance, age, isStudent } = req.body;
  //res.send(distance);
  console.log("Received request with data:", { distance, age, isStudent });
  // Calculate the fare based on the distance and age/student status
  let fare = distance <= 10 ? 5 : 5 + (distance - 10) * 0.5;
  if (age >= 60 || isStudent) {
    fare = fare * 0.8;
  }
  console.log("Calculated fare:", { fare });

  res.json({ fare });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
