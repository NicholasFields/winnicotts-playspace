import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <section id='contact'>
      <h1 className='wordart-header type-contents'>contact-ascii</h1>
      <nav>
        <br />
        <table id='contact-info'>
          <tr>
            <td>
              <a
                className='type-contents bracket-link'
                href='mailto:nick@jsondoe.com'
                target='_blank'
                style={{ color: '#6D4AFF' }}
                rel='noreferrer'
              >
                [email]
              </a>
            </td>
            <td className='type-contents'>nick@jsondoe.com</td>
          </tr>
          <tr>
            <td>
              <a
                className='type-contents'
                href='https://twitter.com/twitterhandle'
                target='_blank'
                style={{ color: '#1D9BF0' }}
                rel='noreferrer'
              >
                [twitter]
              </a>
            </td>
            <td className='type-contents'>@twitterhandle</td>
          </tr>
          <tr>
            <td className='type-contents' style={{ color: '#454FBF ' }}>
              [discord]
            </td>
            <td className='type-contents'>discordhandle</td>
          </tr>
          <tr>
            <td>
              <a
                className='type-contents github-link'
                href='https://github.com/NicholasFields'
                target='_blank'
                rel='noreferrer'
              >
                [github]
              </a>
            </td>
            <td className='type-contents'>@githubhandle</td>
          </tr>
        </table>
      </nav>
    </section>
  );
};

export default About;
