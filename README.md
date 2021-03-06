# Junior Frontend Coding Challenge

## Introduction

You have been tasked with creating a new feature for our events app using Angular 8.  The feature will let users view speakers in the app.
It will consist of two views, a list view and a details view.

## Instructions

1. Clone the repo and create a private repository on Github.
2. Fetch the speakers from the api using the endpoint "https://public-api-dev.crowdcomms.com/v1/apps/helloapp/people"
3. Display the speakers in a list (only show the details you deem suitable)
4. Add a search box to filter the list
5. Implement UI for users to star a speaker (ideally, any starred speakers will persist when the browser is refreshed but this is not a requirement for this challenge.)
6. When a user clicks a speaker it should navigate to a "details" view
7. The details view will display all the information we have about a speaker

Note: We have included a http interceptor to authorise any requests.

You will need to add me(dandouglas) as a collaborator to the repo once you have finished.

## Requirements

The app must:
1. Be presentable
2. Be optimised for performance
3. Display some basic knowledge of the main Angular concepts and best practices
   
You should also *commit regularly* and follow the [Angular guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) for commit messages.  Example commit message: "fix(people list): people not showing"

It would be nice if the code was tested but this is not a requirement.

Good luck!

## Time Limit

4 hours

## Other

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

