# Setup for testing react components

The purpose of this repo is to explore how to test React components with Jest, Enzyme and Cypress.

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

# Todo
* Find out which jest related files and folders shold be added to the .gitignore
* Add example of how to test a stateless functional component with snapshot testing