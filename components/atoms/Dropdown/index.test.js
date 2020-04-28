import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { findDOMNode } from "react-dom";
import { ThemeProvider } from "styled-components";
import { MenuTrigger, MenuItems, MenuItem } from "./styles";
import { Dropdown } from ".";
import { theme } from "../../../constants/theme";

describe("Dropdown", () => {
  const renderMenuIcon = jest.fn(() => <div id="icon">Icon</div>);
  const options = [
    { id: "1", label: "test option 1" },
    { id: "2", label: "test option 2" },
  ];
  let component;
  const onSelect = jest.fn();

  const mockProps = {
    renderMenuIcon,
    options,
    onSelect,
  };

  describe("rendering the dropdown", () => {
    beforeEach(() => {
      component = shallow(<Dropdown {...mockProps} />);
    });

    it("should render the MenuTrigger button by default", () => {
      expect(component.find(MenuTrigger)).toExist();
    });

    it("should call renderMenuIcon and render the menu icon that has been passed", () => {
      expect(renderMenuIcon).toHaveBeenCalled();
      expect(component.find("#icon")).toExist();
    });

    it("should show the dropdown options that have been passed onClick of the MenuTrigger", () => {
      component.find(MenuTrigger).simulate("click");
      expect(component.find(MenuItems)).toExist();
      expect(component.find(MenuItem).length).toEqual(options.length);
    });

    options.forEach((option, index) => {
      it(`should pass the correct label to option ${option.label}`, () => {
        component.find(MenuTrigger).simulate("click");
        expect(component.find(MenuItem).at(index).text()).toEqual(option.label);
      });
    });

    describe("selecting a MenuItem", () => {
      let selectedMenuItem;
      beforeEach(() => {
        component.find(MenuTrigger).simulate("click");
        selectedMenuItem = component.find(MenuItem).at(0);
      });

      it("should call handleSelectItem with the correct key onClick of a MenuItem", () => {
        selectedMenuItem.simulate("click");
        expect(onSelect).toHaveBeenCalledTimes(1);
        expect(onSelect).toHaveBeenCalledWith(options[0].id);
      });

      it("should close the dropdown when a MenuItem has been selected", () => {
        selectedMenuItem.simulate("click");
        expect(component.find(MenuItems)).not.toExist();
      });
    });
  });

  it("should close the dropdown when clicking outside of the element", () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const mountedComponent = mount(
      <ThemeProvider theme={theme}>
        <Dropdown {...mockProps} />
      </ThemeProvider>
    );

    act(() => {
      mountedComponent.find(MenuTrigger).simulate("click");
    });
    mountedComponent.update();

    expect(mountedComponent.find(MenuItems)).toExist();

    act(() => {
      map.mousedown({
        target: findDOMNode(mountedComponent.instance()),
      });
    });
    mountedComponent.update();

    expect(mountedComponent.find(MenuItems)).not.toExist();
  });
});
