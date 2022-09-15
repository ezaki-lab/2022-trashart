const Wave = ({ fillColor, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={className}
    >
      <path
        fill={fillColor}
        fillOpacity="1"
        d="M0,192L80,208C160,224,320,256,480,229.3C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  );
};

export default Wave;
