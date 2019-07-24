import React, { Component } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';


class City extends Component {

    state = {
      isOpen: false
    };

    openText = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const {city, addTemp, addId, addPressure} = this.props.city;
        const {deleteCity} = this.props;
        const { isOpen } = this.state;

        return (
            <div className='cityBlock'>
                <div>
                    <div className='headBlock'>
                        <h4 onClick={this.openText}>{city}</h4>
                        <Button
                            variant="outline-secondary"
                            onClick={() => deleteCity(addId)}>x</Button>
                    </div>
                </div>
                <div className='addInfo'>
                    { isOpen && <div>
                    <p>Город: {city}</p>
                    <p>Температура: {addTemp}</p>
                    <p>Давление: {addPressure}</p>
                    </div>}
                </div>
            </div>
        );
    }
}

export default City;