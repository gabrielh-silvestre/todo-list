import tw from 'tailwind-styled-components';

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

export const InputContainer = tw.label`
  w-full
`;

export const TitleInput = tw.input`
  w-full

  h-12

  mb-4

  text-center
  text-4xl
  text-gray-dark

  rounded-md

  bg-gray-light
`;

export const DescriptionText = tw.textarea`
  w-full
  h-24

  px-4

  text-lg
  text-gray-dark

  bg-gray-light

  resize-none
`;

export const ModalButton = tw.button<{ $action: 'save' | 'cancel' }>`
  w-1/3
  h-10

  px-4

  text-gray-dark

  rounded-md

  ${({ $action }) => ($action === 'save' ? 'bg-green' : 'bg-red')}

  duration-150

  hover:brightness-90
`;

