const Component = () => {
  return (
    <>
      <h1>ComponentA</h1>
    </>
  );
};

const ComponentA = () => {
  return (
    <>
      <h1>ComponentB</h1>
    </>
  );
};

const ComponentB = () => {
  return (
    <>
      <h1>ComponentC</h1>
    </>
  );
};

// // exporting single component aka default export
export default Component;

// exporting mutiple component aka named exports
export { ComponentA, ComponentB };
