# Star Wars Characters App

## To run:

from top level of project run `npm install`

type `ionic serve` - App will be available on `localhost:8100`

## App Structure:

### pages:
#### sign-in: 
* This is a very basic sign in page. It does no validation on username/password and just routes to the list of character page, which is obviously not ideal.
#### list:
* This page calls the characters service and planets service to fetch data to build and display cards representing star wars characters. Basic error handling is done to alert the user if the call to the service has failed.
#### item-details:
* If character card is clicked, the user is routed to a page with more details on the
character and a bigger image. The character object already has all the necessary
information to display this page
### models:
* This folder has a planet and a character class. These are the objects that are used in the app to represent star wars data.
### providers:
* This folder has services for fetching characters and planets from the star wars api.


## General Observations

I've used Angular 1 fairly extensively but angular 2+, typescript and ionic are all new to me. I really enjoyed using them. 

Typescript in particular is something I will be exploring more as a way to make Javascript less chaotic.

ionic cli seems like a good idea for making pages and services really quickly which saves a lot of time and ensures conistency in terms of folder structures/naming etc.

I hadn't encountered observables before as a way of handling asynchronous code (the angular http service returns observables. I'd like to delve a bit deeper into the comparisons between them and promises as I don't feel I've fully grasped this yet.

Setting up tests was a pain. I spent a lot of time trying to configure the tests to properly compile all the typescript files etc. and ran out of time to figure out the syntax and patterns for mocking out service calls etc. As a result of this I have written zero unit tests which is something I'd want to improve.

## Bits to Improve If More Time Available

As stated above, the sign in page is pretty useless at the moment, so there is definite room for improvement there.

I'd maybe like to componetise things like the star wars cards, although this would be slight overkill given the current size of the app.

Definitely would want to add unit/e2e tests.

I never got round to installing the Android SDK and actually testing the app natively. I've only tested it in the browser.
