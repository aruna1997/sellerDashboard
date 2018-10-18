import React,{ Component } from "react";
import SignIn from "./SignIn.jsx";
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import { firebaseApp } from "../firebase";
import {Redirect} from "react-router-dom";

const theme=createMuiTheme({
    typography: {
        useNextVariants: true,
      },
})

class LoginPage extends Component
{ 
    
    render()
    { 
        var user = firebaseApp.auth().currentUser;
        console.log('user',user);
        if(firebaseApp.auth().currentUser)
        {
            return <Redirect to='/Dashboard' />
        }
        else
        {
        return(
                <MuiThemeProvider theme={theme}>
                <SignIn />
                </MuiThemeProvider>)
        }
    }        
}
export default LoginPage;
