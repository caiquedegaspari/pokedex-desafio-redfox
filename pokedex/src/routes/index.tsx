import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from '../pages/Home/home';
import { PokemonInfo } from '../pages/PokemonInfo';

export function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} ></Route>
        <Route path="/pokemon-info" component={PokemonInfo} ></Route>
      </Switch>
    </BrowserRouter>
  )
}