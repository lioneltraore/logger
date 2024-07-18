/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async logCallback(data: any): Promise<string> {
    console.log('data: ' + JSON.stringify(data));
    return 'IT WORKS';
  }
}
