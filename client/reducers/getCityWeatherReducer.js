import {GET_CITY_WEATHER} from "../actions/getCityWeather";
import {RESET_STORE} from "../actions/resetStore";

const filterResponse = (response) => {
    let dataArray = [{
        city: [],
        date: [],
        temperature: [],
        lineColor: '',
    }];
    let responseArray = [response];

    const getDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleString().split(',')[0];
    };

    const randomHex = () => {
        let letters = '0123456789ABCDEF'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }

        return color;
    };

    responseArray.map((inputArrayItem) => {
        dataArray[0].lineColor = randomHex();
        inputArrayItem.list.map((item) => {
            dataArray[0].city.push(inputArrayItem.city.name);
            dataArray[0].date.push(getDate(item.dt));
            dataArray[0].temperature.push(item.temp.day);
        });
    });

    return dataArray;
};

const getCityWeatherReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CITY_WEATHER:
            state = [...state, Object.assign({}, ...filterResponse(action.payload))];
            break;
        case RESET_STORE:
            console.log(action.type);
            state = [];
            break;
    }

    return state;
};

export default getCityWeatherReducer;