## Demo
![Screenshot 2024-03-11 144136](https://github.com/manisshhhhh/Altan-ass/assets/102871173/f786a7f8-86d6-4838-998a-c40413f25a60)
![Screenshot 2024-03-11 151941](https://github.com/manisshhhhh/Altan-ass/assets/102871173/e0742ab0-bf39-4590-993c-5c57ebcfdd12)
![Screenshot 2024-03-11 152008](https://github.com/manisshhhhh/Altan-ass/assets/102871173/b650f728-b23f-4331-ba60-33f6163338a1)
![Screenshot 2024-03-11 152025](https://github.com/manisshhhhh/Altan-ass/assets/102871173/66d1f1f7-fd78-4a2f-9652-5ff5242f0d7e)


## Install Dependencies 

```bash
  npm install
```

## Librery

Reactjs
```bash
  npx create-react-app
```


### Pakages
- concurrently
- cors
- json-server
- react-query
- react-router-dom


## API Reference

#### Get all items

```http
  https://project-data-3gbm.onrender.com/models
```


#### Get item

```http
  https://project-data-3gbm.onrender.com/models/${id}
```

## Backend 
#### fake mark backend 
[json-server](https://www.npmjs.com/package/json-server)

#### Deployed json-server on render
[deployed json-server](https://project-data-3gbm.onrender.com/)




## Deployment

To deploy this project run

Deployed on Vercel
[App-Link](https://altan-ass.vercel.app/)


## Scripts
#### frontend: http://localhost:3000
```bash
  npm start
```

#### backend: http://localhost:8000
```bash
  npm run server
```

#### starting both frontend and backend together
```bash
  npm run dev
```
## Tech Stack

**Client:** React, React-context-api, CSS

**Server:** Node, json-server


## Description

This is my react application that showcases the various models deployed by organisations and developers alike. The application will go live as-is. We can add new Models , can sea featured models that is basis on the rating of the models also user can go to single Model and explore it.


## Load time testing
React Profiler

## Optimization
I impliment pagination and infinite scrolling in Home page to render all the models, using react-query.
