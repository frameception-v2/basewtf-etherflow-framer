import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiYmFzZXd0Zi1ldGhlcmZsb3ctZnJhbWVyLnZlcmNlbC5hcHAifQ",
      signature: "MHg4NzhjZmQ1M2IxMjQ0ZmNkZGFhYWZlNzdiOTQ3YTU3NmVmZWQzYWJhYzdhMTllMzNlZWNhZGI4YmE1NmQ5MjgxNDc1YTFlYzE1NWM5OWVmYTAzY2ViZDE3MzA2NmUyODNlMmM4ODg2NDJhZGE0MTNhMTEwNTQyYzhhODMzMzg4YTFi"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
