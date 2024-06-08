const XIconSvg = ({ width, height, strokeWidth, color }) => {
  return (
    <svg
      className="X-icon-svg"
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 35L34.8198 3.1802"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3.53552 3L35.3553 34.8198"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default XIconSvg;
