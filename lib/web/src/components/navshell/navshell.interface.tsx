import { MantineTheme, CSSObject } from "@mantine/core";

export interface NavshellStyles {
  icons: React.CSSProperties;
  appShell: (
    theme: MantineTheme
  ) => Partial<Record<"body" | "main" | "root", CSSObject>>;
}
