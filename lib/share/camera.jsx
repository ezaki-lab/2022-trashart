import WebCamera from '../webCamera/webCamera';

const Camera = () => {
  const takePhoto = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-2 w-full h-96 bg-black rounded-2xl relative overflow-hidden">
      <WebCamera facingMode="environment" />

      <button
        className="w-10 h-10 bg-gray-300 border-4 border-white rounded-full opacity-75 m-auto absolute inset-x-0 bottom-2"
        onClick={takePhoto}
      />
    </div>
  );
};

export default Camera;
