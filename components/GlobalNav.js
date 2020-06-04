import Link from 'next/link';

import GlobalNavStyles from './styles/GlobalNavStyles';
import GlobalNavLink from './nav/GlobalNavLink';

const GlobalNav = () => {
  return (
    <div className="global-nav-block">
      <GlobalNavStyles className="global-nav">
        <li>
          <GlobalNavLink labelText="Home" path="/" extraClasses="nav-home" />
        </li>
        <li>
          <GlobalNavLink
            labelText="Foods A&ndash;Z"
            path="/directory"
            extraClasses="nav-directory"
          />
        </li>
        <li>
          <GlobalNavLink
            labelText="About"
            path="/about"
            extraClasses="nav-about"
          />
        </li>
      </GlobalNavStyles>
    </div>
  );
};

export default GlobalNav;
