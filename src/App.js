import './App.css';
import data from "./data.json";
import Experience from "./experience";
import Projects from "./projects";
function App() {
  return (
      <div className="App">
          <div className="header">
              <p className="name">shashvat singh</p>
              <img className='profilePhoto' src={data.profile_photo} alt="shashvat"/>
          </div>
          <div className='links'>
              <a className="link" href={"https://github.com/shashvat1965"}> github </a>
              <a className="link" href={"https://www.linkedin.com/in/shashvatsingh/"}> linkedin </a>
              <a className="link" href={"https://twitter.com/Xcarnage__"}> twitter</a>
              <a className="link" href={"https://drive.google.com/drive/folders/1rmBbtfyDs3FkYxr7kqqY1B64nnWQP3Kp?usp=drive_link"}> resume </a>
          </div>
          <p className="bio">hi, i am shashvat singh, a software developer from india. i am doing my bachelors rn from
              bits pilani, india<br/>i am interested in startups</p>
          <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
          }}>
              <Experience/>
              <Projects/>
          </div>
      </div>

  );
}

export default App;
