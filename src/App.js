
import './App.css';
import butterfly from "./image/imagesrc.jpg";

function App() {
  return (
    <div className="bloc1"> 
  <>  
  <h1 classname="title red"> your name here</h1>
  <br/>
  <img src={butterfly} alt="butterfly"/>
  <br/>
<img src="/imagepublic.jpg" alt="butterfly"/>


<video style={{width:"320" ,height:"240"}}src="/video.mp4"
 controls
 Play
>
 </video>
 </>  
 </div>


//  <video style={{width:"320" ,height:"240"}}
// /* <video width="320" height="240" controls>

/* <source src="myVideo.mp4" type="video/mp4" >
// </video> */ 


  );
}

export default App;
