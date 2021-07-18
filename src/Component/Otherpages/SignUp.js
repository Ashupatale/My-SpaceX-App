import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'


function SignUp(props) {

    const { handleSubmit, errors, register } = useForm()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (data) => {
       
        props.history.push("/login")

        localStorage.setItem('userInfo', JSON.stringify(data));

    }
    return (
        <>
    <div className="MainSignDiv" style={{display:"flex"}}>
        <img src="https://image.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg" alt="img" className="MainIMg"
        style={{width:"350px",height:"500px",marginTop:"10px",borderRadius:"20px",marginLeft:"10%"}}/>

        <div className="LoginDiv">

            <form onSubmit={handleSubmit(submitHandler)}>

                <h2 style={{ paddingTop: "5%" }}>Sign Up Here</h2>

                <hr style={{width:"50%",margin:"auto",border:"2px solid red",marginBottom:"2%"}}/>



                <label style={{  color: "grey", opacity: "0.8" }}>  Enter Your Full Name :</label>
                <br />
                <input type="text" name="userName" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Your Full Name" ref={register({
                    required: {
                        value: true,
                        message: "FullName is required"
                    }
                })} />
                {errors.fullName && <div>{errors.fullName.message}</div>}
  <br />


                <label style={{  color: "grey", opacity: "0.8" }}>Enter Email ID :</label>
                <br />

                <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email ID" ref={register({
                    required: {
                        value: true,
                        message: "Email Id is required"
                    }
                })} />
                {errors.email && <div>{errors.email.message}</div>}
                <br />

                <label style={{  color: "grey", opacity: "0.8" ,marginBottom:"9%"}}>  Create Password :</label>
                <br />

                <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Create Password " ref={register({
                    required: {
                        value: 8,
                        message: "Password is required"
                    }
                })} />
                {errors.password && <div>{errors.password.message}</div>}


                <button variant="primary" type="submit">
                    Signup
                </button>
                <br /> <br />

            </form>



        </div>
        </div>
        </>
    )
}


export default SignUp