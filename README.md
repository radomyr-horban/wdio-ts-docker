# Task 7: WebdriverIO + TypeScript + Docker

## Website:

https://telnyx.com/

## Requirements:

- **Node version**: 18.18.0 [(Node.js)](https://nodejs.org/en)
- Java Development Kit [(JDK)](https://www.oracle.com/java/technologies/downloads/)
  - Make sure you have the environment variable **JAVA_HOME** set to the path of the respective JDK (Required for `'Allure'` report)

#### Clone the repository:

    git clone https://github.com/radomyr-horban/wdio-ts-docker

#### Install dependencies:

    npm ci

#### To run the tests go to the root of the project and run:

    npm run test:chrome

#### To run a single spec (the `spec` file must be inside the `'test/specs/'` folder) run:

    npm run test:spec <file_name>

## Browsers

#### To run the tests in `Chrome` run:

    npm run test:chrome

#### To run the tests in `Firefox` run:

    npm run test:firefox

#### To run the tests in `Edge` run:

    npm run test:edge

## Allure Report

#### To generate an Allure report run:

    npm run allure:generate

#### To open the generated Allure report in a browser run:

    npm run allure:serve
