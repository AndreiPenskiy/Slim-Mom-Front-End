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

export const RightSideBar = () => {
  return (
    <RightSideSection>
      <Container>
        <Summary>
          <Title>Summary for 06/20/2020 </Title>
          <List>
            <ListItem>
              <span>Left</span>
              <span>000 kcal</span>
            </ListItem>
            <ListItem>
              <span>Consumed</span>
              <span>000 kcal</span>
            </ListItem>
            <ListItem>
              <span>Daly rate</span>
              <span>000 kcal</span>
            </ListItem>
            <ListItem>
              <span>n% of normal</span>
              <span>000 kcal</span>
            </ListItem>
          </List>
        </Summary>
        <div>
          <Title>Food not recommended</Title>
          <DietDescription>Your diet will be displayed here</DietDescription>
        </div>
      </Container>
    </RightSideSection>
  );
};
