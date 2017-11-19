describe('Init screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have elements on initial screen', async () => {
    await expect(element(by.id('reset'))).toBeVisible();
    await expect(element(by.id('random'))).toBeVisible();
    await expect(element(by.id('counter'))).toBeVisible();
    await expect(element(by.id('bored'))).toBeVisible();
  });
  
  it('should show second screen', async () => {
    await element(by.text('Colors!')).tap();
    await expect(element(by.text('Open in Stack Navigator'))).toBeVisible();
  });
  
})