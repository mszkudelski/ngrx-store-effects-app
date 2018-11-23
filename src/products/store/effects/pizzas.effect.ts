import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as pizzaActions from "../actions/pizzas.action";
import { catchError, map, switchMap } from "rxjs/operators";
import * as fromServices from "../../services";
import { Pizza } from "../../models/pizza.model";
import { of } from "rxjs/observable/of";

@Injectable()
export class PizzasEffect {
  constructor(
    private actions: Actions,
    private _pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas = this.actions.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() =>
      this._pizzaService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      )
    )
  );
}
