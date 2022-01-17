# Quickstart

Just construct your source URL with the format you want your image to be and the payload you want the resulting QR code to parse to when scanned. URLs follow this format:

    https://getbarcode.app/qr/[image_type]/[qr_payload][optional_suffix]

Here's a simple HTML example sourcing a PNG QR directly from our CDN:

    <img src="https://getbarcode.app/qr/png/ThatWasEasy.png"  alt="QR Code" width="400" height="400">

Here's the result:

![Example QR Code](https://getbarcode.app/qr/png/ThatWasEasy.png)
