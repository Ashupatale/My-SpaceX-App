import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaTruckMonster } from 'react-icons/fa'


function Login(props) {
    const { handleSubmit, errors, register } = useForm()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(false)

    const submitHandler = (data) => {
        if ((JSON.parse(localStorage.getItem('userInfo'))?.email === name || JSON.parse(localStorage.getItem('userInfo'))?.userName === name )  && JSON.parse(localStorage.getItem('userInfo'))?.password === password) {
            props.addUser(data)
            console.log(data)
            localStorage.setItem('isAuthenticated', "yes")

            props.history.push("/SpaceXPage")
        } else {
            alert("Oops...! Its Look's Like you Don't have an account! Please Sign Up")
            props.history.push("/signup")
        }


    }
    return (
        <div className="LoginDiv" >
            
            <form onSubmit={handleSubmit(submitHandler)}>
                <h2 style={{ paddingTop: "5%" }}>LogIn </h2>
                <hr style={{width:"50%",margin:"auto",border:"2px solid red",marginBottom:"2%"}}/>
                <label style={{ color: "grey", opacity: "0.8" }}>
                    UserName or E-mail ID
                </label>
                <br />

                <input type="text" name="userName" value={name} onChange={(event) => setName(event.target.value)} placeholder="UserName or E-mail ID" ref={register({
                    required: {
                        value: true,
                        message: "Username or Email is required"
                    }
                })} />
                {errors.userName && <div style={{color:"red"}}>{errors.userName.message}</div>}


                <br />

                <label style={{ color: "grey", opacity: "0.8" }}>
                    Password
                </label>

                <br />
                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" ref={register({
                    required: {
                        value: 8,
                        message: "Password is required"
                    }
                })} />
                {errors.password && <div style={{color:"red"}}>{errors.password.message}</div>}

                <br />
                <button type="submit">
                    Login
                </button>
                <br /> <br />
                <p style={{ }}> Don't Have an account?? <Link to="/signup" className="links">Click here</Link> to Create account</p>
                <label>Or sign in with:</label>
                <div id="iconGroup" >
                    <p id="facebookIcon"></p>
                    <p id="twitterIcon"></p>
                    <p id="googleIcon"></p>
                </div>


            </form>
        </div>



    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addUser: (val) => dispatch({ type: "ADD_USER", payload: val }),


    }
}
export default connect(null, mapDispatchToProps)(Login);



