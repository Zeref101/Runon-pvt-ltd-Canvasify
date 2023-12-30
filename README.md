# Canvasify
static websites with ease using intuitive drag-and-drop functionality!

### Features

* **Drag-and-Drop Interface**: Effortlessly create websites by dragging and dropping text and image elements.
* **Customizable Content**: Edit text and change images after they're placed on the website.
* **Local Storage**: Save website progress and resume editing later.
* **Visual Design**: Attractive and user-friendly interface for a seamless creation experience.
* **Independent Running**:  Ability to run the edited website locally, without requiring the builder.
* **Cloud Hosting**: Option to host the created website on various cloud platforms.

### Tech Stack

Front-end: React.js, TypeScript, Tailwindcss
Drag-and-Drop Library: React-Draggable
Local Storage: localStorage API

### Project Setup
Clone the repository:
```Bash
git clone https://github.com/<your-username>/drag-and-drop-website-builder.git
```

### Install dependencies:
```Bash
cd drag-and-drop-website-builder
pnpm install
```
### Start the development server:
```Bash
pnpm run dev
```

### Usage

* Access the website builder in your browser.
* Choose elements from the toolbar (text or image).
* Drag and drop them onto the designated website section.
* Edit text and images as needed.
* Click "Save" to store the website structure in local storage.
* Run the edited website independently or host it on a cloud platform.

### Key Components

* Toolbar: Contains draggable text and image elements.
* Website Section: The area where elements are dropped and arranged.
* Text Editor: Allows for text editing after elements are dropped.
* Image Uploader: Enables image selection and replacement.
* Save Button: Triggers website saving to local storage.
