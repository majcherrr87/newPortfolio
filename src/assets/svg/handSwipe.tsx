// icon:gesture-swipe | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import styled from 'styled-components';

export function HandSwipe() {
  return (
    <SVG
      fill="#fff"
      width="30px"
      height="30px"
      viewBox="0 0 1000 1000"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
            {' '}
            <path d="M766.2,4545.5L303.7,4083l474.7-474.7l472.7-472.7l122.2,122.2l122.2,122.2l-264.9,264.9l-264.9,264.9h1238.7h1236.7V4083v173.2H2204.6H965.9l260.8,260.8l258.8,258.8l-118.2,118.2C1302.1,4957,1245,5010,1241,5010C1234.8,5010,1020.9,4802.2,766.2,4545.5z" />{' '}
            <path d="M8626.6,4887.8l-122.2-122.2l254.7-254.7l254.7-254.7H7785.2H6558.6V4083v-173.2h1236.7h1238.8l-264.9-264.9l-264.9-264.9l122.2-122.2l122.2-122.2l472.7,472.7l474.7,474.7l-462.5,462.5c-254.7,256.7-468.6,464.5-474.7,464.5C8752.9,5010,8693.8,4955,8626.6,4887.8z" />{' '}
            <path d="M5173.2,4054.4L4837,3858.9l-6.1-423.8c-2-232.3-8.2-421.7-14.3-421.7c-4.1,0-79.5,40.7-165,91.7c-83.5,50.9-165,91.7-177.3,91.7c-14.3,0-171.1-85.6-350.4-189.5l-326-189.5l-10.2-1821.5c-8.1-1318.2-16.3-1811.3-32.6-1790.9c-12.2,16.3-130.4,218-264.9,452.3L3247.8,79.4l-403.4-4.1L2439,69.2l-191.5-334.2c-108-185.4-191.5-350.4-185.4-366.7c4.1-18.3,158.9-295.4,346.4-617.3l338.2-584.7l101.9-493l99.8-493l592.9-592.9l592.9-592.9v-393.2V-4790h173.2h173.2v462.5v464.5l-605.1,605.1l-603.1,603l-99.8,474.7l-97.8,472.7l-315.8,546L2443-613.3l95.8,173.2l97.8,173.2h203.7h205.8l517.5-898.5c285.2-495.1,529.7-914.8,544-933.1c20.4-26.5,24.4,470.7,26.5,2341V2616l171.1,97.8l171.1,95.8l169.1-97.8l171.1-97.8l6.1-1440.4l4.1-1440.5H5000h173.2v1962v1962l173.2,97.8l173.2,97.8l173.2-99.8l173.2-97.8v-1960v-1962h173.2h171.2l6.1,248.6l6.1,248.6l169.1,97.8l169.1,97.8l185.4-97.8l183.4-95.8l-12.2-248.6L6905-266.9h173.2h173.2v171.2V75.4l177.3,101.9l177.3,101.9l93.7-53c50.9-28.5,126.3-73.3,169.1-99.8l75.4-46.9V-988.2v-1065.6l-346.4-922.9l-346.4-922.9v-444.2V-4790h173.2h173.2v411.6v409.5l346.4,925l346.4,922.9v1200v1200l-340.3,197.6l-342.3,197.6l-71.3-38.7c-38.7-22.4-118.2-67.2-177.3-99.8l-106-59.1l-338.2,169.1c-185.4,91.7-344.3,167.1-354.5,167.1c-10.2,0-89.6-40.8-173.2-91.7c-85.6-50.9-160.9-91.7-165-91.7c-6.1,0-12.2,725.3-14.3,1613.6l-6.1,1613.6l-275,158.9c-150.8,87.6-307.7,177.2-346.4,197.6l-71.3,36.7L5173.2,4054.4z" />{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </SVG>
  );
}

const SVG = styled.svg`
  font-size: 5rem;
  animation: moveStyled 3s ease infinite;
  @keyframes moveStyled {
    0%,
    100% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(15deg) translateX(10px);
    }
    66% {
      transform: rotate(-15deg) translateX(-10px);
    }
  }

  @media (max-width: ${({ theme }) => theme.size.sm}) {
    font-size: 3rem;
  }
`;
