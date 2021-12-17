import tw from 'tailwind-styled-components';

export const Container = tw.div`
  container

  mt-8

  flex
  justify-center
`;

export const Input = tw.input`
  h-10
  px-4

  rounded-md

  text-gray

  bg-gray-light
`;

export const CreateTaskButton = tw.button`
  px-3
  py-1
  ml-4

  rounded-md

  font-bold
  text-gray-light

  bg-red
`;
