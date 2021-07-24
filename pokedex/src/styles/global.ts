import { createGlobalStyle } from 'styled-components';
import pokeball from '../assets/pokeball.jpg'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    background:  url(${pokeball}) no-repeat 130% -5% ;
  }

  body, input, button {
    font: 16px 'Roboto',sans-serif;
  }

  #root {
    max-width:1180px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor:pointer
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;

  }

  .react-modal-content{
    overflow: scroll ;
    width:100%;
    max-width: 1080px;
    max-height: 700px;
    background: #f0f2f5;
    padding: 3rem;
    position:relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition:200ms;

    &:hover{
      filter:brightness(0.7)
    }
  }
`