# JOB-HUNTER

## Overview

The front-end of the Job-hunter application is built using modern web technologies and frameworks to provide a seamless user experience. The application interacts with a Node.js Express backend and MongoDB database via RESTful APIs to manage user authentication, posts, comments, and profile updates.

## Technology Stack:

- TypeScript for programming language
- Next.js for Front-end
- Tailwind CSS
- NextUI
- Redux Toolkit
- RTK Query
- Axios
- Zod

## Features

- Authentication and Authorization: Users must register and log in to access the full functionality of the application. JWT tokens are used for maintaining user sessions.
- User Interface: The application’s UI is built using Tailwind CSS and NextUI, ensuring a responsive and visually appealing design.
- State Management: Redux Toolkit is used to manage global state, including user authentication and post management.
- Data Fetching: RTK Query, in combination with Axios, is used to fetch data from the backend APIs, including creating, retrieving, and updating posts, as well as managing likes and comments.
- Form Validation: Zod is employed to validate user input in forms, such as login, registration, and profile updates, to prevent invalid data from being submitted.

#### SERVER_URL : https://jobhunterserver.vercel.app/

#### FRONT_END_URL : https://jobhunterclient.vercel.app/

## How to run

- First, clone the repo and install the dependencies using `npm install` command.
- then, build the project using `npm run build` command.
- at last, run the project using `npm run start` command.
