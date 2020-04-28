import { shallow } from "enzyme";
import { CardMenu } from "./index";
import { Dropdown } from "../../atoms/Dropdown";

describe("CardMenu", () => {
  it("should render the Dropdown component", () => {
    const component = shallow(<CardMenu />);
    expect(component.find(Dropdown)).toExist();
  });
});
