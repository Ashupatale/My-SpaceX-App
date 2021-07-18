import React, { Component } from 'react'
import {Link} from 'react-router-dom'


function Home(){
        return(
            <>
            <div className="MainHome" > 
            <div className="container" style={{color:"white"}}>
            <br/>
          
            <h1 style={{color:"yellow"}}> ~Welcome to Space-X  Application~</h1>
            <br/>
            <marquee width="60%" direction="left" height="100px">
            <h3 >...Find All SpaceX Information in one place... </h3>
            </marquee>
            <br/><br/>
            <h5>To get started You have to login first.</h5>
            
            <Link to="/login" className="links" style={{backgroundColor:"black"}}>Click here</Link> to go to the Login Page
            <br/><br/>
            Don't have an account? <Link to="/signup" className="links" style={{backgroundColor:"black"}}>Click here</Link> to create Your account.
            </div>
            </div>


            



            </>
            
        )
    }

export default Home;
