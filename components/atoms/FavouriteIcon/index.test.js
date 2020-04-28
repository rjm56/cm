import { shallow } from "enzyme";
import { FavouriteIcon } from ".";
import { FavouriteSvg } from "./favouriteSvg";
import { Wrapper } from "./styles";

describe("FavouriteIcon", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FavouriteIcon />);
  });

  it("should render the un-favourited FavouriteSvg by default", () => {
    expect(component.find(FavouriteSvg)).toExist();
    expect(component.find(FavouriteSvg).prop("isFavourited")).toEqual(false);
  });

  it("should favourite the FavouriteSvg onClick of the icon", () => {
    component.find(Wrapper).simulate("click");
    expect(component.find(FavouriteSvg).prop("isFavourited")).toEqual(true);
  });

  it("should un-favourite the FavouriteSvg onClick when already favourited", () => {
    component.find(Wrapper).simulate("click");
    component.find(Wrapper).simulate("click");

    expect(component.find(FavouriteSvg).prop("isFavourited")).toEqual(false);
  });
});
