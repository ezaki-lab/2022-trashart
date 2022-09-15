const MyAlbum = () => {
  const imgs = [
    'cf66b6f3171748223635a5e5',
    '2bb3758df7c1b66c633e7609',
    '5b46e3aa305acee647f297ee',
    'bfda8bde91dbb8656c534669',
    'cf66b6f3171748223635a5e5',
    '2bb3758df7c1b66c633e7609'
  ];

  return (
    <section className="w-full h-screen text-white bg-none">
      <svg
        viewBox="0 0 1440 217"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full flip-horizontally"
      >
        <path d="m1135.8 0.019531c-55.781 0.32109-115.78 4.7977-175.78 16.91-160 31.7-320 117.7-480 144-160 26.7-320-5.3008-400-21.301l-80-16v93.371h1440v-189.37l-80-10.699c-50-6.4375-131.25-17.445-224.22-16.91z" fill="rgb(0, 214, 200)" />
        <path d="m1338.6 31.385c-70.783 0.02917-152 4.6109-239.36 18.68-199.32 31.61-430.71 112.78-626.83 139.46-196.37 27.046-358.07 0.51628-438.92-12.748l-33.518-5.498v45.721h1440v-182.62c-30.61-1.7601-64.487-3.0093-101.37-2.9941z" fill="rgb(255, 255, 255)" strokeWidth="1.0101" />
        <path d="m1231 103.45c-45.601 0.33423-94.135 2.604-144.84 7.7305-202.44 20.001-439.6 85.702-638.58 101.16-199.24 15.793-360.94-17.817-441.79-34.621l-5.7598-1.1973v40.479h1440v-102.37c-57.863-6.376-128.91-11.767-209.03-11.18z" fill="rgb(0, 214, 200)" strokeWidth="0.99241" />
      </svg>

      <div className="p-5 pt-10 pb-20 w-full bg-album-500 grid grid-cols-2 gap-8">
        {imgs.map((img) =>
          <Item key={img} id={img} />
        )}
      </div>
    </section>
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

export default MyAlbum;
