import React, { useState } from 'react';
import { FilterButton, Form, Pokemons, Title } from './style';
import { Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi'
import { HeaderNav } from '../../components/Header';
import Modal from 'react-modal';
import { NewPokemonModal } from '../../components/NewPokemonModal';
import { usePokemon } from '../../hooks/usePokemon';
import { Pokemon } from '../../types';
import noAvatar from '../../assets/no-avatar.png'

Modal.setAppElement('#root')


export function Homepage() {



  const [ limitedPokemonsToShow, setlimitedPokemonsToShow] = useState<Pokemon[]>([]);
  const [ findPokemonByName, setFindPokemonByName] = useState('')
  const [ pokemonToUpdate, setPokemonToUpdate] = useState<Pokemon>()
  const [ pokemonToAdd, setPokemonToAdd] = useState(false)
  const { removePokemon, pokemons } = usePokemon()
  const [filteredPokemon,setFilteredPokemon] = useState<Pokemon[]>()

  const [filter, setFilter] = useState(false);

  const filteredPokemonFromInput = pokemons.filter(pokemon => pokemon.name === findPokemonByName);

  function searchPokemonByName(event:React.FormEvent) {
    event.preventDefault()
    //console.log('pokemon',findPokemonByName)
   
    setFilteredPokemon(filteredPokemonFromInput)
    //console.log("FILTERED POKEMON:", filteredPokemon)
    
  }

   function handleRemovePokemon(pokemonID:string) {
     removePokemon(pokemonID)
    //console.log("Excluir pokemon")
    //console.log(pokemonID)
  }

  const [isNewPokemonModalOpen, setIsNewPokemonModalOpen] = useState(false);

  function handleOpenNewPokemonModal() {
    setIsNewPokemonModalOpen(true)
    setPokemonToAdd(true)
  }

  function handleUpdatePokemon(pokemon:Pokemon){
    setPokemonToAdd(false)
    setIsNewPokemonModalOpen(true);
    setPokemonToUpdate(pokemon);
    //console.log("POKEMON TO UPDATED", pokemon)
  }


  function handleCloseNewPokemonModal() {
    setIsNewPokemonModalOpen(false)
    
  }
 
  return(
    <>
      <HeaderNav onOpenNewPokemonModal={handleOpenNewPokemonModal}/>
      <Title>Encontre seus pokemons na Pokedex</Title>

      <Form onSubmit={searchPokemonByName}>
        <input 
          onChange={(event)=> setFindPokemonByName(event.target.value)}
          type="text"
          placeholder="Pesquisar por um Pokemon"
        />
  
      </Form>

      <Link to="/pokemon-info">
        <FilterButton >
          Filtro Avançado
        </FilterButton>
      </Link>
     
      <Pokemons>
        {
          filteredPokemonFromInput[0] ?
          <div>
              <Link to="/" onClick={()=>handleUpdatePokemon(filteredPokemonFromInput[0])} key={filteredPokemonFromInput[0].id}>
                <img src={filteredPokemonFromInput[0].img_url?filteredPokemonFromInput[0].img_url: noAvatar} alt="Pokemon" />
                <div>
                  <strong>{filteredPokemonFromInput[0].name}</strong>
                  <p>Tipo: {filteredPokemonFromInput[0].type1} | Ataque: {filteredPokemonFromInput[0].atk} | Defesa:{filteredPokemonFromInput[0].def}</p>
                </div>
                <span>Atualizar pokemon</span>

              </Link>
              <button type="button" onClick={ () => handleRemovePokemon(filteredPokemonFromInput[0].id)}>
                  <FiTrash size={30} />
              </button>
            </div>
          :
          pokemons.map(pokemon => {
            return(
            <div>
              <Link to="/" onClick={()=>handleUpdatePokemon(pokemon)} key={pokemon.name}>
                <img src={pokemon.img_url? pokemon.img_url: noAvatar} alt="Pokemon" />
                <div>
                  <strong>{pokemon.name}</strong>
                  <p>Tipo: {pokemon.type1} | Ataque: {pokemon.atk} | Defesa:{pokemon.def}</p>
                </div>
                <span>Atualizar pokemon</span>

              </Link>
              <button type="button" onClick={ () => handleRemovePokemon(pokemon.id)}>
                  <FiTrash size={30} />
              </button>
            </div>
              
            )
          })
        }
      </Pokemons>

      <NewPokemonModal
        isOpen={isNewPokemonModalOpen}
        pokemon={pokemonToAdd ? pokemonToAdd :pokemonToUpdate}
        onRequestClose={handleCloseNewPokemonModal}
        
      />      
    </>
  )
}