import { Action } from 'redux';

export interface RestAction<T> extends Action {
    payload?: T;
}