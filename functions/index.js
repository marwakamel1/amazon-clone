const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Has1KDI3uu0sBtMHLUKHKDBvMeyevPIcl5ofZt83EX4FNns5RBIU0mY6nb6fOiYJHCKMrNp9NYZTd4MFqOIHGbv00pd3ayI7M");
// var bodyParser = require("body-parser");
//api

//app config
const app = express();
//middlewares
app.use(cors({ origin: true })); //security
 //send data & parse it in jason format
//  app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// api routes
app.get("/", (req, res) => res.status(200).send("hello"));

app.post("*payments/create", async (request, response) => 
  {
    const total =parseInt(request.query.total);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    payment_method_types: ['card'],
  });
  console.log(paymentIntent);
  //created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

  }
);

//listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-d007d/us-central1/api