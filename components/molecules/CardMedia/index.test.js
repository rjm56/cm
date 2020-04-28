import { shallow } from "enzyme";
import { CardMedia } from ".";
import { Video } from "../../atoms/Video";
import { BackgroundImage } from "../../atoms/BackgroundImage";

describe("CardMedia", () => {
  const props = {
    src: "test source",
    alt: "test alt",
  };

  it('should render the Video component if a type of "video/mp4" is passed', () => {
    const mockProps = {
      ...props,
      type: "video/mp4",
    };

    const component = shallow(<CardMedia {...mockProps} />);
    const video = component.find(Video);

    expect(video).toExist();
    expect(video.prop("src")).toEqual(mockProps.src);
    expect(video.prop("title")).toEqual(mockProps.alt);
  });

  it('should render the BackgroundImage component if a type of "img" is passed', () => {
    const mockProps = {
      ...props,
      type: "img",
    };

    const component = shallow(<CardMedia {...mockProps} />);
    const backgroundImage = component.find(BackgroundImage);

    expect(backgroundImage).toExist();
    expect(backgroundImage.prop("source")).toEqual(mockProps.src);
    expect(backgroundImage.prop("aria-label")).toEqual(mockProps.alt);
  });

  it('should render the BackgroundImage component if a type of "svg" is passed', () => {
    const mockProps = {
      ...props,
      type: "svg",
    };

    const component = shallow(<CardMedia {...mockProps} />);
    const backgroundImage = component.find(BackgroundImage);

    expect(backgroundImage).toExist();
    expect(backgroundImage.prop("source")).toEqual(mockProps.src);
    expect(backgroundImage.prop("aria-label")).toEqual(mockProps.alt);
  });
});
