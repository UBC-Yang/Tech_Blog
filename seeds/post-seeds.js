const { Post } = require("../models");

const postData = [
  {
    title: "Why MVC is so important",
    content: "MVC allows for developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 1,
  },
  {
    title: "Authentication vs. Authorization",
    content: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed to access to the system.",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;