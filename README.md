# Login and Password Storage API

![](https://img.shields.io/badge/TypeScript-S?style=flat-square&logo=typescript&logoColor=white&color=3178C6)
![](https://img.shields.io/github/last-commit/pecampelo/login-api)

<br>

This application will be one that is going to store user data that can be accessed
through a log-in page. It is being done as part of the selective process for
a brazilian enterprise called [DataSprints](https://www.datasprints.com).

## Installation

First, clone this repository:

> git clone https://github.com/pecampelo/login-api.git

> npm install
> > npm run build
> > OR npm run build-t (build + tests)
> > > npm start

## Endpoints

### /signup
* stores a new user's chosen username, password, e-mail, full name, age and address.

### /signin:
* allows authentication to a previously set user by only receiving an e-mail
and a password. It will return a Bearer Token as a response.

## Features

* **NodeJS** as a scalable development environment.
* **Typescript** to clean up data coming from the front-end.
* **Mocha** to apply unit testing to a somewhat full capacity.
* **PostgreSQL** as a database that can increase in size and make use of foreign keys
when scaling the project's size.
* **Prisma.io** as a modern ORM that can facilitate database usage and querying.
* **Docker** to avoid dependency changes and to run a local database.
* **JWT** to provide a Bearer Token for Single Signn Login.

## Optional Features (if time allows it)

*
## Development Steps

* [X] Create schemata for all tests
* [X] Server is online
* [X] Tests for Router
* [X] Router
* [X] Tests for Body Parser
* [X] Body Parser
* [X] Create route handler
* [X] Tests for Sign-Up Controller
* [X] Create Sign-Up Controller (which handle business rules)
* [X] Tests for Sign-In Controller
* [X] Create Sign-In Controller (which handle business rules)
* [ ] Tests for Database
* [ ] Tests for migrations for Users with Prisma
* [ ] Create database connection
* [ ] Dockerize application
* [ ] Dockerize database
