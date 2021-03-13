const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.cosmote.gr/selfcare/jsp/diathesimotita-adsl-vdsl-cosmotetv.jsp?ct=bus#');

    await page.$eval('#offers4allcli', (el) => el.focus());
    await page.keyboard.type("2232061342", { delay: 100 });
    await page.$eval('#availButton', (el) => el.click());

    const selector = '.availabilityTableContainer';
    try {
        await page.waitForSelector(selector, { timeout: 10000, visible: true });
        await page.screenshot({ path: 'example.png', fullPage: true });
    } catch (error) {
        console.log(error);
    }

    await browser.close();
})();