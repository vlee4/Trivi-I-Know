# Trivi-I-Know

Trivi-I-Know is a trivia game created to help you improve your trivia knowledge. It was made with the following features in mind:

- Each round of questions will have 10 non-repeating questions
- All questions will be multiple-choice and shown one at a time
- Users can select and submit only one of the four answer choices for each question
- Correct answers are revealed after the user submits the answer for each question
- Total scores will be shown at the end of the round

* Trivia questions and answers are provided by [Tandem](https://madeintandem.com/)

This project is deployed via Github pages and can be found [here](https://vlee4.github.io/Trivi-I-Know/)

## Running project locally in development mode

After cloning/downloading this project, after you run `npm install` in the console you can start the app with `npm start`. The project will run at [http://localhost:3000](http://localhost:3000) in the browser.

## Issues

During start up you may encounter an error concerning the version of jest. This problem can either be dealt with by following the directions in the console, or you may create an `.env` file in the home directory. Within the `.env` file you should input the following:

`SKIP_PREFLIGHT_CHECK=true`

After saving the `.env` file you may try once again to run `npm start`.

## Potential future features

- Responsive design for different device browser sizes
- Previous button: to allow user to move back and forth through the questions
- Landing page
- Score board: displaying previous players' scores
  - Connect a database to include live updated player scores
