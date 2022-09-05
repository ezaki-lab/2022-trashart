import url from "../../utils/url";

const ShareToSns = () => {
  return (
    <div className="mt-8 px-10 flex flex-row justify-around">
      <button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url('/icons/Facebook.svg')}
          alt="Facebookロゴ"
          width="60rem"
        />
      </button>

      <button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url('/icons/Twitter.svg')}
          alt="Twitterロゴ"
          width="60rem"
        />
      </button>
    </div>
  );
};

export default ShareToSns;
