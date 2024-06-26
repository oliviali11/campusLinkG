import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AssistantPage from './pages/AssistantPage';
import LoginPage from './pages/LoginPage';

function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/ai-assistant' element={<AssistantPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Route>
    
  ))

  return <RouterProvider router={router}/>
}

export default App
