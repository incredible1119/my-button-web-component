import "./App.css";
import "./components/button/button";

function App() {
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div className="App">
      {/* Primary buttons */}
      <my-button variant="primary" onClick={handleClick}>
        Primary
      </my-button>
      <my-button variant="primary" size="medium" onClick={handleClick}>
        Primary
      </my-button>
      <my-button
        variant="primary"
        size="large"
        onClick={handleClick}
        rounded={16}
        disabled
      >
        Primary
      </my-button>
      {/* Secondary buttons */}
      <my-button variant="secondary" onClick={handleClick}>
        Secondary
      </my-button>
      <my-button variant="secondary" size="medium" onClick={handleClick}>
        Secondary
      </my-button>
      <my-button variant="secondary" size="large" onClick={handleClick}>
        Secondary
      </my-button>
      {/* Success buttons */}
      <my-button variant="success" onClick={handleClick}>
        Success
      </my-button>
      <my-button variant="success" size="medium" onClick={handleClick}>
        Success
      </my-button>
      <my-button variant="success" size="large" onClick={handleClick}>
        Success
      </my-button>
      {/* Error buttons */}
      <my-button variant="error" onClick={handleClick}>
        Error
      </my-button>
      <my-button variant="error" size="medium" onClick={handleClick}>
        Error
      </my-button>
      <my-button variant="error" size="large" onClick={handleClick}>
        Error
      </my-button>
    </div>
  );
}

export default App;
