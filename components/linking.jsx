import Link from 'next/link';
import url from '../utils/url';

const Linking = ({ href, rootHref = "", children }) => {
  if (rootHref === "") {
    return (
      <Link
        href={href}
        as={url(href)}
      >
        <a>
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <Link
        href={href}
        as={url(rootHref)}
        passHref
      >
        <a>
          {children}
        </a>
      </Link>
    );
  }
};

export default Linking;
