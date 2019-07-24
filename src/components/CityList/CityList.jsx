import React from 'react';
import City from '../City';
import { connect } from 'react-redux';

const CityList = (props) => {

    const { cities, dell } = props;

    const list = cities.map(city => {
        const {addId} = city;
        return <City key={addId}
                     city={city}
                     deleteCity={dell} />
    });
    return (
      <div>
          {list}
      </div>
    );
};

const mapStateToProps = state => ({
    cities: state.data.cities
});

export default connect(mapStateToProps)(CityList);