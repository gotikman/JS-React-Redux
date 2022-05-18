import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

//! createAsyncThunk()
// fn поверне 3 'type' action creators:  //! panding, fulfilled, rejected
export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const { request } = useHttp();
        return await request("http://localhost:3001/filters")
    }
)

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => {
                state.filtersLoadingStatus = 'loading'
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle';
                state.filters = action.payload
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = 'error'
            })
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