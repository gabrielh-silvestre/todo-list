import tw from 'tailwind-styled-components';

export const Container = tw.section`
  w-7/12

  my-2
  py-3
  px-6

  flex
  justify-between
  items-center

  rounded-md

  bg-gray-light
`;

export const TaskTitle = tw.h3`
  text-2xl
  text-gray-dark
`;

export const TaskDescription = tw.p`
  text-gray
`;

export const TaskDone = tw.div<{ $isDone: boolean }>`
  w-10
  h-10

  rounded-full

  shadow-inner
  shadow-gray

  transition-colors
  duration-150

  ${({ $isDone }) => $isDone ? 'bg-red' : 'bg-gray-light'}
`;
