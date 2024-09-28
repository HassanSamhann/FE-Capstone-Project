import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to Book_Bridge</h2><br />
                <p className='header-text fs-18 fw-3'>Discover Your Next Great Read – Explore, Search, and Enjoy a World of Books! Immerse yourself in a vast collection of literary treasures. Whether you're seeking fiction, non-fiction, or hidden gems, we have something for every book lover. Join our community of readers and embark on your next reading adventure today!

</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header