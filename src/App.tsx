import { useState } from 'react';
import { Rnd } from 'react-rnd';
import Draggable from 'react-draggable';
// import { Button } from './components/ui/button';
import { Positions, ImageObject } from './types/type';
import { Textarea } from './components/ui/textarea';
import Navbar from './components/Navbar';

let g_id = -1;

function App() {

  // TEXTS
  const [texts, setTexts] = useState([{ id: 1, text: '', isEditing: false }]);
  // IMAGES
  const [images, setImages] = useState<ImageObject[]>([]);
  // Texts position
  const [positions, setPositions] = useState<{ [key: number]: { x: number, y: number } }>({});
  // Images position
  const [positionsRnd, setPositionsRnd] = useState<Positions>({})

  // TEXTS DRAG

  const handleDrag = (event, data) => {
    setPositions(data);
  };


  // ADD TEXT
  const handleAddText = () => {
    setTexts([...texts, { id: Date.now(), text: 'Double click to edit me', isEditing: true }]);
  };

  // TEXT CHANGE
  const handleTextChange = (id, event) => {
    setTexts(texts.map(text => text.id === id ? { ...text, text: event.target.value } : text));

  };
  // EDIT TEXT
  const handleTextDoubleClick = (id) => {
    setTexts(texts.map(text => text.id === id ? { ...text, isEditing: true } : text));
  };
  // TEXT ON BLUR
  const handleTextBlur = (id) => {
    setTexts(texts.map(text => text.id === id ? { ...text, isEditing: false } : text));
  };
  // TEXT ON ENTER KEY
  const handleEnterKey = (id, key) => {
    if (key === "Enter") {

      setTexts(texts.map(text => text.id === id ? { ...text, isEditing: false } : text));
    }
  }

  // IMAGE UPLOAD
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImages([...images, { id: g_id + 1, url: URL.createObjectURL(event.target.files[0]) }]);
      g_id = g_id + 1;


    }
  };

  // IMAGE STOP DRAG

  const handleStopRnd = (id, e, data) => {
    console.log('Drag stopped.');
    setPositionsRnd(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        x: data.x,
        y: data.y,
        width: prev[id]?.width || 200, // Use existing width or default to 200
        height: prev[id]?.height || 200 // Use existing height or default to 200
      }
    }));

  }
  // IMAGE ON STOP RESIZE

  const handleResizeStop = (id, e, direction, ref, delta, position) => {
    const newWidth = ref.offsetWidth;
    const newHeight = ref.offsetHeight;
    setPositionsRnd(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        x: position.x,
        y: position.y,
        width: newWidth,
        height: newHeight
      }
    }));
  }

  // REMOVE IMAGE 
  const handleRemove = (id: number) => {
    setImages(prevImages => prevImages.filter(image => image.id !== id));
  };

  // EDIT IMAGE WITH ANOTHER IMAGE
  const handleReplace = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);

    setImages(prevImages => prevImages.map(image => image.id === id ? { ...image, url: newImageURL } : image));
  };

  // SAVE DOCUMENT IN localStorage and log the values
  const saveDocument = () => {

    localStorage.setItem('texts', JSON.stringify(texts));
    localStorage.setItem('images', JSON.stringify(images));

    console.log(localStorage.getItem("texts"));
    console.log(localStorage.getItem("images"));
  }

  return (
    <>
      <div className='w-full h-screen overflow-hidden bg-offwhite dark:bg-dark-200'>
        <Navbar
          handleAddText={handleAddText}
          handleImageUpload={handleImageUpload}
          saveDocument={saveDocument}
        />
        {texts.map(({ id, text, isEditing }) => (
          <Draggable
            key={id}
            position={positions[id]}
            onDrag={(data) => handleDrag(id, data)}
          >
            <div key={id}>
              {isEditing ? (
                <Textarea
                  // type="text"
                  value={text}
                  onKeyDown={(e) => handleEnterKey(id, e.code)}
                  onChange={(e) => handleTextChange(id, e)}
                  onBlur={() => handleTextBlur(id)}
                  autoFocus
                  className='w-[200px] h1-bold'
                />
              ) : (
                <h1 className='h1-bold' onDoubleClick={() => handleTextDoubleClick(id)}>{text}</h1>
              )}
            </div>
          </Draggable>
        ))}


        <div>
          {images.map((image) => (

            <Rnd
              key={image.id}
              default={{
                width: 200,
                height: 200,
              }}
              position={positionsRnd[image.id] || { x: 0, y: 0 }}
              onDragStop={(e, data) => handleStopRnd(image.id, e, data)}
              size={{ width: positionsRnd[image.id]?.width, height: positionsRnd[image.id]?.height }}
              onResizeStop={(e, direction, ref, delta, position) => handleResizeStop(image.id, e, direction, ref, delta, position)}
            >
              <img key={image.id} src={image.url} alt="Uploaded" className={` w-[${positionsRnd[image.id]?.width}] h-[${positionsRnd[image.id]?.height}] rounded-xl`} />
              <div className='flex justify-between m-2'>

                <img
                  src="src/assets/icons/remove.jpg"
                  alt="remove"
                  onClick={() => handleRemove(image.id)}
                  className='dark:invert w-[20px] cursor-pointer'
                />

                <label htmlFor="edit-image">
                  <img
                    src="src/assets/icons/edit.jpg"
                    alt="edit"
                    className='dark:invert w-[20px] cursor-pointer'
                  />

                  <input
                    id='edit-image'
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleReplace(image.id, event)}
                    className='hidden'
                  />
                </label>
              </div>
            </Rnd>


          ))}
        </div >
      </div>
    </>
  );
}

export default App;