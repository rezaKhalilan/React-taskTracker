import Button from "./Button";

const Header = ({ title, onAdd, showButtonText }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <div onClick={onAdd}>
        <Button
          text={showButtonText ? "Close" : "Add"}
          color={showButtonText ? "red" : "green"}
        />
      </div>
    </header>
  );
};

export default Header;
