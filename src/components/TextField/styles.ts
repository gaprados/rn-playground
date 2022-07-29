import styled from "@emotion/native";

export const TextFieldContainer = styled.View<{
  isMultiline?: boolean;
}>`
  padding: ${(props) => (props.isMultiline ? 0 : "8px 10px")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cbcbcb;
`;

export const TextInput = styled.TextInput<{ multiline?: boolean }>`
  padding: ${(props) => (props.multiline ? "8px 14px" : "0 14px")};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
