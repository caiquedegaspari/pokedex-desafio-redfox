import { InputLabel, Select } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

import {Container, LabelContainer} from './style'

export function SelectComponent() {
  const generations:number[] = [1,2,3,4,5,6,7]
  const [generation, setGeneration] = useState(1)

  const evolutionStates:number[] = [1,2,3]
  const [ evolutionState, setEvolutionState] = useState(1)

  const types:string[] = [ 
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
    'Sunny/Clear',
    'Cloudy',
    'Windy',
    'Rainy',
    'Partly cloudy',
    'Snow',
    'Fog',
  ]
  const [ type1, setType1] = useState('')
  const [ type2, setType2] = useState('')

  const [ weather1, setWeather1] = useState('')
  const [ weather2, setWeather2] = useState('')

  const hatchables:number[] = [0,2,5,10];
  const [hatchable, setHatchable] = useState(0);

  const raidables:number[] = [0,1,2,3,4,5]
  const [ raidable, setRaidable ] = useState(0)

  const aquireables:number[] = [0,1,2,3];
  const [aquireable, setAquireable] = useState(0)

  const legendary_array:number[] = [0,1,2]; 
  const [legendary,setLegendary] = useState(0);


  return(
    <>
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
    </>
  )
}