import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Film, Films } from '../../types/types';

export const getFilms = (state: State): Films => state[NameSpace.Main].films.data;
export const getFilmsStatus = (state: State): boolean => state[NameSpace.Main].films.isLoaded;

export const getFilmsByGenre = (state: State): Films => state[NameSpace.Main].filmsByGenre;

export const getPromo = (state: State): Film | undefined => state[NameSpace.Main].promo.data;
export const getPromoStatus = (state: State): boolean => state[NameSpace.Main].promo.isLoaded;

export const getGenres = (state: State): string[] => state[NameSpace.Main].genres.data;
export const getActiveGenre = (state: State): string => state[NameSpace.Main].genres.activeGenre;
