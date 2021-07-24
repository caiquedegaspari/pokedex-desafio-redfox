import  styled from 'styled-components';

export const Header = styled.header`
  div{
    display:flex;
    align-items:center;
    justify-content:space-between;
    //background-color:#000;
    height:70px;

    img{
      background-color:#ddd;
      margin-left: -5%;
      //margin-top: -3%;
      height: 60px;
    }

    button {
      width: 200px;
      height: 50px;
      border-radius: 4px;
      border:none;
      font-weight:bold;
      background-color:#ddd;
    }
  }
    
`