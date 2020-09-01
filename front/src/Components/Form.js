import React,{Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props);

        this.initialState = {
            name: '',
            job: '',
        };

        this.state = {
            name: '',
            job: '',
        };
    }

    handlerChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        });
    }

    submitForm = ()=>{
        if(this.state.job === '' || this.state.name === ''){
         if(this.state.job === '')
            alert('preencha o job!');
         if(this.state.name === '')
            alert("preencha o name!");

        }else{
            this.props.handlerSubmit({name: this.state.name, job: this.state.job});
            this.setState({name: '', job: ''});
        }
    }

    render(){
        const {name, job} = this.state;
        return(

            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handlerChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handlerChange} />

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>

        );
    }
}

export default Form;
