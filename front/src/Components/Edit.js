import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class Edit extends Component{

    constructor(props){
        super(props);
        this.state = {};
        
    }



    render(){
        return(
            <>

                    <Button variant="primary" onClick={()=>{}}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={false}
                onHide={()=>{}}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{}}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default Edit;
