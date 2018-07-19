export const RESET_STORE = 'RESET_STORE';

const resetStore = () => {
    return (dispatch) => {
        dispatch({
            type: RESET_STORE
        });
    }
};

export default resetStore;