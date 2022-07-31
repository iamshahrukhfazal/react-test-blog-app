import logo from './logo.svg';
import './App.css';
import {Nav} from "./components/nav"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  
import {ShowPost} from "./pages/postShow"
import {PostPage} from "./pages/postsPage"
import PostState from "./context/PostState"
function App() {           
 
 
  return (
    <PostState>
      <Router>
        <div className="App">   

          {/* Show all the posts */}
          <div className='mx-3'>
            <Nav/>
            <div className='mt-4'></div>  
            <div className='flex justify-center flex-col items-center space-y-4'>
              <Routes>
                <Route path="/" element={<PostPage/>}/>
                <Route path="/posts/:id" element={<ShowPost/>}>
           

              </Route>
            </ Routes>
            </div>
          </div>
        </div>
      </Router>
    </PostState>
  );
}

export default App;
