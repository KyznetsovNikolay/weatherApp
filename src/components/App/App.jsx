import React, { Component } from 'react';
import SearchCity from '../SearchCity';
import CityList from '../CityList';
import Info from '../Info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions/dataActions';


class App extends Component {


    render() {

        const { city, temp, info, view, addedCity } = this.props;
        const { getData, addCity, deleteCity } = this.props.actions;
        const data = {city, temp, info};
        return(
            <div>
                <SearchCity getData={getData}/>
                {addedCity && <button onClick={addCity}>Добавить</button>}
                <Info data={data}/>
                {view && <CityList dell={deleteCity} />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    city: state.data.city,
    temp: state.data.temp,
    info: state.data.info,
    view: state.data.view,
    addedCity: state.data.addedCity
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);