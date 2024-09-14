const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.amortizationcalculatorhomeloan.com'; // Replace with your domain
const routes = [
  '/',
  '/about',
  '/privacy-policy',
  '/terms-of-service',
  '/contact'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'src', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully');
