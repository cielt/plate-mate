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
    background: #fafafa;
    padding: 1rem;
  }
`;

const HomeLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.black};

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.grey};

    .branding {
      width: 60px;
      height: 36px;
      color: ${(props) => props.theme.black};
      background: url('/logo-plate-mate.svg') transparent no-repeat center
        center;
      background-size: contain;
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
