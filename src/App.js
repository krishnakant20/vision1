import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'
import { ExternalLink } from 'react-external-link';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success" >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href='#'>Vision</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <h3>Vision: An Inspirational Ideas (Website by Krishanakant)</h3>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      <div className='container my-3'>

        <h3> Idea 1 - Online Eye : We can CREATE app for people, that connects blind and low-vision people with sighted volunteers for visual assistance through a live video call.</h3>
        <div>Important- People can get connected to the "Indian regional speaking language's" volunteers.</div>
        <hr />
        <hr />
        <h5>Inspiration: Be My Eyes (Computer Software Tranbjerg J, Midtjylland)</h5>
        <div>
          Website -<ExternalLink href="https://www.bemyeyes.com/" />
        </div>
        <div>1. Introduction</div>
        <ReactPlayer url='https://www.youtube.com/watch?v=6GRfFuWsjNU' controls='true' />
        <div>2. Be My Eyes: Hans Jørgen Wiberg at TEDxCopenhagen</div>
        <ReactPlayer url='https://www.youtube.com/watch?v=IfeLJxCSLC0&t=85s' controls='true' />

      </div>
      <hr />
      <hr />
      <div className='container my-3'>

        <h3> Idea 2 - Artificial Intelligent Camera Apk : We can Build app for people for visual assistance using Artificial Intelligent Camera (LIVE Audio Instructions)</h3>
        <div>This AI app helps to complete everyday routines by detecting objects, people, products, text, and more</div>
        {/* <hr />
        <hr /> */}
        <h5>Inspiration: Google - Lookout (Assisted vision) </h5>
        <div>
          Website -<ExternalLink href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal&hl=en_IN&gl=US" />
        </div>
        <div>1. Introduction</div>
        <ReactPlayer url='https://www.youtube.com/watch?v=H6sBtxXK0-s' controls='true' />

      </div>
      <hr />
      <hr />
      <div className='container'>
        <h3>We can develop wooden frame + Colourfull Glasses for Special people </h3>
        <div>To change the trend of black googles</div>
        <img src={require("./images/1.jpg")} alt="123" style={{ width: 600, height: 600 }} />
      </div>
      <hr />
      <hr />
      <div className='container my-3'>

        <h3> Idea 4 - Electronic Eye </h3>
        {/* <hr />
                <hr /> */}
        <h5>Inspiration: eSight </h5>
        <div>
          Website -<ExternalLink href="https://esighteyewear.com/int/" />
        </div>
        <div>1. Introduction</div>
        <ReactPlayer url='https://www.youtube.com/watch?v=OYzP_RgXrIE' controls='true' />
        <div>2. eSight | Benefits in the Workplace</div>
        <ReactPlayer url='https://www.youtube.com/watch?v=htXcYPSDqmA&t=5s' controls='true' />

      </div>
      <hr />
      <hr />
      <hr />
      <div className='container my-3'>
        <h3>Web Developer - Krishnakant Pawar</h3>
        <div>
          Linkedin -<ExternalLink href="https://www.linkedin.com/in/krishnakant-pawar/" />
        </div>
        <img src={require("./images/3.jpg")} alt="123" style={{ width: 150, height: 250 }} />
        <h5>I am a Full Stack Developer & like to make Web Applications for Development of people around the world.</h5>
      </div>
      <h1 className='container my-5 mx-5'>Thank You Very Much!!!</h1>

    </>
  );
}

export default App;
