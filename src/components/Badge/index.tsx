import { ReactNode } from "react";
import { Text, View } from "react-native";
import { BadgeContainer } from "./styles";

interface BadgeProps {
  children: ReactNode;
  testID?: string;
  color?: "red" | "green" | "default";
}

export function Badge({ children, testID, color = "default" }: BadgeProps) {
  return (
    <BadgeContainer color={color} testID={testID}>
      <Text>{children}</Text>
    </BadgeContainer>
  );
}
