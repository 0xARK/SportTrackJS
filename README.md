Sport performance tracker made with NodeJS
==

**Version 1.3.0**


## Contributors

- You can contact me via my university email address (castella.e1900282@etud.univ-ubs.fr) or via my personal email address (castella.mateo@gmail.com)
- Thomas Cloarec
- If you want to contribute to this project you're welcome.

## Date

- October 2020

## Language used

- HTML
- CSS
- JavaScript
- NodeJS

#### Libraries / Framework used

- ExpressJS
- Cloud UI Theme (http://www.urbanui.com/cloudui/light/index.html)
- JSON

## In which context did I this project?

We did this project as part of my studies in IT. This is a graded project for our third semester.

## The goal of the project

The aim of the project was to create a web application allowing a user with a bluetooth watch to follow his sports performances. This application, made here in JavaScript, was to use the MVC model. We started from the assumption that the watch sent the data to the server in a JSON file (here, the JSON file must be sent by the user). We also created various tools that were not required, such as the implementation of an account and an administrator interface to manage the different user accounts or the setting up of a scoreboard on the home page.

## Installation

If you want to try this application, first you have to clone this repository :

```bash
git clone https://github.com/0xARK/SportTrackJS
```

First, you need to install required dependencies :

```bash
cd SportTrackJS/express_webapp
npm install

cd ../sport-track-db
npm install
```

Then, you have to create a sqlite database named `sport_track.db` with the `create_db.sql` script :

```bash
sqlite3 sport_track.db < create_db.sql
```

Now, you can go in `express_webapp` directory for start the server :

```bash
cd ../express_webapp
npm start
```

Access to the web application at `http://localhost:3000`.
