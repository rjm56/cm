import { shallow } from "enzyme";
import { Card } from "./index";
import { CardHeader } from "../../atoms/CardHeader";
import { Subheader } from "../../atoms/Subheader";
import { CardMedia } from "../../molecules/CardMedia";
import { CardDescription } from "../../atoms/CardDescription";
import { FavouriteIcon } from "../../atoms/FavouriteIcon";
import { CardMenu } from "../../molecules/CardMenu";

describe("Card", () => {
  const defaultProps = {
    header: "test heading",
    subheader: "test subheader",
  };

  it("should render with only a heading and subheading as default", () => {
    const component = shallow(<Card {...defaultProps} />);

    expect(component.find(CardHeader)).toExist();
    expect(component.find(CardHeader).prop("children")).toEqual(
      defaultProps.header
    );

    expect(component.find(Subheader)).toExist();
    expect(component.find(Subheader).prop("subheader")).toEqual(
      defaultProps.subheader
    );
  });

  it("should render the CardMedia if a media prop is passed", () => {
    const mockProps = {
      ...defaultProps,
      media: { type: "img", src: "www.image.com", alt: "test alt text" },
    };

    const component = shallow(<Card {...mockProps} />);
    const cardMedia = component.find(CardMedia);

    expect(cardMedia).toExist();
    expect(cardMedia.prop("type")).toEqual(mockProps.media.type);
    expect(cardMedia.prop("src")).toEqual(mockProps.media.src);
    expect(cardMedia.prop("alt")).toEqual(mockProps.media.alt);
  });

  it("should render the CardDescription if a description is passed", () => {
    const mockProps = {
      ...defaultProps,
      description: "test description",
    };

    const component = shallow(<Card {...mockProps} />);

    expect(component.find(CardDescription)).toExist();
    expect(component.find(CardDescription).prop("children")).toEqual(
      mockProps.description
    );
  });

  it("should render the FavouriteIcon if includeFavourite is true", () => {
    const mockProps = {
      ...defaultProps,
      includeFavourite: true,
    };

    const component = shallow(<Card {...mockProps} />);

    expect(component.find(FavouriteIcon)).toExist();
  });

  it("should render the CardMenu if includeMenu is true", () => {
    const mockProps = {
      ...defaultProps,
      includeCardMenu: true,
    };

    const component = shallow(<Card {...mockProps} />);

    expect(component.find(CardMenu)).toExist();
  });
});
