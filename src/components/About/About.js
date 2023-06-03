import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Pdf from '../../Documents/Resume.pdf'
import './About.css'

const About = () => {
  const { name, headline, role, location, description, resume, social } = about

  return (
    <div className='about'>
      <div className='name-title'>
        {name && (
          <h1>
            <span className='about__name'>{name}</span>
          </h1>
        )}
        <div className='headline-title'>
          {headline && (
            <h3>
              <span className='about__headline'>{headline}</span>
            </h3>
          )}
        </div>
      </div>
      <div className='about-main'>
        <div className="about-card">
          <p>Hi.</p>
          <p>My name is  
            <b> Sarah Kelly. </b>
          </p>
          <p>I am a</p>
          {role && <h2 className='about__role'>{role}</h2>}
          <p>from</p>
          {location && <h2 className='about__location'>{location}.</h2>}
          
          <div className='about-description'>
            <h4>My Passion</h4>
            <p className='about__desc'>{description && description}</p>
          </div>

          <div className='about__contact center'>
            <h4>Let&apos;s Connect!</h4>
            <div className='resume'>
            {resume && (
              <a href = {Pdf}>
                <span className='resume-link'>
                View My Current Resume
                </span>
              </a>
            )}
            </div>

            <div>
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
        <div className='profile-image'>
          <img src="images/profile.jpeg" alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default About