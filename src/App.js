
import './App.css';
import imen from "./reactLogo.jpg"

function App() {
  return (
    <div className="App">
  <div style={{
    border:'solid 1 black',
    maxWidth:'100'
    }}
    >
<h1 className="titleRed">Imen Mechergui </h1>
<br/>
<img src={imen} alt="Logo"  />
<br/>
<img src="/photo/foto.jpg" alt="profile" />
</div>
<video width="320" height="240" controls>
<source src={"myVideo.mp4"} type="video/mp4"/>
</video>
</div>
  );
}
export default App;
