import { GET_NEW_CITY_DATA_SUCCESS,
        GET_NEW_CITY_DATA_FAILED,
        ADD_CITY_IN_LIST,
        DELETE_CITY_FROM_LIST
} from '../constants';
import axios from "axios";

const actions = {
    getData(city) {
        const baseKey = `4abbfa905caf2782f1c06bf56790428c`;
        return async (dispatch) => {
            try {
                if(city) {
                  const weather = await (await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${baseKey}&units=metric`)).data;
                  console.log(weather);
                  const {name, main: {temp}, id} = weather;
                  const allData = { name, temp, id };
                  localStorage.setItem(name, JSON.stringify(weather));

                   dispatch({
                      type: GET_NEW_CITY_DATA_SUCCESS,
                      payload: allData
                   });
                }
            } catch (err) {
                dispatch({
                   type: GET_NEW_CITY_DATA_FAILED,
                   error: err.message
                });
            }
        }
    },
    addCity() {
        return {
            type: ADD_CITY_IN_LIST
        }
    },

    deleteCity(id) {
        return {
            type: DELETE_CITY_FROM_LIST,
            payload: id
        }
    },

};

export default actions;