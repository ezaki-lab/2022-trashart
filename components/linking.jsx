import Link from 'next/link';
import url from '../utils/url';

const Linking = ({ href, className = '', rootHref = '', children }) => {
  if (rootHref === '') {
    return (
      <Link
        href={href}
        as={url(href)}
      >
        <a className={className !== '' ? className : null}>
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
        <a className={className !== '' ? className : null}>
          {children}
        </a>
      </Link>
    );
  }
};

export default Linking;
