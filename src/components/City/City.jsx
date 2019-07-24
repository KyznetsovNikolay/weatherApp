import React, { Component } from 'react';

class City extends Component {

    state = {
      isOpen: false
    };

    openText = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const {city, temp, addId} = this.props.city;
        const {deleteCity} = this.props;
        const { isOpen } = this.state;
        console.log('Id from CITY: ', addId);
        return (
            <li>
                <div className='fl'>
                    <h4 onClick={this.openText}>{city}</h4>
                    <button onClick={() => deleteCity(addId)}>X</button>
                </div>
                { isOpen && <div>
                <p>Город: {city}</p>
                <p>Температура: {temp}</p>
                </div>}
            </li>
        );
    }
}

export default City;