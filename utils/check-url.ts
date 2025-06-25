import puppeteer, { Browser } from 'puppeteer'

export async function checkWebsiteUrls(urls: string[]) {
  let browser: Browser | null = null
  let errorUrls: string[] = []

  try {
    browser = await puppeteer.launch()

    for (const url of urls) {
      try {
        const page = await browser.newPage()
        await page.goto(url, {
          waitUntil: 'networkidle0'
        })

        const body = await page.$('body')
        const html = await body?.evaluate((el) => el.innerHTML)

        if (!html) {
          errorUrls.push(url)
        }
        await page.close()
      } catch (error) {
        errorUrls.push(url)
      }
    }

    await browser.close()
    return errorUrls
  } catch (error) {
    if (browser) {
      await browser.close()
    }
    throw new Error('Error checking URLs')
  }
}