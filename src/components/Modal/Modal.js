import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { createPortal } from 'react-dom';
import {
  Button,
  Calories,
  DailyCalories,
  List,
  ModalContainer,
  Overlay,
  Product,
  ProductsContainer,
  ProductsTitle,
  Title,
  Close,
  ReturnContainer,
  Return,
  ContentContainer,
} from './Modal.styled';

import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';
import { useSelector } from 'react-redux';

export const Modal = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const { calories, notRecomendate } = useSelector(state => state.calculator);

  useEffect(() => {
    if (notRecomendate.length > 0) {
      setOpen(true);
    }
  }, [notRecomendate]);

  useEffect(() => {
    const onEscape = e => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setOpen(!open);
    }
  };

  const content = (
    <Overlay open={open} onClick={handleBackdropClick}>
      <ModalContainer open={open}>
        <ReturnContainer>
          <Return>
            <MdOutlineKeyboardReturn size={20} onClick={() => setOpen(false)} />
          </Return>
        </ReturnContainer>
        <ContentContainer>
          <Close>
            <IoClose size={20} onClick={() => setOpen(false)} />
          </Close>

          <Title>{t('ModalText.title_1')}</Title>
          <div>
            <DailyCalories>
              <Calories>{calories}</Calories> {t('CalloriesText.count')}
            </DailyCalories>
            <ProductsContainer>
              <ProductsTitle>{t('ModalText.text')}</ProductsTitle>
              {notRecomendate.length > 0 && (
                <List>
                  {notRecomendate.map((product, index) => (
                    <Product key={index}>{product}</Product>
                  ))}
                </List>
              )}
            </ProductsContainer>
          </div>
          <Button to='/login' onClick={()=>setOpen(false)}>{t('ModalText.btn')}</Button>
        </ContentContainer>
      </ModalContainer>
    </Overlay>
  );

  return (
    <>
    
      {createPortal(content, document.body)}
    </>
  );
};

// Add code to App.js to test //
/* <Modal
activator={({ setOpen }) => (
  <button type="button" onClick={() => setOpen(true)}>
    Show Modal
  </button>
)}
/> */
