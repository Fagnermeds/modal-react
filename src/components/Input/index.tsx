import React, { useState, useCallback, InputHTMLAttributes, ChangeEvent } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  icon?: React.ComponentType<IconBaseProps>; 
};

const Input: React.FC<IInputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputText);
  }, [inputText]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }

  return (
    <Container isFocused={isFocused} isFilled={isFilled} >
      { Icon && <Icon size={20} /> }

      <input
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        { ...rest } 
      />
    </Container>
  );
}

export default Input;