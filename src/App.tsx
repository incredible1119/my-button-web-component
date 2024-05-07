import "./App.css";
import "./components/button/button";
import { ButtonComponent } from "./components/button/button";
import { ButtonVariant, ButtonSize } from "./components/button/button.wc";

function App() {
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div className="App">
      {/* Primary buttons */}
      <ButtonComponent variant={ButtonVariant.PRIMARY} onClick={handleClick}>
        Primary
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.MEDIUM}
        onClick={handleClick}
      >
        Primary
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LARGE}
        onClick={handleClick}
        rounded="16px"
      >
        Primary
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LARGE}
        onClick={handleClick}
        disabled
      >
        Primary
      </ButtonComponent>
      {/* Secondary buttons */}
      <ButtonComponent variant={ButtonVariant.SECONDARY} onClick={handleClick}>
        Secondary
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.MEDIUM}
        onClick={handleClick}
      >
        Secondary
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.LARGE}
        rounded="16px"
        onClick={handleClick}
      >
        Secondary
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.LARGE}
        disabled
        onClick={handleClick}
      >
        Secondary
      </ButtonComponent>
      {/* Success buttons */}
      <ButtonComponent variant={ButtonVariant.SUCCESS} onClick={handleClick}>
        Success
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.SUCCESS}
        size={ButtonSize.MEDIUM}
        onClick={handleClick}
      >
        Success
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.SUCCESS}
        size={ButtonSize.LARGE}
        rounded="16px"
        onClick={handleClick}
      >
        Success
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.SUCCESS}
        size={ButtonSize.LARGE}
        disabled
        onClick={handleClick}
      >
        Success
      </ButtonComponent>
      {/* Error buttons */}
      <ButtonComponent variant={ButtonVariant.ERROR} onClick={handleClick}>
        Error
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.ERROR}
        size={ButtonSize.MEDIUM}
        onClick={handleClick}
      >
        Error
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.ERROR}
        size={ButtonSize.LARGE}
        rounded="16px"
        onClick={handleClick}
      >
        Error
      </ButtonComponent>
      <ButtonComponent
        variant={ButtonVariant.ERROR}
        size={ButtonSize.LARGE}
        disabled
        onClick={handleClick}
      >
        Error
      </ButtonComponent>
    </div>
  );
}

export default App;
