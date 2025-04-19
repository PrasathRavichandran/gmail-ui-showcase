import { Theme } from "@/themes";
import {
  composeRestyleFunctions,
  opacity,
  OpacityProps,
  useRestyle,
} from "@shopify/restyle";
import { Platform, StyleProp, ViewStyle } from "react-native";
import Pressable, { PressableProps } from "./Pressable";

interface TouchableOpacityProps extends PressableProps {
  pressed?: OpacityProps<Theme>;
}

const restyleFunction = composeRestyleFunctions<Theme, OpacityProps<Theme>>([
  opacity,
]);

const TouchableOpacity = ({
  pressed,
  style,
  ...rest
}: TouchableOpacityProps) => {
  pressed
    ? useRestyle(restyleFunction, pressed)
    : ({ style: undefined } as any);

  return (
    <Pressable
      style={({ pressed: isPressed }) =>
        (isPressed
          ? [style, { opacity: Platform.select({ ios: 0.6 }) }]
          : style) as StyleProp<ViewStyle>
      }
      {...rest}
    />
  );
};

export default TouchableOpacity;
