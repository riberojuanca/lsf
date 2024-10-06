import { revalidateTag } from "next/cache";

export default async function GET() {
  revalidateTag("positions");
  return Response.json({ revalidated: true });
}
