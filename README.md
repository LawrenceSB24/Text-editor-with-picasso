# Text-editor-with-picasso

## Table of Contents
- [Description](!Description)

- [User Story](!User-Story)

- [Acceptance Criteria](!Acceptance-Criteria)

- [Files Updated](!Files-Updated)

- [Usage](!Usage)

- [Installation](!Installation)

- [Delployed Link](!Deployed-Link)

- [Demo Image](!Demo-Image)

- [Questions](!Questions)

## Description

A progressive web application that meets the PWA criteria. It contains a number of data persistence techniques to serve as redundancies for options not supported in the browser. It will also function offline.

## User Story
```
AS A developer
I WANT to create notes or code snippets with or wothout an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Story
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the back-end and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I re-open the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre-cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Files updated

Below are brief descriptions for the files modified for complete app functionality

* Main package.json
<!-- Added rules for scripts to run by -->
<!-- Original scripts object
    scripts: {
        "start:dev":
        "start":
        "server":
        "build":
        "install":
        "client":
    } 
-->

* Service Worker File
<!-- 
- Implemented asset caching 
- Asset cache function is basic and will require fine tuning. Asset cahce function taken from mini-project for contact directory
-->

* Webpack Config
<!-- 
- Added plugins
- Added module rules for CSS and JS loaders.
 -->

* Database JS file
<!-- Added logic to methods for retrieving and accepting some content to database-->

* Install JS file
<!-- Added event handlers for editor functions -->

## Usage

To run this application, type `npm run start` into the command line of your terminal

## Installation

To install this application:

- Fork or clone this repo into your own repo

- run `npm i` plus the name of the package you want to use to install all the dependencies you need.

## Deployed Link

This is a link to the deployed Heroku app for the text editor: https://fierce-harbor-15165.herokuapp.com/

## Demo Image
![This is a snapshot of the live application on Heroku](../Text-editor-with-picasso/Images/screencapture-fierce-harbor-15165-herokuapp-2022-05-07-21_08_39.png)

## Questions

If you have any further questions, then you can contact me via:
- Github: https://github.com/LawrenceSB24/Text-editor-with-picasso
- Email: [laws2020@gmail.com](laws2020@gmail.com)