import React from 'react';
import BaseButton from '../BaseButton';
import {StyleSheet} from 'react-native';
import {Sizes, Utils} from '../../styles';

declare type Props = {
  onPress(): void;
  borderColor: string;
  child: React.Element;
};

export default function SmallHallowRoundedButton(props: Props) {
  const {onPress, borderColor, child} = props;
  const customStyles = {
    borderColor,
    borderWidth: 1,
  };
  return (
    <BaseButton
      onPress={() => onPress()}
      buttonStyle={[styles.button, customStyles]}
      child={child}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: Sizes.WIDTH_HALF,
    height: Utils.DEVICE_HEIGHT / 20,
    borderRadius: 25,
  },
});
