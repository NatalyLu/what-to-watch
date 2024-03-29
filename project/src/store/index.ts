import { configureStore } from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import { redirect } from './middlewares/redirect';
import {rootReducer} from './root-reducer';

// Сконфигурируем хранилище.
// Создадим экземпляр axios
export const api = createAPI();

// Передадим экземпляр axios в thunk (чтобы обратиться к нему из действия)
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect), // Добавили middleware для осуществления перенаправляния на другие страницы через api-actions
});
