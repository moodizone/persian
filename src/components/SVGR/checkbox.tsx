import * as React from "react";

function Checkbox({ color = "#6B6B6B", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.25"
        width="23.5"
        height="23.5"
        rx="3.75"
        fill="#E3E3E3"
      />
      <rect
        x="0.25"
        y="0.25"
        width="23.5"
        height="23.5"
        rx="3.75"
        stroke="#E3E3E3"
        stroke-width="0.5"
      />
      <path
        d="M9.49984 20.3333H14.4998C18.6665 20.3333 20.3332 18.6666 20.3332 14.5V9.49996C20.3332 5.33329 18.6665 3.66663 14.4998 3.66663H9.49984C5.33317 3.66663 3.6665 5.33329 3.6665 9.49996V14.5C3.6665 18.6666 5.33317 20.3333 9.49984 20.3333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4585 12.0001L10.8168 14.3584L15.5418 9.64172"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Checkbox;
