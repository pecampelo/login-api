# Login and Password Storage API

This application will be one that is going to store user data that can be accessed
through a log-in page. It is being done as part of the selective process for a brazilian enterprise called 
[DataSprints]()

<br>

## Installation 
<br>

> npm install
> > npm build
> > > npm start

<br>

## Endpoints

There will mainly be two endpoints: 

<br>

### /signup
* stores a new user's chosen username, password, e-mail, full name, age and address.

### /signin: 
* allows authentication to a previously set user by only receiving an e-mail
and a password. It will return a Bearer Token as a response.

<br>

## Features

* **NodeJS** as a scalable development environment.
* **Typescript** to clean up data coming from the front-end.
* **Mocha** to apply unit testing to a somewhat full capacity.
* **PostgreSQL** as a database that can increase in size and make use of foreign keys 
when scaling the project's size.

<br>

## Optional features, if time allows it

* **Prisma.io** as a modern ORM that can facilitate database usage and field alteration.
* **Docker** to avoid dependency changes.



