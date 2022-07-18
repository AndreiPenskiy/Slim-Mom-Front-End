import styled from 'styled-components';

export const DiaryListProductsConteinerStyled = styled.div`
  position: relative;
`;

export const DiaryListProductsStyled = styled.ul`
  z-index: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  padding: 20px;
  background: #f0f1f3;
  width: 400px;
  max-height: 300px;
  overflow: hidden;
  border-radius: 3%;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;

  & li {
    margin-bottom: 10px;
  }
`;
