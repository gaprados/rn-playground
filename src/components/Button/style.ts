import styled from "@emotion/native";

const COLORS = {
  red: "#E53333",
  green: "#58B6A7",
  grey: "#CBCBCB",
};

export const ButtonContainer = styled.TouchableOpacity<{
  variant: "filled" | "ghost";
  color: "red" | "green" | "grey";
}>`
  width: 100%;
  align-items: center;
  background-color: ${(props) => COLORS[props.color]};
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;
