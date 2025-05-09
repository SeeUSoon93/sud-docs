export const jsCode = `"use client";

import { useState } from "react";
import { SoonUIDesign, Button } from "sud-ui";

const customTheme = {
  colors: {
    ocean: {
      1: "#e6f7ff",
      2: "#b3e5ff",
      3: "#80d3ff",
      4: "#4dc2ff",
      5: "#1ab0ff",
      6: "#0096e6",
      7: "#007abf",
      8: "#005f99",
      9: "#004473",
      10: "#00294d"
    }
  },
  components: {
    button: {
      primary: {
        bg: "ocean-6",
        txt: "white-10",
        border: "ocean-7"
      }
    }
  }
};

const darkTheme = {
  colors: {
    neutral: {
      1: "#1a1a1a",
      10: "#ffffff"
    }
  }
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SoonUIDesign
      theme={customTheme}
      darkTheme={darkTheme}
      isDarkMode={isDarkMode}
    >
      <div style={{ padding: 20 }}>
        <Button type="primary" onClick={() => setIsDarkMode(!isDarkMode)}>
          다크모드 전환
        </Button>
      </div>
    </SoonUIDesign>
  );
}`;

export const tsCode = `"use client";

import { useState } from "react";
import { SoonUIDesign, Button } from "sud-ui";

interface ColorPalette {
  [key: string]: string;
}

interface ThemeColors {
  [key: string]: ColorPalette;
}

interface ComponentTheme {
  primary: {
    bg: string;
    txt: string;
    border: string;
  };
}

interface CustomTheme {
  colors: ThemeColors;
  components: {
    button: ComponentTheme;
  };
}

const customTheme: CustomTheme = {
  colors: {
    ocean: {
      1: "#e6f7ff",
      2: "#b3e5ff",
      3: "#80d3ff",
      4: "#4dc2ff",
      5: "#1ab0ff",
      6: "#0096e6",
      7: "#007abf",
      8: "#005f99",
      9: "#004473",
      10: "#00294d"
    }
  },
  components: {
    button: {
      primary: {
        bg: "ocean-6",
        txt: "white-10",
        border: "ocean-7"
      }
    }
  }
};

const darkTheme: CustomTheme = {
  colors: {
    neutral: {
      1: "#1a1a1a",
      10: "#ffffff"
    }
  },
  components: {
    button: {
      primary: {
        bg: "ocean-6",
        txt: "white-10",
        border: "ocean-7"
      }
    }
  }
};

export default function App(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <SoonUIDesign
      theme={customTheme}
      darkTheme={darkTheme}
      isDarkMode={isDarkMode}
    >
      <div style={{ padding: 20 }}>
        <Button type="primary" onClick={() => setIsDarkMode(!isDarkMode)}>
          다크모드 전환
        </Button>
      </div>
    </SoonUIDesign>
  );
}`;
