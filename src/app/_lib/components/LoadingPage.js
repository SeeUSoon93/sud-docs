import { DotSpinner } from "sud-ui";
import { useDarkMode } from "../context/darkModeContext";

export const LoadingPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: isDarkMode
          ? "rgba(80, 80, 80, 0.8)"
          : "rgba(255, 255, 255, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <DotSpinner size={70} />
    </div>
  );
};
