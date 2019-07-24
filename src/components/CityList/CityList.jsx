import React from 'react';
import City from '../City';

const CityList = (props) => {

    const { cities, dell } = props;
    console.log(cities);
    const list = cities.map((city, ind ) => {
        // console.log('ID from CITYLIST: ', city.addId);
        return <City key={ind} city={city} deleteCity={dell} />
        });
    return (
      <div>
          <ul>
              {list}
          </ul>
      </div>
    );
};

export default CityList;