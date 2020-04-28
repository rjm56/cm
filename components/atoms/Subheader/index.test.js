import { shallow } from "enzyme";
import { Subheader } from ".";
import { Copy } from "../Typography";

describe("Subheader", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Subheader subheader="test subheader" />);
  });

  it("should render with the correct subheader text", () => {
    expect(component.text()).toContain("test subheader");
  });

  it("should pass that it should render as an h3 tag", () => {
    expect(component.find(Copy).prop("as")).toEqual("h3");
  });
});
