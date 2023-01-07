import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ES.OrderMe',
  appName: 'OrderMe',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      showSpinner: true,
      iosSpinnerStyle: "large",
      spinnerColor: "#000000",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
