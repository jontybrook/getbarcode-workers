# Introduction

getbarcode-workers is a serverless, no-code QR code image generator. It generates and returns QR code images 'on-the-fly' in PNG, SVG, EPS or PDF format super-fast in 200+ edge locations, powered by Cloudflare Workers.

Usage is as simple as making a HTTP GET request to the relevant URL. Source QR code images directly from our CDN in your web apps, or download results to do whatever you need. QR code images are generated on-the-fly on Cloudflare's highly scalable, globally distributed Cloudflare Workers service and cached on their global CDN.

Need to embed a QR code in your app? Just source your image URL from our CDN.

https://getbarcode.app/qr/png/123456.png

Returns..

![Scan me](https://getbarcode.app/qr/png/123456.png)

Use our free hosted service at https://getbarcode.app - or deploy it yourself at the click of a button:

[![Deploy  to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/jontybrook/getbarcode-workers)

## Features

- **100% Free** - Free unlimited usage, no strings attached.
- **Scalable** - This service operates on Cloudflare Workers. Our code runs globally, providing exceptional performance, reliability, and scale.
- **Fast** - Your QR code images are generated super fast on-the-fly at a datacenter location nearest to your users.
- **Global CDN** - Results are globally cached on Cloudflare's CDN for sub-millisecond TTFB responses and massive scalability.
- **Multiple File Formats** - Supports SVG, PNG, PDF and EPS image formats.
- **Vector Formats** - Use SVG or EPS formats in order to produce sharp images at any size.
