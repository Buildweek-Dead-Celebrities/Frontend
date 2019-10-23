//WIP: User can Delete Account + Scores

import React, {useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from "react-redux";

const Dashboard = (props) => {


    //----Delete User ID------------------------------------------------------------
     const handleDelete = (userId ) => {

         console.log(props.history.length)

        return axiosWithAuth()
        .delete(`https://cors-anywhere.herokuapp.com/http://celeb-death-status.herokuapp.com/api/protected/users/${userId}`) //trying to grab the userID ID but need the ID to come back from backend
        .then(res => console.log(res),
        localStorage.removeItem('token'),
        props.history.push('/')) //Pushes back to /
        .catch(err=> console.log(err))
    }
//-------------------------------------------------------------------------------
// console.log(props)
// console.log(props.loginData)


    return(
        <div>
            
            <h1>This will be the User Dashboard</h1>
             <p>🗨: "  {props.message} " </p>
            <p> Score Cards will be Displayed here</p>
            <p> User can Also Delete their account from here.</p>

            <button className="delBtn" onClick={() => handleDelete(props.data.id)}> Delete Account </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.registerData,
        message: state.loginData.message
    }
}

export default connect(mapStateToProps, {} )(Dashboard);
