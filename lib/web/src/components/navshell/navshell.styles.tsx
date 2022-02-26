import { NavshellStyles } from "./navshell.interface";

const Styles: NavshellStyles = {
  logoIcon: { width: 30, height: 30 },
  
  icons: {
    width: 18,
    height: 18,
  },
  appShell: (theme) => ({
    main: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  }),
};

export default Styles;
