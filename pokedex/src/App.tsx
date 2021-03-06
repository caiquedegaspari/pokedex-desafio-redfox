import React from 'react';
import { PokemonProvider } from './hooks/usePokemon';
import { Routes } from './routes';
import  GlobalStyle from './styles/global';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
//funcionalidades da nossa aplicação:
// O usuário deve poder listar todos os pokemons na home
// O usuário deve poder listar pokemons específicos pesquisando o nome deles via input
// O usuário deve poder criar um novo pokemon clicando no botão criar pokemon, 
// que abre uma modal para criar o pokemon

// O usuário deve poder excluir um pokemon da lista clicando em um botão de excluir pokemon
// O usuário deve poder importar uma planilha com todos os dados

function App() {
  const handleClick = () => toast.success('Mensagem de sucesso')
 

  return (
    <>
    <PokemonProvider>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </PokemonProvider>
    </>
  );
}

export default App;
