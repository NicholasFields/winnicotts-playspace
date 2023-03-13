import { useRouter } from 'next/router';
import { useTypewriter } from 'react-simple-typewriter';

const jsonAscii = `
      _  _____  ____  _   _ 
     | |/ ____|/ __ \\| \\ | |
     | | (___ | |  | |  \\| |
 _   | |\\___ \\| |  | | . \` |
| |__| |____) | |__| | |\\  |
 \\____/|_____/ \\____/|_| \\_|
                  
`;

const doeAscii = `
 _____   ____  ______ 
|  __ \\ / __ \\|  ____|
| |  | | |  | | |__   
| |  | | |  | |  __|  
| |__| | |__| | |____ 
|_____/ \\____/|______|
`;

const useAsciiTypeWriter = ({ asciiText = '', ...config }) => {
  const [text, typeWriterHelper] = useTypewriter({
    words: [asciiText],
    loop: 3,
    typeSpeed: 3,
    deleteSpeed: 0,
    ...config,
  });

  return [text, typeWriterHelper];
};

const DoeAscii = () => {
  const [typedDoeAscii, { isDone }] = useAsciiTypeWriter({
    asciiText: doeAscii,
  });

  return <>{typedDoeAscii}</>;
};

const HomeSection = () => {
  const [typedJsonAscii, { isDone }] = useAsciiTypeWriter({
    asciiText: jsonAscii,
  });

  return (
    <section id='home' className='active-section'>
      <span className='wordart-header type-contents'>{typedJsonAscii}</span>
      <span id='name-header' className='wordart-header type-contents'>
        {isDone ? <DoeAscii /> : ''}
      </span>
      <p className='type-contents'>(fullstack node.js developer)</p>
      <nav className='link-list'>
        <a className='type-contents' href='#about'>
          [who is json doe?]
        </a>
        <a className='type-contents' href='#projects'>
          [projects]
        </a>
        <a className='type-contents' href='#contact'>
          [contact]
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
