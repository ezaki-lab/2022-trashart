const CenterText = ({ children, className }) => {
  return (
    <div className={
      className === undefined
        ? "h-full flex flex-col justify-center items-center"
        : `${className} h-full flex flex-col justify-center`
    }>
      {children}
    </div>
  );
};

export default CenterText;
