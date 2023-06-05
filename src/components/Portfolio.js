import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Social Network API",
    languages: "JavaScript",
    packages: "express, moment, mongoose",
    image: "./img/socialnetworkapi.png",
    description: "API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. While using Express.js for routing, a MongoDB database, and the Mongoose ODM!",
    repo: "https://github.com/thanhmhoang/socialnetwork-api",
  },
  {
    id: 1,
    title: "E-Commerce Backend",
    languages: "JavaScript, MySQL",
    packages: "dotenv, express, mysql2, sequelize",
    image: "./img/ecommercebackend.png",
    description: "Build the back end for an e-commerce site by configuring a working Expres.js API to use Sequelize to interact with a MySQL database.",
    repo: "https://github.com/thanhmhoang/ecommerce-backend",
  },
  {
    id: 2,
    title: "Work Day Scheduler",
    languages: "HTML, CSS, JavaScript",
    image: "./img/workdayscheduler.png",
    description: "Build a simple calendar application that allows a user to save events for each hour of the day",
    repo: "https://github.com/thanhmhoang/work-day-scheduler",
  },
  {
    id: 3,
    title: "Note Taker",
    languages: "HTML, CSS, JavaScript",
    packages: "express, uuid",
    image: "./img/notetaker.png",
    description: "An application that can be used to write and save notes.",
    repo: "https://github.com/thanhmhoang/note-taker",
  },
  {
    id: 4,
    title: "Team Profile Generator",
    languages: "HTML JavaScript",
    packages: "Jest",
    image: "./img/teamprofilegenerator.png",
    description: "A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
    repo: "https://github.com/thanhmhoang/team-profile-generator",
  },
  {
    id: 5,
    title: "FinHub...Coming Soon",
    languages: "React, JavaScript, HTML, CSS",
    packages: "Axios, Bootstrap, cloudinary, socket.io, cors, bcrypt, dotenv, express, jsonwebtoken, mongoose, request",
    image: "./FinHub.png",
    description: "A social media platform that caters to the financial investing community!",
    repo: "https://github.com/brenthouston/finnhub-frontend",
    repo: "https://github.com/thanhmhoang/finhub-backend",
    live: "https://finnhub.netlify.app",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;