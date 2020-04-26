import { shallow } from "enzyme";
import Title from "./index";

describe("Tests", () => {
  it("runs tests", () => {
    const component = shallow(<Title />);
    expect(true).toEqual(true);
    expect(component).toExist();
  });
});
