import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Pdf from '../../Documents/Resume.pdf'
import './About.css'

const About = () => {
  const { name, headline, role, description, resume, social } = about

  return (
    <div className='about'>
      <div className='name-title'>
        {name && (
          <h1>
            <span className='about__name'>{name}.</span>
          </h1>
        )}
        <div className='headline-title'>
          {headline && (
            <h3>
              <span className='about__headline'>{headline}.</span>
            </h3>
          )}
        </div>
      </div>
      <div className='about-main'>
        <div className='profile-image'>
          <img src="images/profile.jpeg" alt="Profile" />
        </div>
        <div className="about-card">
          {role && <h2 className='about__role'>{role}.</h2>}
          <p className='about__desc'>{description && description}</p>

          <div className='about__contact center'>
            {resume && (
              <a href = {Pdf}>
                <span type='button' className='btn btn--outline'>
                Resume
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About