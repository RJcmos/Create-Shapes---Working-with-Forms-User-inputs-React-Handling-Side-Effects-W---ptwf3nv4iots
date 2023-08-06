import React from 'react'
import '../styles/App.css';
const App = () => {
 const [selectedShape, setSelectedShape] = useState('square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAddShape = () => {
    setShapes((prevShapes) => [...prevShapes, selectedShape]);
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
      {shapes.map((shape, index) => (
          <div key={index} className={shape}></div>
        ))}
      </div>
    </div>
  )
}


export default App;
