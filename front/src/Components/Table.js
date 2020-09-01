import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap';

var show = false;

const TableBody = (props) => {
  //para abrir e fechar o modal
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const [_id, setID] = React.useState('');
  const [_name, setName] = React.useState('');
  const [_job, setJob] = React.useState('');

  const rows = props.characterData.map((row, index)=>{
        
    function handleName(event) {
      setName(event.target.value);
    }

    function handleJob(event) {
      setJob(event.target.value);
    }

    function handleID(event) {
      setID(event.target.value);
    }

    function submitModal(){

    }

    return (
      <>
      <tr key={index}>
          
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => {
              setID(index);
              setJob(row.name);
              setName(row.name);
              handleShow();
            }}>Edit</button>
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
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={_name}
                onChange={handleName} />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={_job}
                onChange={handleJob} />
        </form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary"  onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>{
          props.updateCharacter(_id,_name, _job);
          handleClose();
        }}>Confirmar</Button>
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
    const {characterData, removeCharacter, updateCharacter} = this.props;
    return (
      <table>
        <TableHead></TableHead>
        <TableBody characterData={characterData} removeCharacter={removeCharacter} updateCharacter={updateCharacter}/>
      </table>
    )
  }

}

export default Table;
