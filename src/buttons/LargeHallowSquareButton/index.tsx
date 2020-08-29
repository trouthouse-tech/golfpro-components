import React from 'react';
import LargeSquareButton from '../LargeSquareButton';
import {Colors} from '../../styles';

type Props = {
  onPress(): void;
  text: string;
  buttonColor?: string;
  textColor?: string;
  borderColor?: string;
};

export default function LargeHallowSquareButton(props: Props) {
  return (
    <LargeSquareButton
      {...props}
      buttonColor={Colors.white}
      textColor={Colors.main_green}
    />
  );
}
