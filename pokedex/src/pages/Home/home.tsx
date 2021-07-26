import React, { useState } from 'react';
import { FilterButton, Form, ImportSheet, Pokemons, Title } from './style';
import { Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi'
import { HeaderNav } from '../../components/Header';
import Modal from 'react-modal';
import { NewPokemonModal } from '../../components/NewPokemonModal';
import { usePokemon } from '../../hooks/usePokemon';
import { Pokemon } from '../../types';
import noAvatar from '../../assets/no-avatar.png'
import * as XLSX from 'xlsx';

Modal.setAppElement('#root')


export function Homepage() {



  const [ limitedPokemonsToShow, setlimitedPokemonsToShow] = useState<Pokemon[]>([]);
  const [ findPokemonByName, setFindPokemonByName] = useState('')
  const [ pokemonToUpdate, setPokemonToUpdate] = useState<Pokemon>()
  const [ pokemonToAdd, setPokemonToAdd] = useState(false)
  const { removePokemon, pokemons } = usePokemon()
  const [filteredPokemon,setFilteredPokemon] = useState<Pokemon[]>()

  const [filter, setFilter] = useState(false);
  const [ sheetFile, setSheetFile] = useState<FormData>()

  const filteredPokemonFromInput = pokemons.filter(pokemon => pokemon.name === findPokemonByName);

  function searchPokemonByName(event:React.FormEvent) {
    event.preventDefault()
   
    setFilteredPokemon(filteredPokemonFromInput)
    
  }

   function handleRemovePokemon(pokemonID:string) {
     removePokemon(pokemonID)
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
  }


  function handleCloseNewPokemonModal() {
    setIsNewPokemonModalOpen(false)
    
  }

  function onFileChange(event:any){
    console.log(event); 
    setSheetFile(event.target.files[0]); 
  }; 

  
  
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
      
      {/* <ImportSheet 
        type="file"
        accept=".xlsx,.odt" 
        onChange={onFileChange}
        
      /> */}
    
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