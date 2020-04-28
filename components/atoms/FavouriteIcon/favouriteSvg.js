import { bool } from "prop-types";

export const FavouriteSvg = ({ isFavourited = false }) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="UI-Exercise" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g
          transform="translate(-667.000000, -542.000000)"
          fill={isFavourited ? "#2A2941" : "none"}
          stroke="#2A2941"
        >
          <g transform="translate(642.000000, 245.000000)">
            <g transform="translate(24.000000, 296.000000)">
              <path
                d="M12.9311231,16.1006524 C12.8153862,16.1006524 12.6978957,16.0713122 12.5891732,16.0126316 L8.99782183,14.037664 C8.98905388,14.0321627 8.97677875,14.0321627 8.96801081,14.037664 L5.37665945,16.0126316 C5.12764973,16.1501642 4.8312931,16.1263252 4.60508005,15.953951 C4.37886701,15.7815769 4.26663728,15.4936754 4.31398419,15.2039401 L4.9996377,11.0211164 C5.00139129,11.0101137 4.99788411,10.9991111 4.99086975,10.9917761 L2.0851719,8.03024149 C1.8835091,7.82485953 1.81336552,7.52412165 1.89929141,7.24538898 C1.98697089,6.96665632 2.21318394,6.76677565 2.49025108,6.724599 L6.50597111,6.11395441 C6.51649264,6.11212064 6.52526059,6.10661934 6.52876777,6.09561673 L8.32444345,2.29054909 C8.44894831,2.02648656 8.69971161,1.86328125 8.98203952,1.86328125 C9.26436744,1.86328125 9.51513074,2.02648656 9.6396356,2.29054909 L11.4353113,6.09561673 C11.440572,6.10478557 11.44934,6.11212064 11.4581079,6.11395441 L15.473828,6.724599 C15.7526487,6.76677565 15.9788617,6.96665632 16.0647876,7.24538898 C16.1524671,7.52412165 16.0805699,7.82485953 15.8789071,8.03024149 L12.9767165,10.9936098 C12.9697021,11.0009449 12.9661949,11.0119475 12.9679485,11.0229501 L13.653602,15.2057739 C13.7009489,15.4955092 13.5887192,15.7815769 13.3625062,15.9557848 C13.2344941,16.0511407 13.0836854,16.1006524 12.9311231,16.1006524 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

FavouriteSvg.propTypes = { isFavourited: bool };
