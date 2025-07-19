import { css } from '@linaria/core';
import { colorStrokeStandard } from 'src/theme';

const separatorCss = css`
  width: 100%;
  height: 0.5px;
  background: ${colorStrokeStandard};
  margin: 4px 0;
`;

export const DropdownMenuSeparator = () => {
  return <div className={separatorCss} role="separator" />;
};
