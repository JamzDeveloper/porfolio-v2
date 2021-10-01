import React from "react";

export const Moon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <path
        d="M29.2 26.72C26.5949 26.6906 24.0692 25.8191 22.0004 24.2357C19.9315 22.6522 18.4305 20.4419 17.7216 17.935C17.0127 15.428 17.134 12.759 18.0674 10.3266C19.0007 7.89429 20.696 5.82924 22.9 4.44C21.7864 4.15051 20.6406 4.00267 19.49 4C15.777 4 12.216 5.475 9.5905 8.1005C6.96499 10.726 5.48999 14.287 5.48999 18C5.48999 21.713 6.96499 25.274 9.5905 27.8995C12.216 30.525 15.777 32 19.49 32C21.5934 31.9981 23.6687 31.5161 25.5576 30.5907C27.4465 29.6653 29.0993 28.3209 30.39 26.66C29.9946 26.7002 29.5974 26.7202 29.2 26.72V26.72Z"
        fill="white"
      />
    </svg>
  );
};
