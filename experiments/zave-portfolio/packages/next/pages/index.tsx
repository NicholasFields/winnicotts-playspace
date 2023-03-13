import { useRouter } from 'next/router';
import { useTypewriter } from 'react-simple-typewriter';

const NickASCII = () => {
  const [text] = useTypewriter({
    words: [
      `
       _   _  _        _    
      | \\ | |(_)      | |   
      |  \\| | _   ___ | | __
      | . \` || | / __|| |/ /
      | |\\  || || (__ |   < 
      \\_| \\_/|_| \\___||_|\\_\\       
      `,
    ],
    loop: 0,
    typeSpeed: 5,
    deleteSpeed: 0,
  });

  return <span>{text}</span>;
};

const HomeSection = () => {
  const [imAscii, { isDone }] = useTypewriter({
    words: [
      `
      _____  _            
      |_   _|( )           
        | |  |/  _ __ ___  
        | |     | '_ \` _ \\ 
       _| |_    | | | | | |
       \\___/    |_| |_| |_|

      `,
    ],
    loop: 1,
    typeSpeed: 10,
    deleteSpeed: 0,
  });

  return (
    <section id='home' className='active-section'>
      <span className='wordart-header type-contents'>{imAscii}</span>
      <span id='name-header' className='wordart-header type-contents'>
        {isDone ? <NickASCII /> : ''}
      </span>
      <p className='type-contents'>(fullstack node.js developer)</p>
      <nav className='link-list'>
        <a className='type-contents' href='#about'>
          [learn about me]
        </a>
        <a className='type-contents' href='#projects'>
          [cool projects]
        </a>
        <a className='type-contents' href='#contact'>
          [chat with me]
        </a>
      </nav>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <HomeSection />
    </>
  );
}

const notFoundSection = (
  <section id='404'>
    <h1 className='wordart-header type-contents'>404</h1>
    <p className='type-contents'>
      Huh, this isn&apos;t an official page on this site, why aren&apos;t you
      using the navbar?
    </p>
  </section>
);
