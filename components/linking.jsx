import Link from 'next/link';

const Linking = ({ href, children }) => {
  return (
    <Link
      href={href}
      as={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}${href}`}
    >
      <a>
        {children}
      </a>
    </Link>
  );
};

export default Linking;