import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { type, mode, data } = await req.json();

  try {
    let result: any;

    switch (type) {
      case "hex":
        result = mode === "encode" ? "0x" + Buffer.from(data, "utf8").toString("hex") : Buffer.from(data.replace(/^0x/, ""), "hex").toString();
        break;

      case "base64":
        result = mode === "encode" ? Buffer.from(data).toString("base64") : Buffer.from(data, "base64").toString();
        break;

      case "utf8":
        result = mode === "encode" ? Buffer.from(data, "utf8").toString("hex") : Buffer.from(data, "hex").toString("utf8");
        break;

      case "keccak256":
        result = (await import("ethers")).keccak256(Buffer.from(data));
        break;

      case "sha256":
        result = (await import("crypto")).createHash("sha256").update(data).digest("hex");
        break;

      case "sha3":
        result = (await import("crypto")).createHash("sha3-256").update(data).digest("hex");
        break;

      case "abi":
        const ethers = await import("ethers");
        result = ethers.AbiCoder.defaultAbiCoder().encode(["string"], [data]);
        break;

      case "cid":
        const { CID } = await import("multiformats");
        const { sha256: mfsha256 } = await import("multiformats/hashes/sha2");
        const bytes = new TextEncoder().encode(data);
        const hash = await mfsha256.digest(bytes);
        result = CID.create(1, 0x55, hash).toString();
        break;

      default:
        result = "Codec tidak dikenal";
    }

    return NextResponse.json({ result });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
