import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

function IconBxlReact() {
  const iconRef = useRef(null);

  useEffect(() => {
    if (!iconRef.current) return;

    gsap.set(iconRef.current, {
      rotation: 0,
      transformOrigin: '50% 50%',
    });

    const rotation = gsap.to(iconRef.current, {
      rotation: '+=360',
      duration: 10,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
      overwrite: true,
    });

    // eslint-disable-next-line consistent-return
    return () => {
      rotation.kill();
    };
  }, []);

  return (
    <ReactIcon
      ref={iconRef}
      width="64"
      height="57"
      viewBox="0 0 64 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.8973 18.2021C51.2425 17.9768 50.564 17.7635 49.8654 17.5618C49.9802 17.0932 50.0856 16.6307 50.1793 16.176C51.7174 8.70979 50.7118 2.69499 47.2777 0.71466C43.9849 -1.18421 38.5997 0.795666 33.1609 5.52886C32.6379 5.984 32.1135 6.46588 31.5892 6.97091C31.2399 6.63677 30.8912 6.31387 30.5433 6.00501C24.8433 0.943972 19.13 -1.18882 15.6993 0.797239C12.4096 2.70162 11.4354 8.35611 12.8199 15.4319C12.9536 16.1153 13.1099 16.8132 13.2866 17.5229C12.478 17.7524 11.6974 17.9971 10.9505 18.2574C4.26783 20.5873 0 24.2387 0 28.0263C0 31.938 4.58152 35.8616 11.542 38.2407C12.0913 38.4284 12.6613 38.606 13.2486 38.7745C13.058 39.542 12.8921 40.2941 12.7529 41.0276C11.4328 47.9806 12.4637 53.5015 15.7447 55.3938C19.1336 57.3481 24.8211 55.3393 30.3593 50.4983C30.797 50.1156 31.2363 49.7098 31.6764 49.2844C32.2468 49.8337 32.8163 50.3536 33.3828 50.8412C38.7472 55.4574 44.0454 57.3215 47.3233 55.4238C50.7088 53.4639 51.8091 47.5332 50.3807 40.3174C50.2716 39.7663 50.1446 39.2033 50.002 38.6303C50.4014 38.5123 50.7936 38.3904 51.1759 38.2636C58.412 35.8661 63.12 31.9903 63.12 28.0263C63.12 24.225 58.7145 20.549 51.8973 18.2021ZM50.3279 35.7041C49.9827 35.8184 49.6286 35.9288 49.2677 36.0359C48.4689 33.5069 47.3907 30.8178 46.0714 28.0394C47.3304 25.3272 48.3668 22.6724 49.1433 20.1599C49.789 20.3467 50.4157 20.5438 51.0196 20.7518C56.8606 22.7625 60.4235 25.7355 60.4235 28.0263C60.4235 30.4663 56.5757 33.6339 50.3279 35.7041ZM47.7354 40.8411C48.3671 44.0318 48.4573 46.9166 48.0389 49.1717C47.663 51.1981 46.9069 52.5492 45.9722 53.0903C43.983 54.2416 39.7291 52.745 35.1414 48.7971C34.6154 48.3446 34.0857 47.8614 33.5543 47.3499C35.3328 45.4048 37.1103 43.1434 38.8452 40.632C41.8966 40.3612 44.7794 39.9186 47.3938 39.3142C47.5225 39.8336 47.6369 40.343 47.7354 40.8411ZM21.519 52.8913C19.5756 53.5776 18.0277 53.5973 17.092 53.0578C15.101 51.9094 14.2733 47.4767 15.4023 41.5305C15.5316 40.8495 15.6856 40.15 15.863 39.435C18.4487 40.0068 21.3104 40.4182 24.3691 40.6662C26.1156 43.1237 27.9445 45.3825 29.7875 47.3604C29.3849 47.7491 28.9838 48.1192 28.5849 48.4679C26.1359 50.6086 23.6818 52.1274 21.519 52.8913ZM12.4141 35.6892C9.33629 34.6372 6.79453 33.27 5.05228 31.7781C3.48676 30.4374 2.69635 29.1063 2.69635 28.0263C2.69635 25.7279 6.123 22.7962 11.838 20.8037C12.5315 20.5619 13.2574 20.334 14.0107 20.12C14.8006 22.6893 15.8367 25.3755 17.0871 28.0919C15.8205 30.8486 14.7697 33.5776 13.9721 36.177C13.435 36.0226 12.9147 35.8602 12.4141 35.6892ZM15.4661 14.914C14.2799 8.8517 15.0677 4.27849 17.0502 3.13092C19.1619 1.90841 23.8314 3.65145 28.7529 8.02141C29.0675 8.30072 29.3833 8.59306 29.7 8.89551C27.8661 10.8647 26.0539 13.1066 24.3229 15.5496C21.3543 15.8248 18.5127 16.2668 15.9 16.8586C15.7358 16.1979 15.5903 15.5487 15.4661 14.914ZM42.6933 21.6371C42.0687 20.5583 41.4275 19.505 40.7738 18.4804C42.7877 18.735 44.7173 19.073 46.5293 19.4866C45.9853 21.23 45.3073 23.053 44.5091 24.9217C43.9366 23.8347 43.331 22.7387 42.6933 21.6371ZM31.5901 10.8226C32.8339 12.17 34.0794 13.6744 35.3045 15.3067C34.07 15.2484 32.8201 15.2181 31.56 15.2181C30.3118 15.2181 29.0712 15.2477 27.8443 15.305C29.0706 13.6879 30.3269 12.1855 31.5901 10.8226ZM20.4158 21.6558C19.7919 22.7376 19.1976 23.8276 18.634 24.9197C17.8488 23.0575 17.177 21.2262 16.6283 19.458C18.4292 19.055 20.3497 18.7255 22.3508 18.4757C21.6879 19.5097 21.0414 20.571 20.4158 21.6558ZM22.4084 37.7692C20.3409 37.5385 18.3916 37.2259 16.5911 36.834C17.1486 35.0343 17.8352 33.1639 18.6371 31.2616C19.2021 32.3529 19.7988 33.4434 20.4265 34.5276C21.0659 35.6321 21.7285 36.7141 22.4084 37.7692ZM31.6647 45.42C30.3867 44.0411 29.1119 42.5158 27.867 40.8751C29.0755 40.9226 30.3077 40.9468 31.56 40.9468C32.8466 40.9468 34.1184 40.9178 35.3702 40.8621C34.1411 42.5324 32.9 44.06 31.6647 45.42ZM44.5348 31.1646C45.3785 33.0875 46.0897 34.9481 46.6544 36.7172C44.8243 37.1347 42.8483 37.471 40.7664 37.7208C41.4217 36.6825 42.0685 35.6111 42.704 34.509C43.347 33.394 43.9576 32.2774 44.5348 31.1646ZM40.3683 33.1619C39.3817 34.8727 38.3687 36.5059 37.3403 38.0475C35.4673 38.1814 33.5322 38.2504 31.56 38.2504C29.5957 38.2504 27.6851 38.1894 25.8452 38.0699C24.7754 36.5081 23.7404 34.8701 22.76 33.1766C21.7822 31.4877 20.8824 29.7846 20.067 28.091C20.8822 26.3934 21.7798 24.6884 22.752 23.0025L22.7518 23.0029C23.7265 21.3125 24.7524 19.6825 25.8124 18.1305C27.6896 17.9886 29.6145 17.9145 31.5599 17.9145C33.514 17.9145 35.4416 17.9891 37.3182 18.1323C38.3619 19.673 39.3809 21.2977 40.3595 22.9883C41.3492 24.6978 42.2583 26.3915 43.0805 28.0527C42.2608 29.7423 41.3537 31.4531 40.3683 33.1619ZM45.9308 3.0507C48.0445 4.26961 48.8665 9.1855 47.5385 15.6317C47.4538 16.0431 47.3584 16.462 47.2548 16.8866C44.6361 16.2824 41.7924 15.8327 38.8152 15.5534C37.0808 13.0836 35.2835 10.8382 33.4794 8.89428C33.9645 8.42768 34.4488 7.98276 34.9311 7.5629C39.5911 3.50752 43.9464 1.90639 45.9308 3.0507ZM31.56 22.3899C34.6728 22.3899 37.1964 24.9133 37.1964 28.0263C37.1964 31.1391 34.6728 33.6627 31.56 33.6627C28.4472 33.6627 25.9236 31.1391 25.9236 28.0263C25.9236 24.9133 28.4472 22.3899 31.56 22.3899Z"
        fill="#00D8FF"
      />
    </ReactIcon>
  );
}

const ReactIcon = styled.svg`
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 5rem;
  fill: #61dbfb;
  will-change: transform;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.size.sm}) {
    font-size: 3rem;
  }
`;

export default IconBxlReact;
