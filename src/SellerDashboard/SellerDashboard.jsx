import React,{ Component } from 'react';
import Header from '../Header/Header';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {firebaseApp} from "../firebase";

class SellerDashboard extends Component
{
    render()
    {
        if(firebaseApp.auth().currentUser!=null)
        {
        return <Header/>;
        }
        else
        {
        return <Redirect to='/' />
        }
    }
}
function mapStateToProps(state)
{
    const {IsAuthenticated}=state;
    return {IsAuthenticated};
}
export default connect(mapStateToProps,null)(SellerDashboard);