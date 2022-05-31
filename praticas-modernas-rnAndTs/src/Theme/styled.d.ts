import "styled-components";
import theme from ".";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}

// declaração dos meus tipos de tema
