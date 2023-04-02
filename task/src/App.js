import React from 'react'
import video from '../src/images/video1.mp4';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
    <section className="mainPage">
        <video src={video} autoPlay loop muted/>
        <div className="btnMain">
          <Link to='/create-user'>  <button className="btnMainPage" >Get Started</button></Link>
        </div>
      <footer>
        
      </footer>
    </section>
      
    </>
  )
}

export default App
