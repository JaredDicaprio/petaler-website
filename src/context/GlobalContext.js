import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [themeDark, setThemeDark] = useState(false);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);
  const [footerDark, setFooterDark] = useState(true);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const goHeaderDark = () => {
    setHeaderDark(true);
  };
  const goHeaderLight = () => {
    setHeaderDark(false);
  };

  const goFooterDark = () => {
    setFooterDark(true);
  };
  const goFooterLight = () => {
    setFooterDark(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        themeDark,
        toggleTheme,
        headerDark,
        goHeaderDark,
        goHeaderLight,
        footerDark,
        goFooterDark,
        goFooterLight,
        videoModalVisible,
        toggleVideoModal,
        visibleOffCanvas,
        toggleOffCanvas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
