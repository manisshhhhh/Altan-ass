


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
