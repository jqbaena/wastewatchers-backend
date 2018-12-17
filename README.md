# Watch Waste
App with the purpose of helping you to be conscious about the amount of waste you are generating in a period of time. User can log the waste is generating every day and watch the waste generated.

## User Stories

- 404: As a user I want to receive feedback on the page if I get into a non-existing page.
- 500: As a user I want to receive feedback when there is a server error.
- Homepage/not loged in: As a user I want to access the homepage so I can have a better idea of what the app is about.
- Sign Up: As a user I want to sign up and create my own account so I can use the platform.
- Log In: As a user I want to log in to my account so I can access to all the app's functionalities.
- Log Out: As a user I want to log out of my account so no one else can use my account.
- Homepage/loged in: As a loged in user I want to access a homepage with a list of waste generated during the day.
- Create challenge: As a user I want to create new challenge if there is no challenge created before.
- List wastes: As a user I want to see a list of all the waste generated during a day.
- Detail waste: As a user I want to access the waste recycling details of any waste.
- Edit waste: As a user I want to edit the waste that I created.
- Delete waste: As a user I want to delete the waste that I created.
- Add waste: As a user I want to add the waste during a day.

## Backlog
- Statistics 
- News (API news)

# Client
## Routes
- `/`
  - HomePageComponent
  - public
  - shows logo, title and start app button
  - navigates to /start/info 
- `/start/info`
  - InfoPageComponent
  - public
  - User can read about the app
  - User can navigate to /start/signup if the challenge is accepted
- `/start/signup`
  - SignupPageComponent
  - anon only
  - signup form, link to login
  - navigate to /challenge after signup
- `/start/login`
  - LoginPageComponent
  - anon only
  - login form, link to signup
  - navigate to /challenge after login
- `/challenge` 
  - ChallengeListPageComponent
  - user only without challenge
  - user select one of the different challenges if it is not created
- `/challenge/waste/` 
  - WasteAddPageComponent
  - user only
  - navigates to waste page after selecting challenge
  - shows the waste stadistics and calendar
  - if user doesn't exist, redirect to login/signup.
- `/challenge/waste/day/:id` 
  - WasteAddPageComponent
  - user only
  - shows the waste generated of this day
  - user can delete or go to edit waste page
  - if user doesn't exist, redirect to login/signup.
- `/challenge/waste/day/:id/edit` 
  - WasteAddPageComponent
  - user only
  - edit waste page
  - if user doesn't exist, redirect to login/signup.
- `/challenge/waste/add` 
  - WasteAddPageComponent
  - user only
  - user search the waste and adds a new waste to the user
  - user can go to the details page of a waste
  - if user doesn't exist, redirect to login/signup.
- `/challenge/waste/:id/info` 
  - WasteInfoPageComponent
  - user only
  - show info about the selected waste
  - if user doesn't exist, redirect to login/signup.
  - `/challenge/waste/news` 
  - WasteNewsPageComponent
  - user only
  - a daily new appears in this section
- `**`
  - NotFoundPageComponent
## Components
- Login:
  - userFormComponent(title: string, button: string, onSubmit: function, onChange: function)
- Sign up:
  - userFormComponent(title: string, button: string, onSubmit: function, onChange: function)
- Navbar:
  - navbarComponent(button: string, button2: string, onClick: function)
- Searchbar
  - searchFormComponent(text: string, button: string, onChange: function)
- Waste
  - wasteComponent(name: string, info: string, amount: number, addButton: string, subButton: string)
- Waste list
  - wasteListComponent(title: string, list: [])
  

## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
  - auth.edit(user, data)
- Waste Service
  - waste.add(data)
  - waste.delete(id)
  - waste.edit(id, data)
  - waste.getInfo(id)
  - waste.getList()

# Server
## Models
User model
```
username - String // required
email - String // required & unique
password - String // required
wastes - [{Object ID, amount: Number}, day: string]
typeChallenge - String
time - timeStamp
challengeTimeLeft - Number
challengeAchieved - Boolean

```
Waste model
```
type - Enum[] 
info - String
imgURL - String
name - String
```
## API Endpoints (backend routes)
- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- PUT /challenge/add/:id
  - body:
    - wasteId
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- GET /challenge/waste/
  - 401 if user logged in
  - get the database list of waste (waste.getList)
- GET /challenge/waste/:waestid/
  - 401 if user logged in
  - get real info about a waste
  - validation
    - id is valid (404)
    - id exists (404)
- GET /challenge/me/waste
  - 401 if user logged in
  - get the list of wastes from an user (auth.me)
- DELETE /challenge/me/waste/:waestid/
  - 401 if user logged in
  - delete a waste from the list of user's waste (waste.delete(id))
  - validation
    - id is valid (404)
    - id exists (404)
- PUT /challenge/me/waste/:waestid/
  - 401 if user logged in
  - update amount of waste
  - validation
    - id is valid (404)
    - id exists (404)



## Links
### Trello/Kanban
https://trello.com/**********
### Git
The url to your repository and to your deployed project
https://github.com/**********/chat-frontend
https://github.com/**********/chat-backend
[Deploy Link](https://**********.firebaseapp.com)
### Slides
The url to your presentation slides
[Slides Link] **********