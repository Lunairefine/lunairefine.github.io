import { NextResponse } from "next/server";

export async function POST(req: Request) {

  return NextResponse.json({
    image: "https://raw.githubusercontent.com/Lunairefine/lunairefine.github.io/refs/heads/main/app/components/assets/frame.png",
    buttons: [
      {
        label: "Explore More",
        action: "post"
      },
      {
        label: "Lunairefine@webased",
        action: "link",
        target: "https://lunairefine.vercel.app"
      }
    ]
  });
}
