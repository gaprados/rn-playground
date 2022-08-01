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
}

export function ChecklistType({
  icon,
  title,
  status,
  statusDate,
}: CheckListTypeProps) {
  // TODO: Validar chaves desse formato de object mapping
  const statusType = {
    draft: "Rascunho",
    pending: "Não iniciado",
    in_progress: "Em andamento",
    done: "Concluído",
  };

  return (
    <ChecklistTypeContainer status={status}>
      {icon}
      <Title>{title}</Title>
      <StatusContainer>
        <StatusType>{statusType[status]}</StatusType>
        <StatusDate>{statusDate ?? "-"}</StatusDate>
      </StatusContainer>
    </ChecklistTypeContainer>
  );
}
