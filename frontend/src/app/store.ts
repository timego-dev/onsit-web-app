import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
    PreloadedState,
  } from "@reduxjs/toolkit";
  import domainReducer from "./slices/domain.slice";
  
  const rootReducer = combineReducers({
    domain: domainReducer,
  });
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware();
    },
  });
  
  export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
      reducer: rootReducer,
      preloadedState,
    });
  }
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  
  export type AppStore = ReturnType<typeof setupStore>;
  