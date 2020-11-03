import imageInSrc from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';


import './App.css';

function App() {
  return (
    
    <div>  
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>


<img src={imageInSrc}  alt="imageInSrc" />
<img src="/imageInPublic.jpg" alt="imageInPublic" />


</div>
<div>
<video width="320" height="240" controls>

<source src={myVideo}  alt="myVideo" />
</video>

</div>

</div>
  
  );
}

export default App;
