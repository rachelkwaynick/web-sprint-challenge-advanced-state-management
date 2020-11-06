import React from 'react';
import { connect } from 'react-redux';

import { postSmurfs } from '../store/actions';


class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '', 
            age: '', 
            height: ''
        }
    }

    handleChangeName = e => {
        this.setState({
            name: e.target.value,
        })
    }
    handleChangeAge = e => {
        this.setState({
            age: e.target.value,
        })
    }
    handleChangeHeight = e => {
        this.setState({
            height: e.target.value,
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.postSmurfs(this.state)
        this.setState({
            name: '',
            age: '', 
            height: ''
        })
    
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add a Smurf</h3>

                <label>
                    Name
                    <input
                        onChange={this.handleChangeName}
                        value={this.state.name}
                        name='name'
                        type='text'
                    />

                </label>
                <label>
                    Age
                    <input
                        onChange={this.handleChangeAge}
                        value={this.state.age}
                        name='age'
                        type='text'
                    />

                </label>
                <label>
                    Height
                    <input
                        onChange={this.handleChangeHeight}
                        value={this.state.height}
                        name='height'
                        type='text'
                    />

                </label>

                <button>Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfsData,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm);



// const SmurfForm = (props) => {
//     return (
//         <form>
//             <h3>Add a Smurf</h3>

//             <label>
//                 Name
//                 <input
//                     name='name'
//                     type='text'
//                 />
//             </label>
//         </form>
//     )
// }

// export default SmurfForm;