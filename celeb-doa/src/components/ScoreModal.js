import React, {useState} from "react";
import {NavLink} from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScoreModal = (props) => {
    console.log(props);
    
    const [scoreModal, setScoreModal] = useState(true);
    const [score, setScore] = useState();
    const toggle = () => setScoreModal(!scoreModal);

    axiosWithAuth()
        .get(`https://cors-anywhere.herokuapp.com/http://celeb-death-status.herokuapp.com/api/protected/users/${props.data}`)
        .then(resp => {
            const data = resp.data.score;
            setScore(data)
            console.log(data);

        })
        .catch(err => console.log(err))
console.log(score);




    return ( 
        
        
        <Modal isOpen={scoreModal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Your Score</ModalHeader>
    <ModalBody>
    {`${score}`}
    </ModalBody>
    <ModalFooter>
    <ModalBody>
    <NavLink to='/dashboard'>Dashboard</NavLink>
    </ModalBody>
    
    <ModalBody>
    <NavLink to='/sign-up'>Sign Up</NavLink> <br/>
    <NavLink to='/login'>Log In</NavLink>
    </ModalBody>
    </ModalFooter>
</Modal>
)
};

const mapStateToProps = state => {
    return {
        data: state.loginData.id
    }
}
export default connect(mapStateToProps, {} )(ScoreModal)