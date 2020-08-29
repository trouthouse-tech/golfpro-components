import React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';

declare type Props = {
  onPress(): void;
  buttonStyle: {};
  child: React.ReactNode;
};

export default function BaseButton(props: Props) {
  const {onPress, buttonStyle, child} = props;
  return (
    <TouchableHighlight
      style={[styles.button, buttonStyle]}
      onPress={() => onPress()}>
      {child}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
