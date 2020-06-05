import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/Router';
import NProgress from 'nprogress';

import GlobalNav from './GlobalNav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const PageHeaderBar = styled.div`
  .logo-bar {
    background: ${(props) => props.theme.oatmeal};
    padding: 1rem;
  }
`;

const HomeLogo = styled.div`
  font-size: 3.2rem;
  font-weight: bold;

  a {
    display: block;
    text-align: center;
    color: ${(props) => props.theme.black};

    .branding {
      min-width: 120px;
      height: 80px;
      color: ${(props) => props.theme.black};
    }

    .branding:after {
      content: '🍽';
      display: block;
      font-size: 6rem;
      line-height: normal;
      text-align: center;
    }
  }
`;

// nprogress needs .bar
const Header = () => {
  return (
    <PageHeaderBar className="page-header-bar bar">
      <div className="logo-bar">
        <HomeLogo>
          <Link href="/">
            <a className="home-logo">
              <span className="branding"></span>
              <span className="logo-label">MyPlate Mate</span>
            </a>
          </Link>
        </HomeLogo>
      </div>
      <div className="global-nav-wrap">
        <GlobalNav />
      </div>
    </PageHeaderBar>
  );
};

export default Header;
