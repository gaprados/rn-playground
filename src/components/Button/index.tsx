import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "filled" | "ghost";
  color?: "red" | "green" | "grey";
}

export function Button({
  children,
  variant = "filled",
  color = "grey",
  disabled,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      color={color}
      activeOpacity={disabled ? 1 : 0.5}
      onPress={disabled ? undefined : onPress}
      {...rest}
    >
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
}
