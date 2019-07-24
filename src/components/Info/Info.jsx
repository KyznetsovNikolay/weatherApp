import React from 'react';
import './style.css';


const Info = (props) => {

    const { city, temp, info, pressure } = props.data;

    return(
      <div className='info'>
        {info && <div>
            <p>Город: {city}</p>
            <p>Температура: {temp}</p>
            <p>Давление: {pressure}</p>
        </div>}
      </div>
    );
};

export default Info;