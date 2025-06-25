import { config } from 'dotenv'
config({ path: '.env' })

import { Cron } from 'croner'
import { checkWebsiteUrls } from './utils/check-url'
import { sendPushover } from './utils/pushover'

if (!process.env.WEBSITE_URLS) {
  throw new Error('WEBSITE_URLS is not set')
}

export const hourlyCronJobs = new Cron('0 * * * *', async () => {
  console.log('🕐 Checking URLs')
  console.log((new Date()).toISOString())
  console.time('Checking URLs')

  const urls = process.env.WEBSITE_URLS?.split(',').map(url => url.trim()) || []

  try {
    const errorUrls = await checkWebsiteUrls(urls)
    if (errorUrls?.length > 0) {
      await sendPushover('Error checking URLs', errorUrls.join(', '))
    }
  } catch (error: any) {
    await sendPushover('Error checking URLs', error.message)
  }

  console.timeEnd('Checking URLs')
})

console.log('🕐 Cron jobs initialized')