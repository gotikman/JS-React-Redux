import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

//! createAsyncThunk()
export const fetchHeroes = createAsyncThunk(   //* fn поверне 3 'type' action creators:  panding, fulfilled, rejected
    'heroes/fetchHeroes',                      //* name тип події- імя зрізу\тип дії
    async () => {                              //* fn повертає PROMISE, приймає (ID, різні API самого thunk)
        const { request } = useHttp();
        return await request("http://localhost:3001/heroes")
    }
);

//! функція приймає 4 аргументи та поверне 3 сутності: імя зрізу, обєкт з actions, reducer
const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroCreated: (state, action) => { state.heroes.push(action.payload) },
        heroDeleted: (state, action) => { state.heroes = state.heroes.filter(item => item.id !== action.payload) }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => { state.heroesLoadingStatus = 'loading' })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload;
            })
            .addCase(fetchHeroes.rejected, state => { state.heroesLoadingStatus = 'error'; })
            .addDefaultCase(() => { })
    }
});

//! Витягуєм Actions, Reducer 
const { actions, reducer } = heroesSlice;

//! Експортуєм Actions, Reducer
export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted } = actions;