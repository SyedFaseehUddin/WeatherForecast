import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import SearchForm from "../components/SearchForm";
import getCityWeather from "../actions/getCityWeather";
import resetStore from "../actions/resetStore";

class SearchFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            inputValue: ''
        });
    }

    onInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.getCityWeather(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    }

    onResetStore() {
        this.props.resetStore();
    }

    render() {
        return (
            <SearchForm
                inputValue={this.state.inputValue}
                onInputChange={(e) => this.onInputChange(e)}
                onFormSubmit={(e) => this.onFormSubmit(e)}
                onResetClick={() => this.onResetStore()}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        City: state.City
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCityWeather: (city) => {
            dispatch(getCityWeather(city))
        },
        resetStore: () => {
            dispatch(resetStore())
        }
    }
};

SearchFormContainer.propTypes = {
    City: PropTypes.array,
    getCityWeather: PropTypes.func,
    resetStore: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer);