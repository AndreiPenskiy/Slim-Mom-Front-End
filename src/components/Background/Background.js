import { S, L, B, V, BackgroundImage } from './Background.styled';

export const Background = () => {
  return (
    <BackgroundImage style={{ top: '0', position: 'absolute' }}>
      <S />
      <L />
      <B />
      <V />
    </BackgroundImage>
  );
};