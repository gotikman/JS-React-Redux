import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

//! функція приймає 4 аргументи та поверне 3 сутності: імя зрізу, обєкт з action, reducer
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => { state.filtersLoadingStatus = 'loading' },
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.filters = action.payload
        },
        filtersFetchingError: state => { state.filtersLoadingStatus = 'error' },
        activeFilterChanged: (state, action) => { state.activeFilter = action.payload }
    }
});

//! Витягуєм Actions, Reducer 
const { actions, reducer } = filtersSlice;

//! Експортуєм Actions, Reducer
export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanged
} = actions;