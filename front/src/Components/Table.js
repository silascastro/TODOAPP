import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap';

var show = false;

const TableBody = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const rows = props.characterData.map((row, index)=>{

        return (
          <>
          <tr key={index}>
              
              <td>{row.name}</td>
              <td>{row.job}</td>
              <td>
                <button onClick={handleShow}>Edit</button>
              </td>
              <td>
                <button onClick={()=>props.removeCharacter(index)}>Delete</button>
              </td>
            
            </tr>
            
            <Modal
            show={show}
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
            <Button variant="secondary"  onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary"  onClick={handleClose}>Understood</Button>
            </Modal.Footer>
        </Modal>
                </>
        );  
     
  })
  return <tbody>{rows}</tbody>;
};

const TableHead = ()=>{
  return(

            <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
   
    ) ;
};


class Table extends Component {


    render() {
    const {characterData, removeCharacter} = this.props;
    return (
      <table>
        <TableHead></TableHead>
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }

}

export default Table;
