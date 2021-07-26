import React, { FormEvent } from 'react';
import Modal from 'react-modal';
import { ContentContainer, LabelContainer, Container, TwoInputContainer } from './style';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { v4 as uuidv4} from 'uuid'

import vector from '../../assets/vector.svg'
import { useState } from 'react';
import CheckboxComponent from '../Checkbox';
import { SelectComponent } from '../Select';
import { usePokemon } from '../../hooks/usePokemon';
import {Pokemon} from '../../types';
import { toast } from 'react-toastify';
import { InputLabel, Select } from '@material-ui/core';
import { useEffect } from 'react';

/*
  Tenho algumas perguntas sobre o desafio, tipo sobre regras de negócio...
  Os campos que tem como resposta apenas 0 ou 1 são booleanos né?
  Todos os campos que tem na planilha devem ser preenchidos manualmente via input pelo usuário né?
  O campo spawns, cai na regra de ser booleano ou deve ser um número?
  
  o que é raidable? tem um limite?
 */

interface NewPokemonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  pokemon?:Pokemon | boolean;
 
}

export function NewPokemonModal({isOpen, onRequestClose, pokemon}:NewPokemonModalProps) {

  const [open,setOpen] = useState(false)
  
  const { createPokemon, pokemons, updatePokemon  } = usePokemon();
  const [ pokemonToAdd, setPokemonToAdd] = useState<Pokemon>();
  /********************************INPUT ************************************/
  const [pokemonName, setPokemonName] = useState("");
  const [ pokedexNumber, setPokedexNumber ] = useState(0);
  const [ img_url, setImg_url] = useState('');
  const [ familyID, setFamilyID] = useState(0);
  const [ statTotal, setStatTotal] = useState(0);
  const [ atk, setAtk] = useState(0);
  const [ def, setDef] = useState(0);
  const [ sta, setSta] = useState(0);
  const [ CP40, setCP40] = useState(0);
  const [ CP39, setCP39] = useState(0);
/* 
  useEffect(() => {
    setOpen(open)
  }, [open])
 */
useEffect(() => {
  setOpen(isOpen)
  //console.log("open", open)
},[isOpen])

useEffect(() => {
  handleRequestClose()
},[onRequestClose])

 const title = pokemon !== true && pokemon != false && pokemon !== undefined;

  useEffect(()=>{
    if(pokemon !== true && pokemon != false && pokemon !== undefined){
      setPokemonName(pokemon.name);
      setAquireable(pokemon.aquireable);
      setAtk(pokemon.atk);
      setDef(pokemon.def);  
      setCrossGen(pokemon.crossGen);
      setEvolutionState(pokemon.evolutionState);
      setCP39(pokemon.CP39);
      setCP40(pokemon.CP40);
      setEvolved(pokemon.evolved);
      setFutureEvolve(pokemon.futureEvolve);
      setLegendary(pokemon.legendary);
      setFamilyID(pokemon.familyID);
      setIsNew(pokemon.new);
      setNest(pokemon.nest);
      setHatchable(pokemon.hatchable);
      setImg_url(pokemon.img_url);
      setPokedexNumber(pokemon.pokedexNumber);
      setGeneration(pokemon.generation);
      setNotGettable(pokemon.notGettable);
      setSpawns(pokemon.spawns);
      setShiny(pokemon.shiny);
      setType1(pokemon.type1);
      setType2(pokemon.type2);
      setWeather1(pokemon.weather1);
      setWeather2(pokemon.weather2);
      setSta(pokemon.sta);
      setStatTotal(pokemon.statTotal);
      setRegional(pokemon.regional);
      setRaidable(pokemon.raidable);
    }
  },[pokemon, isOpen])

  function handleRequestClose(){
    setOpen(false)
    //pokemon = undefined
    setPokemonName("")
    setAquireable(0);
    setAtk(0);
    setDef(0);  
    setCrossGen(false);
    setEvolutionState(1);
    setCP39(0);
    setCP40(0);
    setEvolved(false);
    setFutureEvolve(false);
    setLegendary(0);
    setFamilyID(0);
    setIsNew(false);
    setNest(false);
    setHatchable(0);
    setImg_url('');
    setPokedexNumber(0);
    setGeneration(1);
    setNotGettable(false);
    setSpawns(false);
    setShiny(false);
    setType1('');
    setType2('');
    setWeather1('');
    setWeather2('');
    setSta(0);
    setStatTotal(0);
    setRegional(false);
    setRaidable(0);
  }
  /***************************** CHECKBOX ********************************* */

  const [checked, setChecked] = useState(false);

  const [evolved, setEvolved] = useState(false);

  const [crossGen, setCrossGen] = useState(false);

  const [spawns, setSpawns] = useState(false);

  const [regional, setRegional] = useState(false);

  const [shiny, setShiny] = useState(false);

  const [nest, setNest] = useState(false);

  const [ isNew, setIsNew] = useState(false);

  const [ notGettable, setNotGettable] = useState(false);

  const [futureEvolve, setFutureEvolve] = useState(false);

  //*****************SELECT ***************************************** */
  const generations:number[] = [1,2,3,4,5,6,7]
  const [generation, setGeneration] = useState(1)

  const evolutionStates:number[] = [1,2,3]
  const [ evolutionState, setEvolutionState] = useState(1)

  const types:string[] = [ 
    'nenhum',
    'grass',
    'fire', 
    'water', 
    'bug', 
    'normal', 
    'poison', 
    'electric', 
    'ground',
    'fairy',
    'fighting',
    'psychic',
    'rock',
    'ghost',
    'ice',
    'dragon',
    'dark',
    'steel',

  ];

  const weathers:string[] = [
    'nenhum',
    'Sunny/Clear',
    'Cloudy',
    'Windy',
    'Rainy',
    'Partly cloudy',
    'Snow',
    'Fog',
  ]
  const [ type1, setType1] = useState('Nenhum')
  const [ type2, setType2] = useState('Nenhum')

  const [ weather1, setWeather1] = useState('Nenhum')
  const [ weather2, setWeather2] = useState('Nenhum')

  const hatchables:number[] = [0,2,5,10];
  const [hatchable, setHatchable] = useState(0);

  const raidables:number[] = [0,1,2,3,4,5]
  const [ raidable, setRaidable ] = useState(0)

  const aquireables:number[] = [0,1,2,3];
  const [aquireable, setAquireable] = useState(0)

  const legendary_array:number[] = [0,1,2]; 
  const [legendary,setLegendary] = useState(0);




 async function handleCreatePokemon(event:FormEvent){
    if(
      pokemonName &&
      pokedexNumber &&
      img_url &&
      familyID &&
      statTotal &&
      atk &&
      def &&
      sta &&
      CP40 &&
      CP39 )
    await createPokemon({
      id: uuidv4(),
      CP39,
      CP40,
      aquireable,
      atk,
      crossGen,
      def,
      evolutionState,
      evolved, 
      familyID,
      futureEvolve,
      generation,
      hatchable,
      img_url,
      weather1,
      weather2,
      legendary,
      name: pokemonName,
      nest,
      new: isNew,
      notGettable,
      pokedexNumber,
      raidable,
      regional,
      shiny,
      spawns,
      sta,
      statTotal,
      type1,
      type2,
      
            
    })
    else{
      event.preventDefault();
      return toast.error('Preencha os dados corretamente')
      
    }
    
  }

  async function handleUpdatePokemon(){
    if(pokemon !== true && pokemon != false && pokemon !== undefined)
    await updatePokemon({
      id: pokemon.id,
      CP39,
      CP40,
      aquireable,
      atk,
      crossGen,
      def,
      evolutionState,
      evolved, 
      familyID,
      futureEvolve,
      generation,
      hatchable,
      img_url,
      legendary,
      name: pokemonName,
      weather1,
      weather2,
      nest,
      new: isNew,
      notGettable,
      pokedexNumber,
      raidable,
      regional,
      shiny,
      spawns,
      sta,
      statTotal,
      type1,
      type2,
      
      
    })
  } 

  
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close"
        >
          <img src={vector} alt="Fechar modal" />
        </button>
      <ContentContainer>
        <h2>{title ? 'Atualizar Pokemon' : 'Cadastrar Pokemon'}</h2>
      
      <TwoInputContainer>
        <div>
           <label>Nome do pokemon:</label>
        
          <input 
          type="text"
          value={pokemonName}
          placeholder="Nome do Pokemon"
          onChange={event => setPokemonName(event.target.value)}
          />
        </div>
        <div>
          <label>Número na Pokedex:</label>
        
          <input 
          type="number"
          value={pokedexNumber}
          placeholder="Número na Pokedex"
          onChange={event => setPokedexNumber(Number(event.target.value))}
          />

        </div>
      </TwoInputContainer>
       
      <TwoInputContainer>
        <div>
          <label>Url para imagem:</label>
        
          <input 
          type="text"
          value={img_url}
          placeholder="Url para foto"
          onChange={event => setImg_url(event.target.value)}
          />
        </div>
        <div>
          <label>ID da família:</label>
        
          <input 
            value={familyID}
          type="number"
          placeholder="Family ID"
          onChange={event => setFamilyID(Number(event.target.value))}
          />

        </div>
      </TwoInputContainer>
        
      <TwoInputContainer>
        <div>
          <label>Status total:</label>
        
          <input 
          value={statTotal}
          type="number"
          placeholder="Status total"
          onChange={event => setStatTotal(Number(event.target.value))}
          />

       
        </div>
        <div>
          <label>Ataque:</label>
        
          <input 
          type="number"
          value={atk}
          placeholder="ATK"
          onChange={event => setAtk(Number(event.target.value))}
          />
          
        </div>
      </TwoInputContainer>


      <TwoInputContainer>
        <div>
          <label>Defesa:</label>
        
          <input 
          type="number"
          value={def}
          placeholder="DEF"
          onChange={event => setDef(Number(event.target.value))}
          />
        
        </div>
        <div>
          <label>STA:</label>
        
          <input 
          type="number"
          value={sta}
          placeholder="STA"
          onChange={event => setSta(Number(event.target.value))}
          />
    
        </div>
      </TwoInputContainer>
        
        
      <TwoInputContainer>
        <div>
          <label>CP40:</label>
          <input 
          type="number"
          value={CP40}
          placeholder="CP40"
          onChange={event => setCP40(Number(event.target.value))}
          />

        </div>
        <div>
          <label>CP39:</label>
        
          <input 
          type="number"
          value={CP39}
          placeholder="CP39"
          onChange={event => setCP39(Number(event.target.value))}
          />
          
        </div>
      </TwoInputContainer>     
        

        
        
          
        

        

       

<FormControlLabel control={
      <Checkbox 
      value={evolved}
      checked={evolved}
      onChange={(event)=> setEvolved(event.target.checked)} 
      />
      } label="Evolved"
    />

    <FormControlLabel control={
      <Checkbox 
      value={crossGen}
      checked={crossGen}
      onChange={(event)=>setCrossGen(event.target.checked)} 
      />
      } label="CrossGen"
    />

    <FormControlLabel control={
      <Checkbox 
      value={spawns}
      checked={spawns}
      onChange={(event)=>setSpawns(event.target.checked)}
      />
      } label="Spawns"
    />

    <FormControlLabel control={
      <Checkbox 
      value={regional}
      checked={regional}
      onChange={(event)=>setRegional(event.target.checked)} 
      />
      } label="Regional"
    />

    <FormControlLabel control={
      <Checkbox 
      value={shiny}
      checked={shiny}
      onChange={(event)=>setShiny(event.target.checked)} 
      />
      } label="Shiny"
    />

    <FormControlLabel control={
      <Checkbox 
      value={nest}
      checked={nest}
      onChange={(event)=>setNest(event.target.checked)}
      />
      } label="Nest"
    />

    <FormControlLabel control={
      <Checkbox 
      value={isNew}
      checked={isNew}
      onChange={(event)=>setIsNew(event.target.checked)} 
      />
      } label="New"
    />

    <FormControlLabel control={
      <Checkbox 
      value={notGettable}
      checked={notGettable}
      onChange={(event)=> setNotGettable(event.target.checked)}
      />
      } label="Not Gettable"
    />

    <FormControlLabel control={
      <Checkbox 
      value={futureEvolve}
      checked={futureEvolve}
      onChange={(event)=>setFutureEvolve(event.target.checked)}
      />
      } label="Future Evolve"
    />

        <Container>
        <LabelContainer>
          <InputLabel>
            Generation
          </InputLabel>
            <Select
              native
              value = { generation }
              onChange = {(event)=> { 
                const generation = event.target.value
                setGeneration(Number(generation))
              }}
          
            >
              {generations.map(generation => {
                return(
                  <option value={generation}>{generation}</option>
                )
              })}
            </Select>
        </LabelContainer>

        <LabelContainer>
          <InputLabel>
            Evolution State
          </InputLabel>
          <Select
            native
            value = { evolutionState }
            onChange = {(event)=> { 
              const evolutionState = event.target.value
              setEvolutionState(Number(evolutionState))
            }}
        
          >
            { evolutionStates.map(evolutionState => {
              return(
                <option value={evolutionState}>{evolutionState}</option>
              )
            })}
        </Select>
        </LabelContainer>

        <LabelContainer>
          <InputLabel>
            Type 1
          </InputLabel>
          <Select
            native
            value = { type1 }
            onChange = {(event)=> { 
              const type1 = event.target.value
              setType1(String(type1))
            }}
        
          >
            { types.map(types => {
              return(
                <option value={types}>{types}</option>
              )
            })}
        </Select>
        </LabelContainer>
      
        <LabelContainer>
          <InputLabel>
            Type 2
          </InputLabel>
          <Select
            native
            value = { type2 }
            onChange = {(event)=> { 
              const type2 = event.target.value
              setType2(String(type2))
            }}
        
          >
            { types.map(types => {
              return(
                <option value={types}>{types}</option>
              )
            })}
        </Select>
        </LabelContainer>


        <LabelContainer>
          <InputLabel>
            Weather 1
          </InputLabel>
          <Select
            native
            value = { weather1 }
            onChange = {(event)=> { 
              const weather1 = event.target.value
              setWeather1(String(weather1))
            }}
        
          >
            { weathers.map(weather => {
              return(
                <option value={weather}>{weather}</option>
              )
            })}
        </Select>
        </LabelContainer>

        <LabelContainer>
          <InputLabel>
            Weather 2
          </InputLabel>
          <Select
            native
            value = { weather2 }
            onChange = {(event)=> { 
              const weather2 = event.target.value
              setWeather2(String(weather2))
            }}
        
          >
            { weathers.map(weather => {
              return(
                <option value={weather}>{weather}</option>
              )
            })}
        </Select>
        </LabelContainer>
            
        <LabelContainer>
          <InputLabel>
            Hatchable
          </InputLabel>
          <Select
            native
            value = { hatchable }
            onChange = {(event)=> { 
              const hatchable = event.target.value
              setHatchable(Number(hatchable))
            }}
        
          >
            { hatchables.map(hatchable => {
              return(
                <option value={hatchable}>{hatchable}</option>
              )
            })}
        </Select>
        </LabelContainer>
        
        <LabelContainer>
          <InputLabel>
            Raidable
          </InputLabel>
          <Select
            native
            value = { raidable }
            onChange = {(event)=> { 
              const raidable = event.target.value
              setRaidable(Number(raidable))
            }}
        
          >
            { raidables.map(raidable => {
              return(
                <option value={raidable}>{raidable}</option>
              )
            })}
        </Select>
        </LabelContainer>

        <LabelContainer>
          <InputLabel>
            Aquireable
          </InputLabel>
          <Select
            native
            value = { aquireable }
            onChange = {(event)=> { 
              const aquireable = event.target.value
              setAquireable(Number(aquireable))
            }}
        
          >
            { aquireables.map(aquireable => {
              return(
                <option value={aquireable}>{aquireable}</option>
              )
            })}
        </Select>
        </LabelContainer>


        <LabelContainer>
          <InputLabel>
            Legendary
          </InputLabel>
          <Select
            native
            value = { legendary }
            onChange = {(event)=> { 
              const legendary = event.target.value
              setLegendary(Number(legendary))
            }}
        
          >
            { legendary_array.map(legendary => {
              return(
                <option value={legendary}>{legendary}</option>
              )
            })}
        </Select>
        </LabelContainer>
            
      
      </Container>
 
        {
          title? <button type='submit' onClick={handleUpdatePokemon}>Atualizar Pokemon</button>
          : <button type='submit' onClick={handleCreatePokemon}>Criar Pokemon</button>
        }


      </ContentContainer>
    </Modal>
  )
}