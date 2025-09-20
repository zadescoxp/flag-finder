import { NextResponse } from "next/server";

export async function GET() {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    return NextResponse.json({ flag: "01100101 01110100 01100101 01110010 01101110 01100001 01101100 01011111 01100011 01101100 01101111 01100011 01101011" });
}