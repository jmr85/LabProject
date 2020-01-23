import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const PORT = 4723;
const driver = wd.promiseChainRemote('localhost', PORT);

const config = {
  platformName: 'Android',
  platformVersion: '9.0',
  deviceName: 'Android Emulator',
  app: 'android/app/build/outputs/apk/debug/app-debug.apk',
  automationName: 'UiAutomator2' //es un controlador de Google para facilitar la automatización en un dispositivo o emulador Android.
};

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
});

test('view welcome y click boton', async () => {
  expect(await driver.hasElementByAccessibilityId('welcome')).toBe(true);
  await driver.elementByAccessibilityId('hello_button').click();
}); 

