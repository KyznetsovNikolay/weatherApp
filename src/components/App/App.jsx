import React from 'react';
import SearchCity from '../SearchCity';
import CityList from '../CityList';
import Info from '../Info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions/dataActions';
import './style.css';
import { Button } from 'react-bootstrap';

const App = (props) => {

        const { city, temp, info, view, addedCity, pressure } = props;
        const { getData, addCity, deleteCity } = props.actions;
        const data = {city, temp, info, pressure};

    return (
        <div className='alignCenter'>
            <h2>Погода в вашем городе</h2>
            <SearchCity getData={getData}/>
            <div className='butt'>
                <div className='b1'></div>
                {addedCity && <Button
                    variant="light"
                    onClick={addCity}>Добавить</Button>}
            </div>
            <Info data={data}/>
            {view && <CityList dell={deleteCity} />}
        </div>
    );
};

const mapStateToProps = state => ({
    city: state.data.city,
    temp: state.data.temp,
    info: state.data.info,
    view: state.data.view,
    addedCity: state.data.addedCity,
    pressure: state.data.pressure
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);