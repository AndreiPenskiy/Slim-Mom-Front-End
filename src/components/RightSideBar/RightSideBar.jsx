import React from 'react';
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

export const RightSideBar = () => {

  const { t } = useTranslation();

  return (
    <RightSideSection>
      <Container>
        <Summary>
          <Title>{t("CalloriesText.title_1")} 06/20/2020 </Title>
          <List>
            <ListItem>
              <span>{t("CalloriesText.item_1")}</span>
              <span>000 {t("CalloriesText.count")}</span>
            </ListItem>
            <ListItem>
              <span>{t("CalloriesText.item_2")}</span>
              <span>000 {t("CalloriesText.count")}</span>
            </ListItem>
            <ListItem>
              <span>{t("CalloriesText.item_3")}</span>
              <span>000 {t("CalloriesText.count")}</span>
            </ListItem>
            <ListItem>
              <span>{t("CalloriesText.item_4")}</span>
              <span>000 %</span>
            </ListItem>
          </List>
        </Summary>
        <div>
          <Title>{t("CalloriesText.title_2")}</Title>
          <DietDescription>{t("CalloriesText.item_5")}</DietDescription>
        </div>
      </Container>
    </RightSideSection>
  );
};
