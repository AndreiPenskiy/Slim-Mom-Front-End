import React from 'react';
import { useSelector } from 'react-redux';
import {
  RightSideSection,
  Container,
  Title,
  ListItem,
  List,
  DietDescription,
  Summary,
} from './RightSideBar.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import i18n from 'utils/i18next';

import { getUser } from '../../redux/auth/auth-selectors';

export const RightSideBar = () => {
  const { t } = useTranslation();

  const { date } = useSelector(state => state.dairy);
  const formattedDate = new Date(date).toLocaleDateString();

  const userCalories = useSelector(getUser).calories;
  const notRecomended = useSelector(getUser).notAllowedProducts;

  return (
    <RightSideSection>
      <Container>
        <Summary>
          <Title>
            {t('CalloriesText.title_1')} {formattedDate}{' '}
          </Title>
          <List>
            <ListItem>
              <span>{t('CalloriesText.item_1')}</span>
              <span>000 {t('CalloriesText.count')}</span>
            </ListItem>
            <ListItem>
              <span>{t('CalloriesText.item_2')}</span>
              <span>000 {t('CalloriesText.count')}</span>
            </ListItem>
            <ListItem>
              <span>{t('CalloriesText.item_3')}</span>
              <span>
                {userCalories ? userCalories : `000 `}
                {t('CalloriesText.count')}
              </span>
            </ListItem>
            <ListItem>
              <span>{t('CalloriesText.item_4')}</span>
              <span>000 %</span>
            </ListItem>
          </List>
        </Summary>
        <div>
          <Title>{t('CalloriesText.title_2')}</Title>
          <DietDescription>
            {notRecomended.length > 0 ? (
              <ul>
                {' '}
                {notRecomended.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            ) : (
              t('CalloriesText.item_5')
            )}
          </DietDescription>
        </div>
      </Container>
    </RightSideSection>
  );
};
