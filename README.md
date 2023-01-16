<h1 align="center"> MadLibs Madness </h1>

Bored at dinner parties? Want to entertain your kids on a long car ride? Enter MadLibs madness, where you can put your own spin on the same old overused famous quotes. Why say, "You only live once, but if you do it right, once is enough", when you could say "You only devour a pizza once, but if you do it swimmingly, once is enough"? Think its funny and want to save it to show your friends? Save your best madLibs and view them in your favorites section and keep playing!

Contributors: [Adelle Pitsas](https://github.com/Adelle-Pitsas)
Deployed link: [MadLibs Madness](https://mobile-madlibs.vercel.app/)


## Built With
![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

## About the Project
This project was created with React that uses a lightweight Express.js backend [https://github.com/Adelle-Pitsas/madlibs-api] and tests end-to-end with Cypress. The user can play madlibs by entering words as they are prompted in the `Play` view, and then see the result of their mystery madlib when you submit all of their words. The user can then favorite a madlib and see it in their favorites view. If they want to play again, they can simply made a new madlib and continue the fun. This app uses GET, POST, and DELETE network requests.

## The App
[Madlibs Madness.webm](https://user-images.githubusercontent.com/108096652/212780421-b8c773eb-c79e-45d9-b1a8-2e93ee526ca7.webm)

### Context
This project is a solo project completed in January 2023, about 5 months into a career change into front-end software development. The goals for this project were:
1. To use React, Router, e2e testing with Cypress
2. Create a lightweight backend with Express.js
3. Create personas and user stories that describe the target audience
4. Work within constraints to deliver a product for my audience
5. Manipulates data access from an API


## Getting Started
### Installation
1. Fork this Repo
1. Clone it down to your machine
1. cd into the root of the project directory
1. Run npm install
1. Run npm start and you will see a line similar to: `Project is running at http://localhost:8080/`
1. Go to `http://localhost:8080/` in your browser to see the local client side running
1. Enter ctrl + c anytime to stop either of the servers.

## Wins and Challenges
#### Wins:
- Created an Express.js server to hold all madlibs and favorites. I was able to arcitect a backend that met exactly what my front-end needed. It really helped to shed light on how backend and frontend work synchronously.
- Successfully used GET, POST, and DELETE and successfully stubbed all of them
- Had a few laughs with some absurd madlibs as I was testing my data!

#### Challenges:
- Keeping track of state with a dynamically created form that spanned multiple components. After lots of consideration, this was the most viable arcitecture, and it proved to be a challenge, but it was a huge peice of my learning with this project
- Wanting to create more functionality but having to hold back due to time contraints. This will be a project that I continue to work on!

## Features to add/improve:
- Adding a "make your own madlib" where users can enter a quote and what words they want to replace.
- Adding a parts of speech section for children who are learning parts of speech
- Improving the form area for a better user experience, and less button pressing

## About the people
### Contributors
Adelle Pitsas - apitsas4@gmail.com - [LinkedIn](https://www.linkedin.com/in/adelle-pitsas-461503183/) - [GitHub](https://github.com/Adelle-Pitsas)

### Instructors
- Project manager - [Heather Faerber](https://github.com/hfaerber)

