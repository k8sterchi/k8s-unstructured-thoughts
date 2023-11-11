# k8s-unstructured-data-api

## Description
an API for a social network web applications where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Videos](#walkthrough-videos)
- [Resources](#resources)
- [License](#license)

## User Story
AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Walkthrough Videos
The following animations show examples of the application's API routes being tested in Insomnia. 

This first animation demonstrates how to start the application's server: 

(insert animation here)



[Click to view animation showing GET routes to return all users and all thoughts](https://drive.google.com/file/d/1dTRUGFIg3FJL2MKkbTodPMjV-oaDy4ta/view)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

(insert animation here)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

(insert animation here)

The following animation shows the POST and DELETE routes for a user's friend list being tested in Insomnia:

(insert animation here)

The following animation shows the POST and DELETE routes for reactions to thoughts being tested in Insomnia:

(insert animation here)

## Resources
Re-watching all the class material and borrowing code snipets from previous lessons. 

## License
![License](https://img.shields.io/badge/License-MIT%20License-brightgreen)  
[License](./LICENSE)
This application is covered under the [MIT License](./LICENSE) license.