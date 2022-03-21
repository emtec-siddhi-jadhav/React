import './App.css';


function App() {
  const username ='Siddhi';
  let currentTime = new Date();
  currentTime = currentTime.getHours();
  let greeting = '';
  const cssstyle={};
  if(currentTime >=1 && currentTime <12) {
    greeting = 'Good Morning';
    
    cssstyle.color = "lightgreen";
  }
  if(currentTime >=12 && currentTime <19) {
    greeting = 'Good Afternoon';
    cssstyle.color = "Gold";

  }
  if(currentTime >=19 && currentTime <24) {
    greeting = 'Good Night';
    cssstyle.color = "skyblue";

  }
  return (
    <div className="App">
      <h1>Hello {username}, <span style={cssstyle}>{greeting}</span></h1>
    </div>
  );
}

export default App;
