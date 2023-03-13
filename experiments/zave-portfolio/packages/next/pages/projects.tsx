import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <section id='projects'>
      <h1 className='wordart-header type-contents'>projects</h1>
      <br />
      <table id='projects-table'>
        <tr>
          <td className='type-contents'>proj name</td>
          <td className='type-contents'>proj desc</td>
          <td>
            <a
              className='github-link type-contents'
              href='https://github.com/NicholasFields/proj-name'
              target='_blank'
              rel='noreferrer'
            >
              [github]
            </a>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default About;
