import React from "react";
import Draggable from "react-draggable";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
          bounds="parent"
        >
          <div className="handle" id="dragable_box_1">
            <div>Drag me!</div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;
