import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap';

var show = false;

const TableBody = (props) => {
  //para abrir e fechar o modal
  const [show, setShow] = React.useState(false);
  const handlerClose = () => setShow(false);
  const handlerShow = () => setShow(true);
  //objetos 
  const [_id, setID] = React.useState('');
  const [_name, setName] = React.useState('');
  const [_job, setJob] = React.useState('');

  const rows = props.characterData.map((row, index)=>{
        
    function handlerName(event) {
      setName(event.target.value);
    }

    function handlerJob(event) {
      setJob(event.target.value);
    }

    function handlerID(event) {
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
              setJob(row.job);
              setName(row.name);
              handlerShow();
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
                onChange={handlerName} />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={_job}
                onChange={handlerJob} />
        </form>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary"  onClick={handlerClose}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>{
          props.updateCharacter(_id,_name, _job);
          handlerClose();
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
