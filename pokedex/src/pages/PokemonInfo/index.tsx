import MaterialTable from 'material-table'
import React, { forwardRef } from 'react'
import { usePokemon } from '../../hooks/usePokemon'

import { FiChevronRight } from 'react-icons/fi'
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FilterList from "@material-ui/icons/FilterList"
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import SortArrow from '@material-ui/icons/Sort';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Clear, ClearAll, Filter } from '@material-ui/icons';

import { Container } from './style';

export function PokemonInfo() {

  const { pokemons } = usePokemon()

  const columns = [
    
    {title:"Name", field: "name"},
    {title:"Número na Pokedex", field: "pokedexNumber"},
    {title:"Geração", field: "generation"},
    {title:"Estado de evolução", field: "evolutionState"},
    {title:"Evoluido", field: "evolved"},
    {title:"ID da família", field: "familyID"},
    {title:"CrossGen", field: "crossGen"},
    {title:"Tipo 1", field: "type1"},
    {title:"Tipo 2", field: "type2"},
    {title:"Clima 1", field: "weather1"},
    {title:"Clima 2", field: "weather2"},
    {title:"Status total", field: "statTotal"},
    {title:"Ataque", field: "atk"},
    {title:"Defesa", field: "def"},
    {title:"Status", field: "sta"},
    {title:"Lendário", field: "legendary"},
    {title:"Aquireable", field: "aquireable"},
    {title:"Spawns", field: "spawns"},
    {title:"Regional", field: "regional"},
    {title:"Raidable", field: "raidable"},
    {title:"Hatchable", field: "hatchable"},
    {title:"Shiny", field: "shiny"},
    {title:"Nest", field: "nest"},
    {title:"New", field: "new"},
    {title:"Not Gettable", field: "notGettable"},
    {title:"Future Evolve", field: "futureEvolve"},
    {title:"100% CP @ 40", field: "CP40"},
    {title:"100% CP @ 39", field: "CP39"},    
    {title:"ID", field: "id"},
  ]


  return(
    
       <MaterialTable 
        icons={{
          Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
          Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
          FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
          PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
          NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
          LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
          ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
          Clear: forwardRef((props, ref) => <ClearAll {...props} ref={ref} />),
          SortArrow: forwardRef((props, ref) => <SortArrow {...props} ref={ref} />),
        }}
        title="Dados Pokemon"
        data={pokemons}
        columns={columns}
        options={
          {filtering:true}
        }
       
      /*   actions={[
          {
            icon: () => <FilterList />,
            tooltip: 'Send Email Reminder',
            onClick: (event, rowData) => alert('You send '),
          }, 
          
        ]}*/
    />    
    
   

  )
}