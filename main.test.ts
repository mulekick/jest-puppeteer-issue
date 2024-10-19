// import jest globals
import {describe, beforeAll, it, expect} from "@jest/globals";

// import jest-puppeteer globals
import "jest-puppeteer";
import "expect-puppeteer";

describe("Google", (): void => {
    beforeAll(async (): Promise<void> => {
        await page.goto("https://google.com");
    });

    it('should display "google" text on page', async (): Promise<void> => {
        await expect(page).toMatchTextContent("google");
    });
});