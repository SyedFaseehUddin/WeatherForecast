import React from "react";
import PropTypes from "prop-types";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  "recharts";

const Chart = (props) => {
    let filterData = props.filterFunc(props.lineData);

    return (
        <div className="row">
            <div className="col-xs-12">
                <LineChart width={800} height={400} data={filterData}
                           margin={{top: 0, right: 60, left: 0, bottom: 0}}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend/>
                    {props.lineData.map((item, index) => (
                        <Line key={index} dataKey={item.city[0]} stroke={item.lineColor}
                              activeDot={{r: 6}}/>
                    ))}
                </LineChart>
            </div>
       
        </div>


    )
};

Chart.propTypes = {
    filterFunc: PropTypes.func,
    lineData: PropTypes.array
};

export default Chart;