import { useRouter } from 'next/router';

const HomeSection = () => (
  <section id='home' className='active-section'>
    <span className='wordart-header type-contents'>hello</span>
    <span id='name-header' className='wordart-header type-contents'>
      nametext
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

export default function Home() {
  return <HomeSection />;
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
