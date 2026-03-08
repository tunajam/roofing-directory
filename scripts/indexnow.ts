#!/usr/bin/env npx tsx
/**
 * Submit all pages to IndexNow (Bing, Yandex, etc.)
 * Run: npx tsx scripts/indexnow.ts
 */
import siteConfig from '../site.config';

const INDEXNOW_KEY = 'bb5b7fb8d3704f06b2e9a79784552463';
const HOST = siteConfig.domain;

async function submitUrls(urls: string[]) {
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  if (!res.ok) {
    const text = await res.text();
    console.error('Error:', text);
  }
}

async function main() {
  // Dynamically build URL list from sitemap or data
  const sitemapUrl = `https://${HOST}/sitemap.xml`;
  console.log(`Fetching sitemap from ${sitemapUrl}...`);

  try {
    const res = await fetch(sitemapUrl);
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

    if (urls.length === 0) {
      console.log('No URLs found in sitemap. Submitting homepage only.');
      await submitUrls([`https://${HOST}/`]);
      return;
    }

    console.log(`Found ${urls.length} URLs. Submitting in batches of 10000...`);
    for (let i = 0; i < urls.length; i += 10000) {
      const batch = urls.slice(i, i + 10000);
      await submitUrls(batch);
      console.log(`Submitted batch ${Math.floor(i / 10000) + 1} (${batch.length} URLs)`);
    }
  } catch (err) {
    console.error('Failed to fetch sitemap, submitting homepage only.');
    await submitUrls([`https://${HOST}/`]);
  }
}

main();
