import React, { Component } from 'react';
import SearchCity from '../SearchCity';
import CityList from '../CityList';
import Info from '../Info';
import axios from'axios';


class App extends Component {

    state = {
        city: '',
        id: '',
        temp: '',
        info: false,
        cities: [],
        addCity: false,
        view: false,
    };

    _baseKey = `4abbfa905caf2782f1c06bf56790428c`;

    getData = async (city) => {
      if(city) {
          const weather = await (await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._baseKey}&units=metric`)).data;
          console.log(weather);
          const {name, main: {temp}, id} = weather;
          localStorage.setItem(name, JSON.stringify(weather));
          this.setState({
              city: name,
              temp,
              info: true,
              addCity: true,
              id,
              value: ''
          });
      }
    };

    addCity = () => {
        const { city, temp, cities, id} = this.state;
        const newCity = { city, temp, id };
        console.log(city, temp);
        const newArrayCity = [...cities, newCity];
        this.setState({
            cities: newArrayCity,
            view: true,
            addCity: false
        })
    };

    dellCity = (id) => {
        this.setState(({ cities }) => {
           const findPost = cities.findIndex(post => post.id === id);
           const before = cities.slice(0, findPost);
           const after = cities.slice(findPost + 1);
           const newArray = [...after, ...before];
           return {
               cities: newArray
           }
        });
    };

    render() {

        const { city, temp, info, view, addedCity } = this.state;
        const data = {city, temp, info};
        return(
            <div>
                <SearchCity getData={this.getData}/>
                {addedCity && <button onClick={this.addCity}>Добавить</button>}
                <Info data={data}/>
                {view && <CityList dell={this.dellCity} />}
            </div>
        );
    }
}

export default App;