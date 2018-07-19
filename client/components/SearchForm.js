import React from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
    return (
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                <div>
                    <h1>Weather forecast by city name</h1>
                    <form>
                        <input type="text" placeholder="Enter city name..."
                               value={props.inputValue} onChange={props.onInputChange}
                        />
                                <button type="submit" onClick={props.onFormSubmit}> Search
                                </button>
                          </form>
                </div>
            </div>
        </div>
    )
};

SearchForm.propTypes = {
    inputValue: PropTypes.string,
    onInputChange: PropTypes.func,
    onFormSubmit: PropTypes.func,
};

export default SearchForm;