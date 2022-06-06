import urlJoin from 'url-join';

const url = (path) => {
  return urlJoin(process.env.NEXT_PUBLIC_ASSET_PREFIX, path);
};

export default url;
