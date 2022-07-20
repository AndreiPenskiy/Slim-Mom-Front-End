import {
  Strawberries,
  Leaf,
  Banana,
  Vector,
  BackgroundImage,
} from './Background.styled';

export const Background = () => {
  return (
    <BackgroundImage>
      <Strawberries />
      <Leaf />
      <Banana />
      <Vector />
    </BackgroundImage>
  );
};
