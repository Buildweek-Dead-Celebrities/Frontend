//WIP: User can Delete Account + Scores

import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux'; 



const Dashboard = (props) => {

    //----Delete User ID------------------------------------------------------------
     const handleDelete = (userId ) => {
        return axiosWithAuth()
        .delete(`/users/${userId}`) //trying to grab the userID ID but need the ID to come back from backend
        .then(res => console.log(res),
        props.history.push('/')) //Pushes back to /
        .catch(err=> console.log(err))
    }
//-------------------------------------------------------------------------------
console.log(props.message)
    return(
        <div>
            <h1>This will be the User Dashboard</h1>
             <p>🗨: " {props.loginData.message} " </p>
            <p> Score Cards will be Displayed here</p>
            <p> User can Also Delete their account from here.</p>

            <button className="delBtn" onClick={handleDelete}> Delete Account </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { loginData: state.loginData}
}

export default connect(mapStateToProps)(Dashboard);