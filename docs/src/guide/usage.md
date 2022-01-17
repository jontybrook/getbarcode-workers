# Usage

## GET URL

Usage couldn't be simpler. Just construct your source URL with the format you want your image to be and the payload you want the resulting QR code to parse to when scanned. URLs follow this format:

    https://getbarcode.app/qr/[image_type]/[qr_payload][optional_suffix]

Here's a simple HTML example sourcing a PNG QR directly from our CDN:

    <img src="https://getbarcode.app/qr/png/ThatWasEasy.png"  alt="QR Code" width="400" height="400">

The result:

![Example QR Code](https://getbarcode.app/qr/png/ThatWasEasy.png)

## Examples

To get a QR code image in SVG format which parses to `123456` when scanned using any QR code scanner, use any of the following URLs:

### SVG with suffix

> `https://getbarcode.app/qr/svg/123456.svg`

<img src="https://getbarcode.app/qr/svg/thisisansvg.svg" alt="thisisansvg" width="250" height="250">

### PNG URL without suffix

> `https://getbarcode.app/qr/png/123456`

<img src="https://getbarcode.app/qr/png/123456" alt="123456" width="250" height="250">

### SVG using query parameters

> `https://getbarcode.app/qr/svg/my-svg.svg?text=123456`

<img src="https://getbarcode.app/qr/svg/my-svg.svg?text=123456" alt="MyTextHere" width="250" height="250">

### PNG using query parameters

> `https://getbarcode.app/qr/png/123456.png`

<img src="https://getbarcode.app/qr/png/myq.png?text=MyTextHere" alt="MyTextHere" width="250" height="250">

<a href="https://getbarcode.app/qr/png/myq.png?text=MyTextHere" alt="Download PNG" target="_blank">Download PNG</a>

### PDF Format

> `https://getbarcode.app/qr/pdf/123456.pdf`

<embed src="https://getbarcode.app/qr/pdf/123456.pdf" width="500" height="375" 
 type="application/pdf">

<a href="https://getbarcode.app/qr/pdf/123456.pdf" alt="Download PDF" target="_blank">Download PDF</a>

## Formats

The following output file formats are supported:

- PNG
- SVG
- PDF
- EPS

## MIME Types

Our responses include the correct MIME type in the `Content-Type` HTTP header. This is particularly important for caching efficiently via CDNs. These are:

| File Type | MIME Type       |
| --------- | --------------- |
| SVG       | image/svg+xml   |
| PNG       | image/png       |
| PDF       | application/pdf |
| EPS       | image/eps       |

## Good to Know

- Whilst output is generated on-the-fly, caching of the result is encouraged and we cache all results in our CDN indefinitely to minimise repeat computation.

- Not keen on relying on a third-party service like https://getbarcode.app? We get it, and encourage you to deploy this project on your own domain using Cloudflare Workers in less than 5 minutes! Just click the magic button:

[![Deploy  to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/jontybrook/getbarcode-workers)
