import "./App.css";
import { ButtonComponent } from "./components/button/button";

function App() {
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div className="App">
      {/* Primary buttons */}
      <ButtonComponent variant="primary" onClick={handleClick}>
        Primary
      </ButtonComponent>
      <ButtonComponent variant="primary" size="medium" onClick={handleClick}>
        Primary
      </ButtonComponent>
      <ButtonComponent
        variant="primary"
        size="large"
        onClick={handleClick}
        rounded="16px"
      >
        Primary
      </ButtonComponent>
      <ButtonComponent
        variant="primary"
        size="large"
        onClick={handleClick}
        disabled
      >
        Primary
      </ButtonComponent>
      {/* Secondary buttons */}
      <ButtonComponent variant="secondary" onClick={handleClick}>
        Secondary
      </ButtonComponent>
      <ButtonComponent variant="secondary" size="medium" onClick={handleClick}>
        Secondary
      </ButtonComponent>
      <ButtonComponent
        variant="secondary"
        size="large"
        rounded="16px"
        onClick={handleClick}
      >
        Secondary
      </ButtonComponent>
      <ButtonComponent
        variant="secondary"
        size="large"
        disabled
        onClick={handleClick}
      >
        Secondary
      </ButtonComponent>
      {/* Success buttons */}
      <ButtonComponent variant="success" onClick={handleClick}>
        Success
      </ButtonComponent>
      <ButtonComponent variant="success" size="medium" onClick={handleClick}>
        Success
      </ButtonComponent>
      <ButtonComponent
        variant="success"
        size="large"
        rounded="16px"
        onClick={handleClick}
      >
        Success
      </ButtonComponent>
      <ButtonComponent
        variant="success"
        size="large"
        disabled
        onClick={handleClick}
      >
        Success
      </ButtonComponent>
      {/* Error buttons */}
      <ButtonComponent variant="error" onClick={handleClick}>
        Error
      </ButtonComponent>
      <ButtonComponent variant="error" size="medium" onClick={handleClick}>
        Error
      </ButtonComponent>
      <ButtonComponent
        variant="error"
        size="large"
        rounded="16px"
        onClick={handleClick}
      >
        Error
      </ButtonComponent>
      <ButtonComponent
        variant="error"
        size="large"
        disabled
        onClick={handleClick}
      >
        Error
      </ButtonComponent>
    </div>
  );
}

export default App;
