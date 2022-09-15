import Wave from '../../components/wave';

const Social = () => {
  const imgs = [
    'cf66b6f3171748223635a5e5',
    '2bb3758df7c1b66c633e7609',
    '5b46e3aa305acee647f297ee',
    'bfda8bde91dbb8656c534669',
    'cf66b6f3171748223635a5e5',
    '2bb3758df7c1b66c633e7609'
  ];

  return (
    <section className="-mt-10 pb-36 w-full h-screen text-white bg-none">
      <Waves />

      <div className="p-5 w-full bg-album-500 grid grid-cols-2 gap-8">
        {imgs.map((img) =>
          <Item key={img} id={img} />
        )}
      </div>
    </section>
  );
};

const Waves = () => {
  return (
    <div className="w-full h-[5.6rem] overflow-hidden relative">
      <Wave
        fillColor="rgb(0, 214, 200)"
        className="w-full absolute top-0 left-0"
      />
      <Wave
        fillColor="rgb(255, 255, 255)"
        className="w-full rotate-3 absolute top-[1rem] left-0"
      />
      <Wave
        fillColor="rgb(0, 214, 200)"
        className="w-full rotate-1 absolute top-[1.5rem] left-0"
      />
    </div>
  );
};

const Item = ({ id }) => {
  return (
    <div className="w-full h-48 rounded-xl shadow-lg overflow-hidden">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/storage/arts/${id}/art.webp`}
        alt="作品"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Social;
