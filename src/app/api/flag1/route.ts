import { NextResponse } from "next/server";

export async function GET() {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    return NextResponse.json({ flag: "01000010 01100101 01110100 01110100 01100101 01110010 00100000 01101100 01110101 01100011 01101011 00100000 01101110 01100101 01111000 01110100 00100000 01110100 01101001 01101101 01100101" });
}