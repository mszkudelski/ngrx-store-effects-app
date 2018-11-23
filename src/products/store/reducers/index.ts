import * as fromPizza from "./pizzas.reducers";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
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

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizza.getPizzasEntites
);
export const getAllPizzas = createSelector(
  getPizzasEntities,
  entities => {
    return Object.keys(entities).map(id => entities[+id]);
  }
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizza.getPizzasLoading
);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizza.getPizzasLoaded
);
