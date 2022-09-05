import useSession from '../../hooks/useSession';

const Camera = () => {
  const { setSection } = useSession();

  const handleClick = () => {
    setSection('result');
  };

  return (
    <>
      カメラの内容
      <button onClick={handleClick}>resultに行く</button>
    </>
  );
};

export default Camera;
