import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// import commentsReducer from '../pages/comments/comment.slice'
import counterReducer from '../features/counter.slice'
import { pokemonApi } from '../services/pokemon.services';
import { setupListeners } from '@reduxjs/toolkit/query'



export const store = configureStore({
    reducer: {
        // comments: commentsReducer,
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
    }
)

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
