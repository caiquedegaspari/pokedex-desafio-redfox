import React from 'react';
import { Header } from './style'
import logo from '../../assets/logo.png'

interface HeaderProps {
  onOpenNewPokemonModal: () => void
}

export function HeaderNav({ onOpenNewPokemonModal }:HeaderProps) {
  return(
    <Header>
      <div>
       <img src={logo} alt="Pokedex" />
       <button type="button" onClick={ onOpenNewPokemonModal }>Adicionar Pokemon</button>
      </div>
    </Header>
  )
}