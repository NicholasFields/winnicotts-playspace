import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <section id='about'>
      <h1 className='wordart-header type-contents'>about</h1>
      <br />
      <h2>
        <span className='type-contents'>hi, im</span>{' '}
        <span className='type-contents name'>nick</span>
      </h2>
      <p className='about-paragraph type-contents'>description stuff</p>
      <p className='about-paragraph type-contents'>description stuff</p>
      <p className='about-paragraph type-contents'>description stuff</p>
    </section>
  );
};

export default About;
