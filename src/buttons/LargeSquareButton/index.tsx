import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Fonts, Utils, Colors, Sizes} from '../../styles';
import BaseButton from '../BaseButton';

declare type Props = {
  onPress(): void;
  text: string;
  buttonColor?: string;
  textColor?: string;
  borderColor?: string;
};

export default function LargeSquareButton({
  onPress,
  text,
  buttonColor,
  textColor,
  borderColor,
}: Props) {
  const child = (
    <Text style={[styles.buttonText, {color: textColor || Colors.white}]}>
      {text}
    </Text>
  );
  const customStyles = {
    backgroundColor: buttonColor || Colors.main_green,
    borderColor: borderColor || Colors.main_green,
    borderWidth: 1,
  };
  return (
    <BaseButton
      onPress={() => onPress()}
      buttonStyle={[styles.large, customStyles]}
      child={child}
    />
  );
}

const styles = StyleSheet.create({
  large: {
    width: Sizes.WIDTH_LARGE,
    height: Utils.DEVICE_HEIGHT / 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    fontSize: Fonts.normal,
    fontWeight: 'bold',
  },
});
