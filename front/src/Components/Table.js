import React, {Component} from 'react'

const TableBody = (props) => {
  var editID =10;
  
  const rows = props.characterData.map((row, index)=>{

        return (
          <tr key={index}>
              
              {editID == 0 ? null :  <td>{row.name}</td>}
              {editID == 0 ? null : <td>{row.job}</td>}
              <td>
                <button onClick={()=>{}}>Edit</button>
              </td>
              <td>
                <button onClick={()=>props.removeCharacter(index)}>Delete</button>
              </td>
            
            </tr>

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
