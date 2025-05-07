import React from "react";

const PaletteIcon = ({
  width = 24,
  height = 24,
  stroke = "#fff",
  strokeWidth = 1.5,
  ...props
}) => {
  return (
    <svg
      id="Color palette"
      width="24"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.18555 18.0002C3.18555 19.9335 4.75203 21.5 6.68533 21.5C8.61863 21.5 10.1851 19.9335 10.1851 18.0002V6.99978C10.1851 5.06649 8.61863 3.5 6.68533 3.5C4.75203 3.5 3.18555 5.06649 3.18555 6.99978V18.0002Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9.16016 20.4763L17.8109 11.8266C19.1769 10.4596 19.1769 8.24313 17.8109 6.8761C16.4438 5.51005 14.2274 5.51005 12.8604 6.8761L10.1857 9.55178"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6.68555 21.4999L17.6856 21.4996C19.6189 21.4996 21.1854 19.9331 21.1854 17.9998C21.1854 16.0665 19.6189 14.5 17.6856 14.5H15.1355"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6.68603 18.0425V18.0793M6.83517 18.0504C6.83517 18.1332 6.76796 18.2004 6.68512 18.2004C6.60228 18.2004 6.53516 18.1332 6.53516 18.0504C6.53516 17.9675 6.60228 17.9004 6.68512 17.9004C6.76796 17.9004 6.83517 17.9675 6.83517 18.0504Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default PaletteIcon;
