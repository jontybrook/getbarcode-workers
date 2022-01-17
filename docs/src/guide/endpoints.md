# Endpoints

## /qr/\*\*

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
