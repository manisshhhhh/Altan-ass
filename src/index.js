import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FeaturedModelsScreen from './screens/FeaturedModelsScreen';
import AddModelScreen from './screens/AddModelScreen';
import ModelScreen from './screens/ModelScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/featured' element={<FeaturedModelsScreen />} />
      <Route path='/addModel' element={<AddModelScreen />} />
      <Route path='/model/:id' element={<ModelScreen/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


