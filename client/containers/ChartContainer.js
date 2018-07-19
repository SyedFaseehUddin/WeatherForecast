import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Chart from "../components/Chart";

class ChartContainer extends React.Component {

    filterData(arr) {
        let mainData = [];

        arr.map((item) => {
            let date = item.date;
            let city = item.city;
            let temperature = item.temperature;
            let itemsLength = item.temperature.length;

            for (let i = 0; i < itemsLength; i++) {
                let singleCityNext = Object.assign({}, {[city[0]]: temperature[i]}, {date: date[i]});

                if (mainData.length >= itemsLength) {
                    mainData.map((elem, index) => {
                        Object.assign(elem, {[city[0]]: temperature[index]}, {date: date[index]});
                    });
                } else {
                    mainData.push(singleCityNext);
                }
            }
        });

        return mainData;
    };

    render() {
        return (
            <Chart lineData={this.props.City} filterFunc={this.filterData.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        City: state.City
    }
};

ChartContainer.propTypes = {
    City: PropTypes.array

};

export default connect(mapStateToProps)(ChartContainer);