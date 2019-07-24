import React, { Component } from 'react';
import { Button, InputGroup,FormControl } from 'react-bootstrap';
import './style.css';

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
            <div className='search'>
                <InputGroup className="mb-3">
                <FormControl
                  placeholder="search city"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={value}
                  onChange={(e) => this.changeValue(e)}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary"
                            onClick={() => getData(value)}>Найти</Button>
                </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default SearchCity;
