const Button = ({ text, clickHandler }) => {
  return (
    <button type="submit" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
