import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "bcfce1847fcf3d9f85a8f3bd6b6aee8d";
const HOST = "https://roofcompare.com";

export async function GET() {
  return NextResponse.json({ key: INDEXNOW_KEY });
}

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "urls array is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "roofcompare.com",
        key: INDEXNOW_KEY,
        keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit URLs" },
      { status: 500 }
    );
  }
}
