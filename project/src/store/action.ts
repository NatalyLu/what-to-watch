import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../enums';

export const redirectToRoute = createAction<AppRoute | string>('films/redirectToRoute');
