import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("positions");
  return Response.json({ revalidated: true });
}
