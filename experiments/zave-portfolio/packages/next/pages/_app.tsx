import './globals.css';
import type { AppType } from 'next/app';

const MainNavBar = () => {
  return (
    <header id='main-navbar'>
      <span id='navbar-title'>
        <span id='mini-navbar-root'>~/</span>
        <span id='full-navbar-root'>nick/portfolio/</span>
        <span id='current-location'>nick</span>
      </span>
      <span id='navbar-command' className='navbar-start-hidden'>
        <span id='full-navbar-command' className='navbar-command-text'>
          &nbsp;navigate&nbsp;
        </span>
        <span id='mini-navbar-command' className='navbar-command-text'>
          &nbsp;nav&nbsp;
        </span>
      </span>
      <nav id='navbar-links' className='navbar-start-hidden'>
        <ul>
          <li id='home-link'>
            <a href='#home'>home</a>
          </li>
          <li id='about-link'>
            <a href='#about'>about</a>
          </li>
          <li id='projects-link'>
            <a href='#projects'>projects</a>
          </li>
          <li id='contact-link'>
            <a href='#contact'>contact</a>
          </li>
        </ul>
      </nav>
      <span id='blinking-cursor'>▯</span>
    </header>
  );
};

const Header = () => {
  return (
    <head>
      <title>Json Doe</title>
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='./images/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='./images/favicon-16x16.png'
      />
      <link rel='stylesheet' href='./styles/index.css' />
      <link rel='stylesheet' href='./styles/navbar.css' />
    </head>
  );
};

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <div id='scripted-page'>
        <MainNavBar />
        <div id='page-content'>
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default MyApp;
