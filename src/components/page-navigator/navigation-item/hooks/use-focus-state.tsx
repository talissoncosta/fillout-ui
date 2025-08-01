import { useState } from 'react';

export const useFocusState = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return { isFocused, onFocus, onBlur };
};
