import clsx from 'clsx';
import type { SVGProps } from 'react';
import { css } from '@linaria/core';
import { forwardRef } from 'react';

const svgCss = css`
  display: flex;
  align-self: center;
  transition:
    background-color 0.6s ease,
    color 0.6s ease,
    box-shadow 0.6s ease,
    border-color 0.6s ease;
`;

export type IconProps = {
  /**
   * Sets the icon size. (small | standard)
   */
  size?: 'tiny' | 'small' | 'standard';
  /**
   * Accessible label for screen readers.
   */
  title?: string;

  /**
   * Sets the icon's fill color.
   */
  color?: string;
};

type SvgProps = IconProps & SVGProps<SVGSVGElement>;
const Svg = forwardRef(
  ({ size = 'standard', color, title, children, className, ...props }: SvgProps, ref) => {
    return (
      <span
        style={{ color: color }}
        className={clsx(
          svgCss,
          'inline-block',
          {
            tiny: 'w-[8px] h-[8px]',
            small: 'w-[16px] h-[16px]',
            standard: 'w-[20px] h-[20px]',
          }[size],
          className
        )}
        aria-hidden={!title}
      >
        <svg role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" {...props}>
          {title && <title>{title}</title>}
          {children}
        </svg>
      </span>
    );
  }
);
export default Svg;
