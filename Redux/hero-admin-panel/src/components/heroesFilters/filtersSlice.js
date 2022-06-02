import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

// --------------------------------------------------------
// const initialState = {
//     filters: [],
//     filtersLoadingStatus: 'idle',
//     activeFilter: 'all'
// }
//! createEntityAdapter() 
const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
})
// --------------------------------------------------------
//! createAsyncThunk()
// fn поверне 3 'type' action creators:  //! panding, fulfilled, rejected
export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const { request } = useHttp();
        // return await request("http://localhost:3001/filters")
        return await request("https://my-json-server-database.herokuapp.com/filters")
    }
)
// --------------------------------------------------------
//! функція приймає 4 аргументи та поверне 3 сутності: імя зрізу, обєкт з action, reducer
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => {
                state.filtersLoadingStatus = 'loading'
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle';
                // state.filters = action.payload
                filtersAdapter.setAll(state, action.payload)         //! CRUD Записав усі фільтри з адаптера
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = 'error'
            })
            .addDefaultCase(() => { })
    }
});

//! Витягуєм Actions, Reducer 
const { actions, reducer } = filtersSlice;
// --------------------------------------------------------

//! витягуєм-експортуєм усі фільтри з адаптера
export const { selectAll } = filtersAdapter.getSelectors(state => state.filters);

// --------------------------------------------------------
//! Експортуєм Actions, Reducer
export default reducer;

export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filtersChanged
} = actions;

