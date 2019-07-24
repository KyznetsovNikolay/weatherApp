import React from 'react';

const Info = (props) => {

    const { city, temp, info } = props.data;

    return(
      <div>
        {info && <div>
            <p>Город: {city}</p>
            <p>Температура: {temp}</p>
        </div>}
      </div>
    );
};

export default Info;