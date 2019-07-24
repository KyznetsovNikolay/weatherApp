import React, { Component } from 'react';

class SearchCity extends Component {

    state = {
        value: ''
    };


    changeValue = (e) => {
        this.setState({
           value: e.target.value
        });
    };

    render() {
        const { value } = this.state;
        const { getData } = this.props;
        return (
            <div>
                <input value={value} onChange={(e) => this.changeValue(e)}/>
                <button onClick={() => getData(value)}>Find</button>
            </div>
        );
    }
}

export default SearchCity;
