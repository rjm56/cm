import { bool } from "prop-types";

export const MenuSvg = ({ isOpen }) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 86 405"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Icon-/-Overflow-menu"
        transform="translate(-213.000000, -54.000000)"
        fill={isOpen ? "#ffffff" : "#2A2941"}
      >
        <path
          d="M256,373 C279.748244,373 299,392.251756 299,416 C299,439.748244 279.748244,459 256,459 C232.251756,459 213,439.748244 213,416 C213,392.251756 232.251756,373 256,373 Z M256,213 C279.748244,213 299,232.251756 299,256 C299,279.748244 279.748244,299 256,299 C232.251756,299 213,279.748244 213,256 C213,232.251756 232.251756,213 256,213 Z M256.5,54 C279.972102,54 299,73.0278981 299,96.5 C299,119.972102 279.972102,139 256.5,139 C233.027898,139 214,119.972102 214,96.5 C214,73.0278981 233.027898,54 256.5,54 Z"
          id="Icon"
        />
      </g>
    </g>
  </svg>
);

MenuSvg.propTypes = {
  isOpen: bool,
};
