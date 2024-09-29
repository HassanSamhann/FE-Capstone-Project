import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book Bridge</h2>
            <p className='fs-17'>Welcome to Book_Bridge, your ultimate destination for discovering and exploring a world of literature. Our mission is to connect readers with their next great read, offering a user-friendly platform where you can search, browse, and delve into an extensive collection of books across various genres.</p>
            <p className='fs-17'>At Book_Bridge, we believe that every book has a story to tell. Whether you’re looking for the latest bestsellers, timeless classics, or hidden gems, our curated library is designed to cater to all tastes and preferences. With detailed information on each book, including summaries, author insights, and publication details, you’ll find everything you need to make informed reading choices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About ; 
