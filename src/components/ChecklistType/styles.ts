import styled from "@emotion/native";

type StatusTypes = {
  status: "draft" | "pending" | "in_progress" | "done";
};

// TODO: Ajustar para cores do tema
const COLORS = {
  draft: {
    background: "pink",
    border: "red",
  },
  pending: {
    background: "lightgray",
    border: "grey",
  },
  in_progress: {
    background: "lightyellow",
    border: "orange",
  },
  done: {
    background: "lightgreen",
    border: "green",
  },
};

export const ChecklistTypeContainer = styled.Pressable<StatusTypes>`
  margin: 0 8px;
  padding: 16px;
  width: 140px;
  background: ${(props) => COLORS[props.status].background};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid ${(props) => COLORS[props.status].border};
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 24px;
  font-weight: 700;
`;

export const StatusContainer = styled.View`
  flex-direction: column;
`;

export const StatusType = styled.Text`
  font-weight: 700;
`;

export const StatusDate = styled.Text`
  font-weight: 400;
`;
