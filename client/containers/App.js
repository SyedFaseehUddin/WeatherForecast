import React from "react";

import SearchFormContainer from "../containers/SearchFormContainer";
import ChartContainer from "../containers/ChartContainer";
//import GoogleMapLoader from "../containers/MapsContainer";

const App = () => {
    return (
        <div className="container">
            <SearchFormContainer />
            <ChartContainer />
        </div>
    )
};

export default App;