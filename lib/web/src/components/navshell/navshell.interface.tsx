import { MantineTheme, CSSObject } from "@mantine/core";

export interface NavshellStyles {
  logoIcon: React.CSSProperties;
  icons: React.CSSProperties;
  appShell: (
    theme: MantineTheme
  ) => Partial<Record<"body" | "main" | "root", CSSObject>>;
}
