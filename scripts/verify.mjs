import assert from 'node:assert/strict';
const origin = process.argv[2] || 'http://127.0.0.1:3000';
const get = async (path, status = 200) => {const response = await fetch(new URL(path, origin)); assert.equal(response.status, status, path); return response;};
const html = await (await get('/')).text();
for (const text of ['Yajesh Chandra', 'IndexIt', 'Tempest', 'MatBot', 'Tech Mahindra', 'RWTH Aachen']) assert.ok(html.includes(text), text);
for (const text of ['Dillion Verma', 'dillion.io', 'Chat Collect', 'Atomic Finance', 'dub.sh']) assert.ok(!html.includes(text), 'Sample identity: ' + text);
assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'One main heading');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'No duplicate HTML IDs');
const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map(m => m[1].replaceAll('&amp;', '&'));
assert.ok(!hrefs.includes('#'), 'No dead placeholder anchors');
for (const href of hrefs.filter(h => h.startsWith('/#') || h.startsWith('#'))) assert.ok(ids.includes(href.split('#')[1]), 'Anchor exists: ' + href);
const blog = await (await get('/blog')).text();
assert.ok(blog.includes('No blog posts yet'), 'Graceful empty blog');
assert.ok(!hrefs.includes('/blog'), 'Empty blog hidden from dock');
await get('/blog/api-design-principles', 404);
await get('/blog/nonexistent/opengraph-image', 404);
assert.ok(!hrefs.includes('https://github.com/Prabhat-Kr-Sahu/tempest_local_guard'), 'Unavailable source hidden');
assert.ok(!hrefs.includes('https://github.com/Yajeshchandra/MatBot'), 'Unavailable source hidden');
for (const path of ['/icon.svg', '/robots.txt', '/sitemap.xml', '/projects/matbot.png', '/projects/bert-training.png']) await get(path);
for (const path of ['/opengraph-image', '/blog/opengraph-image']) {const r = await get(path); assert.ok(r.headers.get('content-type')?.includes('image/png'), path); assert.ok((await r.arrayBuffer()).byteLength > 1000, path);}
for (const src of new Set([...html.matchAll(/\ssrc="([^"]+)"/g)].map(m => m[1].replaceAll('&amp;', '&')).filter(s => s.startsWith('/')))) await get(src);
console.log('PASS: home content, unique heading/IDs, navigation anchors, empty blog, removed sample route, assets, optimized images, favicon, sitemap, robots and Open Graph PNGs.');
if (process.argv.includes('--external')) {
 const external = [...new Set(hrefs.filter(h => h.startsWith('https://')))];
 const results = await Promise.all(external.map(async url => { try { const r = await fetch(url, {redirect: 'follow', signal: AbortSignal.timeout(20000)}); await r.body?.cancel(); return {url, status: r.status}; } catch (error) {return {url, error: error.message};} }));
 console.log(JSON.stringify(results, null, 2));
}
