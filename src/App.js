import React, { useEffect, useState } from "react";

import { Main, Navbar, Sidebar } from "./components";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [isDarkmode, setIsDarkmode] = useState(true);

  return (
    <div>
      <Navbar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        isDarkmode={isDarkmode}
        setIsDarkmode={setIsDarkmode}
      />
      <div
        className={`flex pt-[80px] h-screen overflow-hidden ${
          isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
        }`}
      >
        <Sidebar showSideBar={showSideBar} isDarkmode={isDarkmode} />
        <Main isDarkmode={isDarkmode} />
      </div>
    </div>
  );
};

export default App;
