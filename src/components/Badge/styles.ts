import styled from "@emotion/native";

const COLORS = {
  default: {
    background: "#DFE7EE",
  },
  red: {
    background: "#FCE7E7",
    border: "#F29999",
  },
  green: {
    background: "#EAF2ED",
    border: "#58B6A7",
  },
};

export const BadgeContainer = styled.View<{
  color: "red" | "green" | "default";
}>`
  padding: 2px 8px;
  background: ${(props) => COLORS[props.color].background};
  border: ${(props) =>
    props.color !== "default"
      ? `1px solid ${COLORS[props.color].border}`
      : "none"};
`;
