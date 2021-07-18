import React, { Component } from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { ImFilePicture } from 'react-icons/im'
import { FaUserCircle } from 'react-icons/fa'
import { CgLogOff } from 'react-icons/cg'

function HeaderBar(props) {
    let history = useHistory()
    console.log(props.userInfo,"abc")

    let userName=JSON.parse(localStorage.getItem('userInfo'))?.userName

 return (
        <div >
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/"> <img src="https://th.bing.com/th?q=Printable+Rocket+Ship+Clip+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247" 
                style={{width:"50px"}}/> Space-X App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="Navbar">
                        
                      

                      {props.userInfo.userName ?
                            <>
                           
                                <Nav.Link>
                                    <Link to="/SpaceXPage">SpaceX App</Link>
                                </Nav.Link>
                               
                            </>
                            :
                            <>
                              <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link >
                                    <Link to="/login">Login</Link>
                                </Nav.Link>
                                <Nav.Link >
                                    <Link to="/signup">Signup</Link>
                                </Nav.Link>
                            </>
                        }
                    </Nav>
                    {userName &&
                    <div className="NavFloat"style={{marginLeft:"60%"}}>
                        <Nav>
                            <Nav.Link>
                                <FaUserCircle /> {userName}
                            </Nav.Link>
                            <Nav.Link  >
                                <Link to="/logout"><CgLogOff /> Log out</Link>
                            </Nav.Link>
                        </Nav>
                        </div>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userDetails
    }

}

export default connect(mapStateToProps, null)(HeaderBar);