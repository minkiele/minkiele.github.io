"use client"

import useTheme from "@/hooks/useTheme";
import { createElement } from "react";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";

const AppThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  return createElement(ThemeSelector, { onChange: setTheme, theme });
}

export default AppThemeSelector;
