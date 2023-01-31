const ProgressContainer: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className='App-total'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "290px",
        height: "26px",
      }}
    >
      {children}
    </div>
  );
};

export default ProgressContainer;
