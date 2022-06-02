import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

// --------------------------------------------------------
// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }
//! createEntityAdapter() 
const heroesAdapter = createEntityAdapter();            // створ адаптер, повер. {} з методами, селект.

const initialState = heroesAdapter.getInitialState({    // створ початкові знач
    heroesLoadingStatus: 'idle',
});

// --------------------------------------------------------
//! createAsyncThunk()
// fn поверне 3 'type' action creators:             //! panding, fulfilled, rejected
export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',                           // name тип події- імя зрізу\тип дії
    async () => {                                   // fn повертає PROMISE, приймає (ID, різні API самого thunk)
        const { request } = useHttp();
        // return await request("http://localhost:3001/heroes")
        return await request("https://my-json-server-database.herokuapp.com/heroes")
    }
);
// --------------------------------------------------------
//! функція приймає 4 аргументи та поверне 3 сутності: імя зрізу, обєкт з actions, reducer
const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroCreated: (state, action) => {
            // state.heroes.push(action.payload)
            heroesAdapter.addOne(state, action.payload);     //! CRUD Добавив героя .addOne() 
        },
        heroDeleted: (state, action) => {
            // state.heroes = state.heroes.filter(item => item.id !== action.payload)
            heroesAdapter.removeOne(state, action.payload);  //! CRUD Видалив героя .removeOne    
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => { state.heroesLoadingStatus = 'loading' })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                // state.heroes = action.payload;
                heroesAdapter.setAll(state, action.payload);  //! CRUD Записав усіх героїв .setAll()
            })
            .addCase(fetchHeroes.rejected, state => { state.heroesLoadingStatus = 'error'; })
            .addDefaultCase(() => { })
    }
});

// Витягуєм Actions, Reducer з createSlice()
const { actions, reducer } = heroesSlice;

// --------------------------------------------------------
const { selectAll } = heroesAdapter.getSelectors(state => state.heroes);       //! .getSelector() Витягуєм усіх 'selectAll'

export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    selectAll,                                // ( state) => state.heroes.heroes //! 'selectAll'
    (filter, heroes) => {
        if (filter === 'all') {
            return heroes;
        } else {
            return heroes.filter(item => item.element === filter)
        }
    }
);
// --------------------------------------------------------

// Експортуєм Actions, Reducer
export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted } = actions;