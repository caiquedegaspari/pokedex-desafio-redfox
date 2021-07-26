import {Pokemon} from '../types'
import {api} from '../services/api'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface PokemonProviderProps {
  children: ReactNode
}


interface PokemonContextData {
  
  pokemons: Pokemon[];
  createPokemon: (pokemon:Pokemon) => Promise<void>;
  removePokemon: (pokemonID:string)=> void;
  updatePokemon: (pokemon:Pokemon) => Promise<void>;
}

const PokemonContext = createContext<PokemonContextData>({} as PokemonContextData);

export function PokemonProvider({ children }: PokemonProviderProps): JSX.Element {

  

  const [pokemons, setPokemons] = useState<Pokemon[]>(() => {
    const storagedPokemons = localStorage.getItem('@Pokedex:pokemons');
    if(storagedPokemons){
      return JSON.parse(storagedPokemons);
    }

    return [];
  })

  useEffect(()=>{
    async function loadPokemons() {
      await api.get('/pokemons')
      .then(response => {
        
        setPokemons(response.data)
      })
    }

    loadPokemons();
  }, []);


  const createPokemon = async (pokemonToAdd:Pokemon) => {
    try{

      /* const updatedPokemon = [...pokemons]
      const pokemon = await api.post<Pokemon>('/pokemons',pokemonToAdd);

      const newPokemon = pokemon.data;
      updatedPokemon.push(newPokemon);
      setPokemons(updatedPokemon);
      const pokemonExists = updatedPokemon.find(pokemon => pokemon.name === pokemonToAdd.name);

      console.log("CREATE POKEMON:",updatedPokemon)
      if(pokemonExists){
        console.log()
        toast.error('Esse pokemon já foi adicionado a lista.')
        return;
      } else {

      }
       */

      const response = await api.post('/pokemons', {
        ...pokemonToAdd
      });
      
      const pokemon = response.data;
      
      setPokemons([...pokemons, pokemon])

      localStorage.setItem('@Pokedex:pokemons', JSON.stringify(pokemons));
      toast.success('Pokemon criado com sucesso!')
      
    } catch(err) {
        toast.error('Erro criando o pokemon')
       
    }
  }

  const updatePokemon = async (pokemonToUpdate:Pokemon) => {
    try{
      const response = await api.put(`/pokemons/${pokemonToUpdate.id}`, {
        ...pokemonToUpdate
      })
      console.log("POKEMON UPDATE:", pokemonToUpdate)
  
      const updatedPokemon = response.data;
      setPokemons([...pokemons, updatedPokemon])
      localStorage.setItem('@Pokedex:pokemons', JSON.stringify(pokemons));
      toast.success('Pokemon atualizado com sucesso!');

    } catch {
      toast.error('Erro atualizando o pokemon')
    }
    
  }

  const removePokemon = async (pokemonID:string) => {
    try{
      /* const updatedPokemon = [...pokemons];
      console.log("REMOVE POKEMON UPDATEPOKEMONS:",updatedPokemon)
      const pokemonIndex = updatedPokemon.findIndex( pokemon => pokemon.id === pokemonID)

      if(pokemonIndex >= 0){
        updatedPokemon.splice(pokemonIndex, 1);
        setPokemons(updatedPokemon);
        localStorage.setItem('@Pokedex:pokemons', JSON.stringify(updatedPokemon))
      } else {
        throw Error();
      } */
      console.log("POKEMONS TO remove", pokemonID)
      console.log("POKEMONS", pokemons);
      const pokemonsToKeep = pokemons.filter(pokemon => pokemon.id !== pokemonID)

      console.log("POKEMONS TO KEEP ID", pokemonsToKeep)
      setPokemons(pokemonsToKeep)
      localStorage.setItem('@Pokedex:pokemons', JSON.stringify(pokemonsToKeep))
      toast.success('Pokemon excluido com sucesso!')
      api.delete(`/pokemons/${pokemonID}`)
      return;
    } catch(err) {
      console.log("erro excluindo", err.message)
      toast.error('Erro excluindo pokemon');
      return;
    }
  }



  return(
    <PokemonContext.Provider
      value={{pokemons,createPokemon,removePokemon,updatePokemon}}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext)

  return context;
}

