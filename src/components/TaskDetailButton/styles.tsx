import tw from 'tailwind-styled-components';

export const ButtonContainer = tw.button<{ $action: 'save' | 'cancel' }>`
  w-1/3
  h-10

  px-4

  text-gray-dark

  rounded-md

  ${({ $action }) => ($action === 'save' ? 'bg-green' : 'bg-red')}

  duration-150

  hover:brightness-90
`;
