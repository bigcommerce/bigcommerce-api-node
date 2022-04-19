import { wait } from './wait';

describe('wait', () => {
  it('should wait for a given amount of time', async () => {
    const start = Date.now();
    await wait(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });
});
