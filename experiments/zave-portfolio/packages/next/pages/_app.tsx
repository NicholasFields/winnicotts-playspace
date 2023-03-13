import './globals.css';
import type { AppType } from 'next/app';
import { useTypewriter } from 'react-simple-typewriter';

const TypeWriterStuff = () => {
  const [text] = useTypewriter({
    words: ['home', 'about', 'projects', 'contact'],
    loop: 0,
  });

  return (
    <div className='App'>
      <span>{text}</span>
    </div>
  );
};

const TypeWrittenWord = ({ word = 'hello', loop = 1 }) => {
  const [text] = useTypewriter({ words: [word], loop });
  return <a href={`#${word}`}>{text}</a>;
};

const TypedWord = ({ word = 'hello', loop = 1 }) => {
  const [text] = useTypewriter({ words: [word], loop });
  return <span>{text}</span>;
};

// blinking cursor

const BlinkingCursor = ({ delaySpeed = 450 }) => {
  const [text] = useTypewriter({
    words: ['▮', '▯'],
    loop: 0,
    delaySpeed,
    typeSpeed: 0,
    deleteSpeed: 0,
  });
  return <span>{text}</span>;
};

const MainNavBar = () => {
  const [
    navigateTyped,
    { isType, isDelay, isDelete, isDone: isNavigateTyped },
  ] = useTypewriter({
    words: ['navigate'],
    loop: 1,
  });

  const navBarLinks = isNavigateTyped ? (
    <nav id='navbar-links'>
      <ul>
        <li id='home-link'>
          <>&nbsp;</>
          <a href='home'>home</a>
        </li>
        <li id='about-link'>
          <>&nbsp;</>
          <a href='about'>about</a>
        </li>
        <li id='projects-link'>
          <>&nbsp;</>
          <a href='projects'>projects</a>
        </li>
        <li id='contact-link'>
          <>&nbsp;</>
          <a href='contact'>contact</a>
        </li>
      </ul>
    </nav>
  ) : null;

  return (
    <header id='main-navbar'>
      <span id='navbar-title'>
        <span id='mini-navbar-root'>~/</span>
        <span id='full-navbar-root'>home/portfolio/</span>
        <span id='current-location'>nick{'>'}</span>
      </span>
      <span id='navbar-command'>
        <>&nbsp;</>
        {navigateTyped}
      </span>
      {navBarLinks}
      <BlinkingCursor />
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
