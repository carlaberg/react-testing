# Setup for testing react components

The purpose of this repo is to explore how to test React components with Jest, Enzyme and Cypress. It contains practical examples of how implement testing for different types of React components. For a theoretical review of the concepts implemented in this repo see the [React testing paper](https://www.dropbox.com/scl/fi/knwjgqlzaemcx3wlxvbgx/React-testing.paper?dl=0&rlkey=0nvnbqu1bymespxbs3hlvwmxt)

## Stack
...

## Project folder structure
...

## Installation
Run `npm install` in the root directory.

## Scripts

```bash
npm run test
```
This command will start the Jest test runner in watch mode. When you make change in a file the tests related to that file will rerun.

  
```bash
npm run coverage
```
This command will collect coverage information and output a coverage report in the terminal. The coverage information will be collected from the files and folders stated in the collectCoverageFrom property in the jest config file.


```bash
npm run start
```
This prjoect is using parcel to bundle javascript. The start command will spin upp a development server at localhost:1234. Parcel will listen to changes and update the effected components.

## Examples
The src/\_\_tests\_\_ folder contains examples of how to implement testing for different types of React components. The examples are exlained in detail below.

### example.test.js
...
### sayHello.test.js
...
### snapshot.test.js
...

## Todo
* Find out which jest related files and folders shold be added to the .gitignore
* Remove react linting rules from none react js files
* Add run stack info
* Add info about project folder structure
* Add mocking example