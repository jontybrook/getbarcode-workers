---
# getbarcode-workers
---

## [getbarcode.app](https://getbarcode.app)

---

## Simple on-the-fly QR Code Generator using Cloudlfare Workers

getbarcode-workers is a serverless, no-code QR code image generator. It generates and returns QR code images 'on-the-fly' in PNG, SVG, EPS or PDF format super-fast in 200+ edge locations, powered by Cloudflare Workers.

Usage is as simple as making a HTTP GET request to the relevant URL. Source QR code images directly from our CDN in your web apps, or download results to do whatever you need. QR code images are generated on-the-fly on Cloudflare's highly scalable, globally distributed Cloudflare Workers service and cached on their global CDN.

Need to embed a QR code in your app? Just source your image URL from our CDN.

https://getbarcode.app/qr/png/123456.png

Returns..

![Scan me](https://getbarcode.app/qr/png/123456.png)

Use our free hosted service at https://getbarcode.app - or deploy it yourself at the click of a button:

[![Deploy  to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/jontybrook/getbarcode-workers)

Features:

- **100% Free** - Free unlimited usage, no strings attached.
- **Scalable** - This service operates on Cloudflare Workers. Our code runs globally, providing exceptional performance, reliability, and scale.
- **Fast** - Your QR code images are generated super fast on-the-fly at a datacenter location nearest to your users.
- **Global CDN** - Results are globally cached on Cloudflare's CDN for sub-millisecond TTFB responses and massive scalability.
- **Multiple File Formats** - Supports SVG, PNG, PDF and EPS image formats.
- **Vector Formats** - Use SVG or EPS formats in order to produce sharp images at any size.

## Quickstart

Usage couldn't be simpler. Just construct your source URL with the format you want your image to be and the payload you want the resulting QR code to parse to when scanned. URLs follow this format:

    https://getbarcode.app/qr/[image_type]/[qr_payload][optional_suffix]

Here's a simple HTML example sourcing a PNG QR directly from our CDN:

    <img src="https://getbarcode.app/qr/png/ThatWasEasy.png"  alt="QR Code" width="400" height="400">

The result:
![Example QR Code](https://getbarcode.app/qr/png/ThatWasEasy.png)

### Examples

To get a QR code image in SVG format which parses to `123456` when scanned using any QR code scanner, use any of the following URLs:

With suffix:

> `https://getbarcode.app/qr/svg/123456.svg`

Without suffix:

> `https://getbarcode.app/qr/png/123456`

Using query parameters:

> `https://getbarcode.app/qr/svg/my-svg.svg?text=123456`

Or for the same in PNG format:

> `https://getbarcode.app/qr/png/123456.png`

Or PDF format:

> `https://getbarcode.app/qr/pdf/123456.pdf`

## QR Code Endpoints - /qr/\*\*

You can use this endpoint in the following ways:

#### GET `/qr/[format]/[payload]`

Include your payload at the end of the URL.

> Example: `https://getbarcode.app/qr/png/123456.png` will return a PNG image that parses to `123456` when scanned.

> NOTE: This works even if you include "/" characters in your payload, for example `https://getbarcode.app/qr/png/MYCODE/12/456789` will parse to `MYCODE/12/456789`. The same applies if you include a suffix.

#### GET `/qr/[format]/[payload].[file_extension]`

Optionally include a file extension suffix (eg .png) in your request URL. This will be stripped from the QR payload automatically. This is useful for use cases such as caching or downloading where you want the file extension.

> NOTE: As the file extension is stripped from the payload during generation, it is possible to generate a file with an invalid extension for it's MIME type. For example, `https://getbarcode.app/qr/png/thisisnotapdf.pdf` will generate a PNG file with a .pdf file extension. You probably don't want to do that.

#### GET `/qr/[format]/[file_name][file_suffix]?text=[payload]`

Use URL **query parameter** `text` to specify the QR code payload. In this case, the filename is ignored. This is useful if you want your file name to be different from the QR payload.

## Good to know

- Our responses include the correct MIME type in the `Content-Type` HTTP header. This is particularly important for caching efficiently via CDNs. These are:

| File Type | MIME Type       |
| --------- | --------------- |
| SVG       | image/svg+xml   |
| PNG       | image/png       |
| PDF       | application/pdf |
| EPS       | image/eps       |

- Whilst output is generated on-the-fly, caching of the result is encouraged and we cache all results in our CDN indefinitely to minimise repeat computation.

- Not keen on relying on a third-party service like https://getbarcode.app? We get it, and encourage you to deploy this project on your own domain using Cloudflare Workers in less than 5 minutes! Just click the magic button:

[![Deploy  to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/jontybrook/getbarcode-workers)

## Roadmap

Contributions / pull requests are welcomed.

- [ ] Generate other types of barcode (CODE-128, DataMatrix, etc)
- [ ] Custom image dimensions for PNG outputs.
- [ ] Advanced styling (colour, branding, etc).

## License

Copyright 2021 Jonty Brook

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
