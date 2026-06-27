import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter , Routes , Route} from "react-router";
import AllBogs from "./views/AllBlogs";
import NewBlogs from "./views/NewBlogs";
import ReadBlogs from "./views/ReadBlogs";
import EditBlogs from "./views/EditBlogs";
import Login from "./views/Login";
import Signup from "./views/Signup";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<AllBogs/>}/>
  <Route path="/new" element={<NewBlogs/>}/>
  <Route path="/edit/:id" element={<EditBlogs/>}/>
  <Route path="/read/:slug" element={<ReadBlogs/>}/>
  <Route path="*" element={<h1 >404 Not Found</h1>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>

  </Routes>
  </BrowserRouter>
);
