const ErrorExample = () => {
  let counter = 0;

  return (
    <>
      <h2>{counter}</h2>
      <button
        className="btn"
        onClick={() => {
          counter += 1;
          console.log({ counter });
        }}
      >
        increase counter
      </button>
    </>
  );
};

export default ErrorExample;
