import React from "react";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { useState } from "react";
import { FormControl, FormControlLabel } from "@material-ui/core";
//import { usePokemon } from "../../hooks/usePokemon";

export default function CheckboxComponent() {
  //Valor da coluna legendary??
  //Valor da coluna aquiareable??
  //Valor da coluna raidable??
  //o valor hatchable só vai até 10 né?

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

  //const { checkboxes,setCheckboxData } = usePokemon()
/* 
  function handleSetCheckboxData(checkboxName:string,event: React.ChangeEvent<HTMLInputElement>) {
    constevolvedValue = setEvolved(event.target.checked);

    setCheckboxData({checkboxName,checkboxValue:})

  } */

  return(
    <>
    <FormControlLabel control={
      <Checkbox 
      checked={evolved}
      onChange={(event)=> setEvolved(event.target.checked)} 
      />
      } label="Evolved"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={crossGen}
      onChange={(event)=>setCrossGen(event.target.checked)} 
      />
      } label="CrossGen"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={spawns}
      onChange={(event)=>setSpawns(event.target.checked)}
      />
      } label="Spawns"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={regional}
      onChange={(event)=>setRegional(event.target.checked)} 
      />
      } label="Regional"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={shiny}
      onChange={(event)=>setShiny(event.target.checked)} 
      />
      } label="Shiny"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={nest}
      onChange={(event)=>setNest(event.target.checked)}
      />
      } label="Nest"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={isNew}
      onChange={(event)=>setIsNew(event.target.checked)} 
      />
      } label="New"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={notGettable}
      onChange={(event)=> setNotGettable(event.target.checked)}
      />
      } label="Not Gettable"
    />

    <FormControlLabel control={
      <Checkbox 
      checked={futureEvolve}
      onChange={(event)=>setFutureEvolve(event.target.checked)}
      />
      } label="Future Evolve"
    />

    </>
  )
}