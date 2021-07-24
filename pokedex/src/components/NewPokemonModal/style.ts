import styled from 'styled-components';

export const ContentContainer = styled.form`


  h2{
    color: #3a3a3a;
    font-size: 20px;
    margin-bottom: 25px;
  }


  input {
    width: 45%;
    padding: 0 24px;
    height: 64px;
    border-radius: 4px;
    margin-right: 2px;
    border: 1px solid #d7d7d7;

    font-weight:400;
    font-size: 16px;
    &::placeholder{
      color: #3a3a3a;
    }
    & + input {
      margin-top:16px;
    }
  }
  button{
    width: 210px;
    height:40px;
    margin-left: 80%;
    border-radius: 5px;
    border:0;
    color:#ddd;
    background-color: #c4001d;
    font-weight:bold;
    transition: 200ms;

    &:hover {
      filter: brightness(0.8)
    }
  }
`

export const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
`

export const LabelContainer = styled.section`
  margin: 16px;
`