import React from 'react';
import '../App.css';

class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state={
            userInput: "",
            option: "name"
        }
    
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return (
            <div className="App">
                <form>
                    <select name="option" onChange={this.handleChange}>
                        <option value="name">name</option>
                        <option value="phone">phone number</option>
                    </select>
                    <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange}></input> 
                    <button type="submit" onClick={(event) => this.props.searchResult(event, this.state.userInput, this.state.option)}>Search</button>
                </form>   
            </div>
        );
    }
}

export default SearchBar;
