import { GET_NEW_CITY_DATA_SUCCESS,
        GET_NEW_CITY_DATA_FAILED,
        ADD_CITY_IN_LIST,
        DELETE_CITY_FROM_LIST
} from '../constants';

const initialState = {
    city: '',
    id: '',
    temp: '',
    info: false,
    cities: [],
    addedCity: false,
    view: false,
    pressure: '',
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_CITY_DATA_SUCCESS:
            const { name, temp, id, pressure } = action.payload;
            return {
                ...state,
                city: name,
                temp,
                info: true,
                addedCity: true,
                id,
                pressure
            };
        case GET_NEW_CITY_DATA_FAILED:
            return  {
                ...state,
                error: action.error
            };
        case ADD_CITY_IN_LIST:
                const { city, temp: addTemp, cities, id: addId, pressure: addPressure} = state;
                const newCity = { city, addTemp, addId, addPressure };
                console.log(city, addTemp);
                const newArrayCity = [...cities, newCity];

            return {
                ...state,
                cities: newArrayCity,
                view: true,
                addedCity: false
            };
        case DELETE_CITY_FROM_LIST:
            const { id: deleteId } = action.payload;
            const { cities: cityDell } = state;
            const findCity = cityDell.findIndex(post => post.id === deleteId);
            const before = cityDell.slice(0, findCity);
            const after = cityDell.slice(findCity + 1);
            const newArray = [...after, ...before];

            return {
              ...state,
              cities: newArray
            };
        default:
            return state;
    }
};

export default reducer;