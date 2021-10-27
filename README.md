# Login and Password Storage API

![](https://img.shields.io/badge/TypeScript-S?style=flat-square&logo=typescript&logoColor=white&color=3178C6) 
![](https://img.shields.io/github/last-commit/pecampelo/login-api)

<br>

This application will be one that is going to store user data that can be accessed
through a log-in page. It is being done as part of the selective process for a brazilian enterprise called [DataSprints](https://www.datasprints.com).

## Installation 

First, clone this repository:

> git clone https://github.com/pecampelo/login-api.git

> npm install
> > npm run build 
> > OR npm run build-t (build + tests)
> > > npm start

## Endpoints

There will mainly be two endpoints: 

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

## Development Steps

[ ] Tests for Router
[ ] Create route handler
[ ] Tests for Body Parser
[ ] Body parser
[ ] Tests for CRUD controller
[ ] Create controller (which handle business rules)
[ ] Tests for CRUD models
[ ] Create model (which handle data from and into the database)
[ ] Tests for migrations
[ ] Create migrations


