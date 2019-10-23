import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //CSS for Modal! 

const Dashboard = (props) => {

     const handleDelete = (userId ) => {
         console.log(props.history.length)
         toggle()
        return axiosWithAuth()
        .delete(`https://cors-anywhere.herokuapp.com/http://celeb-death-status.herokuapp.com/api/protected/users/${userId}`) 
        .then(res => console.log(res),
        localStorage.removeItem('token'),
        props.history.push('/')) 
        .catch(err=> console.log(err))
    }

    const confirmationModal = (props) => {
        const {
            buttonLabel,
            className
        } = props;
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
       
        <div>
            <h3>🗨 ❝ {localStorage.getItem('message')} ❞ </h3>
            <p> Score Cards will be Displayed here</p>
            <p> User can Also Delete their account from here.</p>

            <Button color="danger" onClick={toggle}>Delete My Account</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Confirm Deletion</ModalHeader>
                <ModalBody>
                Are you SURE that you want to Delete your account? Make sure you're sure! There's no revertions.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => handleDelete(props.data.id)}>Delete My Account!</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel, I'm Sorry</Button>
                </ModalFooter>
            </Modal>
          </div>
         
    )
}

const mapStateToProps = state => {
    return {
        data: state.loginData
    }
}

export default connect(mapStateToProps, {} )(Dashboard);
