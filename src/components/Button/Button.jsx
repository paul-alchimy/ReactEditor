const Button = (props) => {
  const {
    onClickHandler = () => {},
    additionalClasses = [],
    IconComponent,
    type = "primary",
    innerText = null,
  } = props;

  const typeClass = `btn-${type}`;

  return (
    <button className={[...additionalClasses, "btn"]} onClick={onClickHandler}>
      <IconComponent />
    </button>
  );
};

export default Button;
