import './App.css';
import { profile, github, slack, share, zuri, logo } from './assets'

function App() {
  return (
    <div className="App">
      <div className="profile">
      <img src={profile} alt="" id='profile_img' />
      <p className='profile-twitter' id='twitter'>@__Mwaura</p>
      <p className='profile-slack' id='slack'>Robyn</p>
      <img className='btn-share' src={share} alt="share-btn" />
      </div>
      <section className='link-container'>
        <a className='link' href="https://twitter.com/__Mwaura" target="_blank">
          <p className='link-text'>Twitter Links </p>
        </a>

        <a className='link' id='btn__zuri' href="https://training.zuri.team/" target="_blank">
          <p className='link-text'>Zuri Team</p>
        </a>

        <a className='link' id='books' href="http://books.zuri.team" target="_blank">
          <p className='link-text'>Zuri Books</p>
        </a>

        <a className='link' id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=divineedwin" target="_blank">
          <p className='link-text'>Python Books</p>
        </a>

        <a className='link' id='pitch' href="https://background.zuri.team/" target="_blank">
          <p className='link-text'>Background Checks for Coders</p>
        </a>
        
        <a className='link' id='book__design' href="https://books.zuri.team/design-rules" target="_blank">
          <p className='link-text'>Design Books</p>
        </a>

        <div className='social-icons'>
          <a href="http://slack.com" target="_blank" rel="noopener noreferrer">
            <img src={slack} alt="slack-icon" />
          </a>
          <a href="https://github.com/Cheeh1" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github-icon" />
          </a>
        </div>
      </section>

      <footer>
        <hr />
        <div className='footer-container'>
          <img className='footer-img' src={zuri} alt="zuri-logo" />
          <p className='footer-text'>HNG Internship 9 Frontend Task</p>
          <img className='footer-img' src={logo} alt="IaG-logo" />
        </div>
      </footer>

    </div>
  );
}

export default App;
