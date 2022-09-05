import useSession from '../../hooks/useSession';

const Result = () => {
  const { setSection } = useSession();

  const handleClick = () => {
    setSection('camera');
  };

  return (
    <>
      カメラの内容
      <button onClick={handleClick}>cameraに行く</button>
    </>
  );
};

export default Result;
