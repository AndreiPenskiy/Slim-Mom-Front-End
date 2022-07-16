import styled from "styled-components";

export const LangButton = styled.button`
    cursor: pointer;
    width: 26px;
    height: 20px;
    padding: 0px;
    margin-left: 5px;
    font-size: 11px;
    font-family: Verdana;
    text-align: center;
    border-radius: 10px;
    border: 2px solid #fc842d;
    background-color: transparent;
    outline: none;
    margin-left: 10px;
    // color: black;
    color: ${
      props => props.active ?
          `#fc842d` :
          "black"
  };

    &:hover {
    color: #fc842d;
    }
`

export const LangButtonEn = styled.button`
    cursor: pointer;
    width: 26px;
    height: 20px;
    padding: 0px;
    margin-left: 5px;
    font-size: 11px;
    font-family: Verdana;
    text-align: center;
    border-radius: 10px;
    border: 2px solid #fc842d;
    background-color: transparent;
    outline: none;
    margin-left: 10px;
    // color: black;
    color: ${
      props => props.active ?
          `#fc842d` :
          "black"
  };

    &:hover {
    color: #fc842d;
    }
    
    @media (max-width: 768px) {
        margin-right: 8px;
}
`

export const ButtonContainer = styled.div`
display: flex;
height: 25px;
align-items: center;
`