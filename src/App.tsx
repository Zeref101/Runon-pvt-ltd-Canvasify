
import { useState } from 'react';
import './App.css'
import Draggable from 'react-draggable'; // Both at the same time

function App() {
  const [position, setPosition] = useState<object>({ x: 0, y: 0 });

  const handleStart = () => {
    console.log('Drag started');
  };

  const handleDrag = (event, data) => {
    setPosition(data.position);
  };

  const handStop = () => {
    console.log("dropped");
  }

  return (
    <Draggable
      position={position}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handStop}
    >
      <div>Drag me around!</div>
    </Draggable>
  );
}

export default App
