import { AppController } from './app.controller';
import { AppService } from './app.service';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    appService = new AppService();
    vi.spyOn(appService, 'getHello').mockReturnValue('Hello World!');
    appController = new AppController(appService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
