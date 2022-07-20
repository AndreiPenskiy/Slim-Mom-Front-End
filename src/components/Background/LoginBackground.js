import {
  Strawberries,
  Leaf,
  Banana,
  Vector,
  BackgroundImage,
} from './LoginBackground.styled';

export const LoginBackground = () => {
  return (
    <BackgroundImage>
      <Strawberries />
      <Leaf />
      <Banana />
      <Vector />
    </BackgroundImage>
  );
};
