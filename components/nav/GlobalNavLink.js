import Link from 'next/link';
import { withRouter } from 'next/router';

const GlobalNavLink = ({ labelText, path, extraClasses, router }) => {
  return (
    <Link href={path}>
      <a
        className={`global-nav-link ${
          router.pathname === path ? 'active' : ''
        } ${extraClasses}`}
      >
        {labelText}
      </a>
    </Link>
  );
};

export default withRouter(GlobalNavLink);
