import { Router } from "itty-router";
import qr from "qr-image";

// Create express-like router using itty-router
const router = Router();

// GET QR code
router.get("/qr/:format/:payload", async ({ params, query }) => {
  let { format, payload } = params;
  const { text } = query; // Optional query string text will take precidence over params payload

  let mimeType = "";
  let fileExtension = "";
  switch (format) {
    case "svg":
      mimeType = "image/svg+xml";
      fileExtension = ".svg";
      break;
    case "eps":
      mimeType = "image/eps";
      fileExtension = ".eps";
      break;
    case "png":
      mimeType = "image/png";
      fileExtension = ".png";
      break;
    case "pdf":
      mimeType = "application/pdf";
      fileExtension = ".pdf";
      break;
  }

  let qrPayload = payload;
  if (text) {
    // If payload text query parameter is included in request, use that and ignore the file/URI path
    qrPayload = JSON.stringify(text);
  } else {
    // Otherwise we will take the payload for the QR code from the URL path
    // If the requested URL includes a file suffix (eg .svg), remove it from the payload of the resulting QR code
    if (qrPayload.endsWith(fileExtension)) {
      qrPayload = qrPayload.substr(0, qrPayload.length - 4);
    }
  }

  // Log
  console.log(
    `Generating QR code in ${format} format with payload ${qrPayload}`
  );

  // Generate the QR code
  const img = await qr.imageSync(qrPayload, { type: format });

  // Return response with relevant Content-Type header
  return new Response(img, { headers: { "Content-Type": mimeType } });
});

// 404 for everything else
router.all("*", () => new Response("Route not found", { status: 404 }));

// attach the router "handle" to the event handler
addEventListener("fetch", (event) =>
  event.respondWith(router.handle(event.request))
);
