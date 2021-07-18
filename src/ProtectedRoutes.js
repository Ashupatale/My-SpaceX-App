import React, { useEffect } from 'react'



import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoutes({ component: Component, ...rest }) {
   
 const isAuthenticated = localStorage.getItem("isAuthenticated");
    return (
        <Route
            {...rest}
            render={props => {                                                      
                if (isAuthenticated == "yes") {
                    return <Component {...props} />
                }
                else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }

                            }}

                        />
                    
                    )
                }
            }}
        />
    )
}
