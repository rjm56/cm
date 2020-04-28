import { shallow } from "enzyme";
import { CardHeader } from ".";
import { Header } from "../Typography";

describe("CardHeader", () => {
  const testText = "test text";
  let component;
  let header;

  beforeEach(() => {
    component = shallow(<CardHeader>{testText}</CardHeader>);
    header = component.find(Header);
  });

  it("should render the Header component with the correct text", () => {
    expect(header.text()).toEqual(testText);
  });

  it("should pass shouldTruncate true with a line number of 2", () => {
    expect(header.prop("shouldTruncate")).toEqual(true);
    expect(header.prop("lineNo")).toEqual(2);
  });
});
