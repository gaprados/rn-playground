import React from "react";
import { TextInputProps } from "react-native";

import { InputContainer, TextFieldContainer, TextInput } from "./styles";

interface TextFieldProps extends TextInputProps {
  startIcon?: any;
  endIcon?: any;
}

/* TODO: Se o teclado não estiver fechando quando clicar fora do input, precisa envolver o app em:
 <ScrollView keyboardShouldPersistTaps="handled"> */

export function TextField({
  startIcon,
  endIcon,
  multiline,
  ...rest
}: TextFieldProps) {
  return (
    <TextFieldContainer isMultiline={multiline}>
      <InputContainer>
        {startIcon ? startIcon : null}
        <TextInput multiline={multiline} {...rest} />
      </InputContainer>
      {endIcon ? endIcon : null}
    </TextFieldContainer>
  );
}
