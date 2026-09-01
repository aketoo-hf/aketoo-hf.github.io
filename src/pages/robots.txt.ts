import type { APIRoute } from 'astro';

// robots.txt is generated rather than static so preview deploys can opt out of
// indexing; the production build on www.aketoo.com stays fully crawlable
export const GET: APIRoute = ({ site }) => {
  const isPreviewHost = site?.hostname.endsWith('github.io') ?? false;

  const body = isPreviewHost
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site).href}`, ''].join(
        '\n',
      );

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
