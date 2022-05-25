const ProtectedRoute = ({ children }) => {
  return (
    // need some condition for exit with props TODO cart flag
    <div>
      <p>Protected</p>
      {children}
    </div>
  );
};

export default ProtectedRoute;
