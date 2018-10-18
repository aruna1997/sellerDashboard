import React,{ Component } from "react";
import { Switch,Route,withRouter } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignUp from "./Login/SignUp";
import SellerDashboard from "./SellerDashboard/SellerDashboard";
import { firebaseApp } from "./firebase";
import {  } from "@material-ui/core";
import Loader from "./Loader";


class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            loading:true
        }
    }
    
    
    componentDidMount()
    {
        console.log('check');
        firebaseApp.auth().onAuthStateChanged(user=>{
            if(user)
            { 
              this.setState({loading:false})
              this.props.history.push('/Dashboard/one');
            }
            else
            {
                this.props.history.location.pathname==='/SignUp'?this.props.history.push('/SignUp'):this.props.history.push('/')
            }
        })       
    }

    render()
    {
     if(this.state.loading)
     {
         return <Loader />
     }
     else
     {
         return <Switch>
        <Route path='/SignUp' component={SignUp} />
        <Route path='/Dashboard' component={SellerDashboard} />
        <Route path='/' component={LoginPage} />
           </Switch>  
     }
    }
}
export default withRouter(App);