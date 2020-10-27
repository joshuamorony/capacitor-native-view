declare module '@capacitor/core' {
  interface PluginRegistry {
    Alert: AlertPlugin;
  }
}

export interface AlertPlugin {
  present(options: { message: string }): void;
}
