import { type ComponentProps, type ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import { activeVariantClass, buttonClass } from './styles';

type ButtonProps = {
  variant?: 'standard' | 'active';
} & ComponentProps<'button'>;

export const Button = forwardRef(
  (
    { children, variant = 'standard', className, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        {...props}
        className={clsx(buttonClass, { [activeVariantClass]: variant === 'active' }, className)}
      >
        {children}
      </button>
    );
  }
);
