const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/pay", async (req, res) => {
  try {
    const { items, email } = await req.body; // Directly access req.body

    const extractingItems = await items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/cancel`,
      metadata: {
        email,
      },
    });

    res.send({
      message: "Connection is Active",
      success: true, // Fixed typo in 'success'
      id: session.id,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ message: "Internal Server Error" }); // Send an appropriate error response
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
