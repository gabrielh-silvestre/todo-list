import tw from 'tailwind-styled-components';

export const Container = tw.article`
  container

  mt-8
`;

export const ContentContainer = tw.div`
  py-8

  flex
  flex-col
  items-center

  rounded-md

  bg-gray-light
`;

export const InfoContainer = tw.section`
  mb-8

  flex
  flex-col
  items-center
`;

export const ButtonsContainer = tw.section`
  w-full
  px-8

  flex
  justify-around
`;

export const TitleInput = tw.input`
  h-12

  mb-4
  px-8

  text-center
  text-4xl
  text-gray-dark

  rounded-md

  bg-gray-light
`;
