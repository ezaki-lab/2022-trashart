import Link from 'next/link';
import urlJoin from 'url-join';

const Linking = ({ href, children }) => {
  return (
    <Link
      href={href}
      as={urlJoin('/', process.env.NEXT_PUBLIC_ASSET_PREFIX, href)}
    >
      <a>
        {children}
      </a>
    </Link>
  );
};

export default Linking;
