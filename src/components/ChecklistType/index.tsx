import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import {
  ChecklistTypeContainer,
  StatusContainer,
  StatusDate,
  StatusType,
  Title,
} from "./styles";

interface CheckListTypeProps {
  // FIXME: Ajustar tipagem com o formato dos ícones da aplicação
  icon: any;
  title: string;
  status: "draft" | "pending" | "in_progress" | "done";
  // FIXME: Ajustar (e possivelmente tratar) formato da data vindo do BE
  statusDate?: any;
  navigation?: NativeStackNavigationHelpers;
  destination: string;
}

export function ChecklistType({
  icon,
  title,
  status,
  statusDate,
  navigation,
  destination,
}: CheckListTypeProps) {
  // TODO: Validar chaves desse formato de object mapping
  const statusType = {
    draft: "Rascunho",
    pending: "Não iniciado",
    in_progress: "Em andamento",
    done: "Concluído",
  };

  function handlePress() {
    navigation?.navigate(destination);
  }

  return (
    <ChecklistTypeContainer status={status} onPress={handlePress}>
      {icon}
      <Title>{title}</Title>
      <StatusContainer>
        <StatusType>{statusType[status]}</StatusType>
        <StatusDate>{statusDate ?? "-"}</StatusDate>
      </StatusContainer>
    </ChecklistTypeContainer>
  );
}
