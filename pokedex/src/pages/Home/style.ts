import styled from 'styled-components';

export const Title = styled.h1`
  color: #3a3a3a;
  max-width: 550px;
  font-size: 48px;
  margin-top: 80px;
`

export const Form = styled.form`
  margin-top: 40px;
  max-width:700px;

  display:flex;
  input {
    margin:0;
    flex:1;
    height:70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    background-color: #ddd;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right:0;
    
    &::placeholder{
      color:#a8a8b3;
    }
  }

  

`

export const Pokemons = styled.div`
  margin-top: 80px;
  max-width: 700px;

  div{
    display:flex;
    flex-direction:column;

    span{
      display:flex;
      justify-content:center;
      align-items:center;
      width: 210px;
      height:40px;
      background-color: #3d3d4d;
      border-radius:5px;
      border:0;
      color:#fff;
      font-weight:bold;
      transition: 200ms;

    &:hover {
      filter: brightness(0.8)
    }
    }

    button{
      width:34px;
      margin-left:auto;
      border:none;

      svg{
      color:#3d3d4d;
      transition:300ms;
      &:hover {
        transform: rotate(360deg);
        color:#000;
      }
    }
    }
   
  }

  a {
    height: 80px;
    background: #ddd;
    border-radius: 5px;
    width:100%;
    display:block;
    text-decoration:none;

    display:flex;
    align-items:center;
    transition: transform 200ms;

    & + a {
      margin-top: 16px;
    }

    &:hover{
      transform: translateX(10px);
    }

    img{
      width:64px;
      height:64px;
      margin: 0 15px;
      border-radius:50%;
    }

    div {
      margin-left: 0 16px;
      flex:1;

      strong{
        font-size:20px;
        color: #3d3d4d;
      }

      p{
        font-size: 18px;
        color: #a8a8b3;
        margin-top:4px
      }
    }

    button{
      border:none
    }

  }
`

export const FilterButton = styled.button`
    width: 210px;
    height:70px;
    margin:10px 0;
    border-radius: 5px;
    border:0;
    color:#fff;
    background-color: #c4001d;
    font-weight:bold;
    transition: 200ms;

    &:hover {
      filter: brightness(0.8)
    }
`

export const ImportSheet = styled.input`
  width: 210px;
    height:70px;
    margin:10px 280px;
    border-radius: 5px;
    border:0;
    color:#fff;
    background-color: #c4001d;
    font-weight:bold;
    transition: 200ms;

    &:hover {
      filter: brightness(0.8)
    }
`