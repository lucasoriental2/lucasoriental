import { Tooltip } from "react-tooltip";

export default function ProfessionalStarIconSvg({ size, outColor, inColor }) {

  return (
    <>
      <Tooltip id="my-tooltip-skill" />
      <svg
        data-tooltip-id="my-tooltip-skill"
        data-tooltip-content="Obtained by through professional experience"
        className="professional-Skill-star"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill={outColor} />
        <path
          d="M9.99992 3.33331L11.4967 7.93987H16.3403L12.4217 10.7869L13.9185 15.3934L9.99992 12.5464L6.08135 15.3934L7.57811 10.7869L3.65954 7.93987H8.50316L9.99992 3.33331Z"
          fill={inColor}
        />
      </svg>
    </>
  );
}
