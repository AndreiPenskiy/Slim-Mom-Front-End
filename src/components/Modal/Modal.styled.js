import styled from 'styled-components';

export const Overlay = styled.div`
  z-index: 98;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(33, 33, 33, 0.12);
  transform: scale(${({ open }) => (open ? 1 : 0.7)});
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 300ms ease-in-out;
`;

export const ModalContainer = styled.div`
  z-index: 99;
  position: relative;
  width: 100%;
  max-width: 672px;
    height: 100%;
  color: #212121;
  background-color: #ffffff;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  transform: scale(${({ open }) => (open ? 1 : 0.7)});
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 300ms ease-in-out;
  @media (min-width: 768px) {
    width: 672px;
    height: fit-content;
  }
`;

export const ContentContainer = styled.div`
  padding: 40px 20px;
  @media (min-width: 768px) {
    padding: 20px 20px 80px 20px;
  }
`;
export const ReturnContainer = styled.div`
  height: 40px;
  background-color: #eff1f3;
  display: flex;
  align-items: center;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Return = styled.div` 
cursor: pointer;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 500px;
  @media (min-width: 768px) {
    font-size: 26px;
    text-align: center;
    width: 500px;
    margin: 40px auto 0 auto;
  }
`;
export const DailyCalories = styled.p`
  color: #264061;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-align: center;
  margin-top: 20px;
  @media (min-width: 768px) {
    text-align: center;
  }
`;
export const Calories = styled.span`
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 0.04em;
  text-align: center;
`;

export const ProductsContainer = styled.div`
  border-top: 1px solid #e0e0e0;

  max-width: 330px;
  margin: 32px auto;
  @media (min-width: 768px) {
  }
`;
export const ProductsTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  margin-top: 20px;
`;

export const List = styled.ol`
  padding: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #9b9faa;
  margin: 0;
`;
export const Product = styled.li`
  list-style: decimal;
  :not(:first-child) {
    margin-top: 20px;
  }
`;
export const Button = styled.a`
  display: block;
  box-sizing: content-box;
  width: fit-content;
  padding: 13px 25px;
  border-radius: 30px;
  background-color: #fc842d;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: white;
  text-align: center;
  margin: 40px auto 80px auto;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
`;

export const Close = styled.div`
  display: none;
  @media (min-width: 768px) {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 20px;
  }
`;
