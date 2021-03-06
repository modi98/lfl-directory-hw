# LFL Employee Directory code challenge

For this assignment you will be building an online employee directory, using only vanilla JS (**no jQuery**).

Please fork this repository for your work, you should spend no more than 4-6h on this, please make sure to document your process in the `Dev Notes` section of this `README`

Feel free to reach out to with any questions or for clarification.

## Setup
- No dependencies needed
- Task runners are okay
- `SASS/SCSS` is okay, your choice
- `dom.js` contains some helper functions

## Requirements
#### Sidebar / main content layout is honored per screenshots

#### A `View` option that displays all employees & their info

![view](images/print.png)

#### An `Add` option that allows users to input a name, an office number, and a phone number

![add](images/add.png)

#### A `Verify` option that allows users to input a name and returns a success/error state to the UI

![verify](images/verify.png)

#### An `Update` option that allows the user to input name, office number, and phone number -- updating only the office number and phone number upon a name match

#### A `Delete` option that deletes the employee with the matching name

## Bonus
- Style all/any of the aforementioned interactions however you see fit, this is an opportunity to show off your creativity!
- MVC JS architecture

## Dev notes
After some time working with JS Frameworks we sometimes forget our roots. Will try to mimic some of the structure I'm so used to see in this projects but on vanilla JS.

As of right now I'm not putting lots of effort on the styles, leaving that for the final pushes.

On the verify method value isn't keysensitive for better user experience, couldn't find any requirement for matching cases so I had to improvise. I've also added scalability to the function loadEmployees() if later we wanted to add list of all matching employees in the verify page.

Decided to turn project into single page application as it'll be easier for state management and communication between components, also makes project look cleaner.

Implemented my own router with XMLHttpRequest as jQuery was unavailable. Wasn't able to import scripts on route on the timeframe indicated by the requirements so will try to improve that for future projects.