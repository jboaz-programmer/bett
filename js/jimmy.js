import React from 'react';
import ReactDom from 'react-dom';

class Myform extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ username: ''};

    }
    myChangeHandler =(event)=>{
        this.setState({username: event.target.value});
    }

    render(){
        return (
            <form>
                <h1>hello {this.state.username}</h1>
                <p>Enter your name:</p>

                <input type="text" onChange={this.myChangeHandler} />
            </form>
        );
    }
}

ReactDom.render(<myForm />, document.getElementById('root'));