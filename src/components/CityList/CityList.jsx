import React from 'react';
import City from '../City';
import { connect } from 'react-redux';

const CityList = (props) => {

    const { cities, dell } = props;
    console.log(cities);
    const list = cities.map((city, ind ) =>
        <City key={ind} city={city} deleteCity={dell} />
    );
    return (
      <div>
          <ul>
              {list}
          </ul>
      </div>
    );
};

const matStateToProps = state => ({
    cities: state.data.cities
});

export default connect(matStateToProps)(CityList);