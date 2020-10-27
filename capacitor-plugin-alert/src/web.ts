import { WebPlugin } from '@capacitor/core';
import { AlertPlugin } from './definitions';

export class AlertWeb extends WebPlugin implements AlertPlugin {
  constructor() {
    super({
      name: 'Alert',
      platforms: ['web'],
    });
  }

  present(options: { message: string }): void {
    console.log('present', options);
  }
}

const Alert = new AlertWeb();

export { Alert };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Alert);
