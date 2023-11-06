import { useState } from "react";
const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
      {isLoggedIn ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default User;
