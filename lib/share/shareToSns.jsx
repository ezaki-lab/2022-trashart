import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
  TwitterIcon,
} from 'react-share';

const ShareToSns = () => {
  return (
    <section className="mt-8">
      <div className="px-10 flex flex-row justify-around">
        <FacebookShareButton>
          <FacebookIcon size="3rem" round />
        </FacebookShareButton>

        <TwitterShareButton>
          <TwitterIcon size="3rem" round />
        </TwitterShareButton>

        <LineShareButton>
          <LineIcon size="3rem" round />
        </LineShareButton>

        <HatenaShareButton
          windowWidth={660}
          windowHeight={460}
        >
          <HatenaIcon size="3rem" round />
        </HatenaShareButton>
      </div>

      <div className="flex flex-col items-center">
        <input
          type="button"
          value="完成"
          className="mt-4 px-20 py-3 text-white text-xl font-bold bg-sharing-500 rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default ShareToSns;
