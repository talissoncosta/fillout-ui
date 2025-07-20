import Svg, { type IconProps } from './svg';

export const DragHandlerIcon = (props: IconProps) => (
  <Svg viewBox="0 0 256 256" {...props}>
    <circle cx="92" cy="60" r="16" fill="currentColor" />
    <circle cx="164" cy="60" r="16" fill="currentColor" />
    <circle cx="92" cy="128" r="16" fill="currentColor" />
    <circle cx="164" cy="128" r="16" fill="currentColor" />
    <circle cx="92" cy="196" r="16" fill="currentColor" />
    <circle cx="164" cy="196" r="16" fill="currentColor" />
  </Svg>
);
