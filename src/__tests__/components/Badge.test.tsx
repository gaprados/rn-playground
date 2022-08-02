import { render } from "@testing-library/react-native";
import { Badge } from "../../components/Badge";

describe("Badges", () => {
  test("should render", () => {
    const { getByText } = render(<Badge>Badge</Badge>);
    const badge = getByText(/badge/i);

    expect(badge).toBeTruthy();
  });

  test("should have custom color", () => {
    const { getByTestId } = render(
      <Badge testID="badge" color="red">
        Badge
      </Badge>
    );
    const badge = getByTestId("badge");
    const backgroundColor = badge.props.style[0].backgroundColor;
    const borderColor = badge.props.style[0].borderColor;

    expect(backgroundColor).toEqual("#FCE7E7");
    expect(borderColor).toEqual("#F29999");
  });
});
