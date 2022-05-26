import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const x = window.confirm(
      "This is only for protected route example, please press ok?"
    );
    setConfirm(x);
  }, []);

  if (!confirm) return;
  return (
    // need some condition for exit with props TODO cart flag
    <div>{children}</div>
  );
};

export default ProtectedRoute;
