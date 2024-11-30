import { test } from "@playwright/test";
import { Tesseract } from "tesseract.ts";
 
 
test('dummy', async ({ page }) => {
    await page.goto("https://www.google.co.in/"); 
    const name = "google";
    const screenshotPath = `./${name}.png`;
    await page.locator("img[alt='Google']").screenshot({ path: screenshotPath, animations: 'disabled' });
    await page.waitForTimeout(2000);
    try {
        const result = await Tesseract.recognize(screenshotPath);
        console.log("Retrived Text from Image : " + result.text);
    } catch (error) {
        console.error('Error during OCR recognition:', error);
    }
});