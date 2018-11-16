import * as fromPizza from "./pizzas.reducers";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { getPizzas } from "./pizzas.reducers";

export interface ProductsState {
  pizzas: fromPizza.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizza.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(
  getPizzaState,
  fromPizza.getPizzas
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizza.getPizzasLoading
);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizza.getPizzasLoaded
);
