// Imports
const { Users, Thoughts } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data
const users = [
  {
    username: "DavidBowie",
    email: "Ziggy@gmail.com",
    thoughts: ["Groound control to Major Tom"],
  },
];

console.log(connection);

// Connects to server
connection.once("open", async () => {
  console.log("connected");



  // Adds seed data to database
  await Users.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});