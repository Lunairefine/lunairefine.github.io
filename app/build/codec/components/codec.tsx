"use client"
import { useState, useMemo } from "react";
import "dotenv/config";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const CODEC_OPTIONS = [
  { id: "base64", name: "Base64", type: "codec" },
  { id: "hex", name: "Hex", type: "codec" },
  { id: "utf8", name: "UTF-8 (Bytes)", type: "codec" },
  { id: "sha256", name: "SHA-256", type: "hash" },
  { id: "sha3-256", name: "SHA3-256", type: "hash" },
  { id: "keccak256", name: "Keccak256", type: "hash" },
  { id: "abi", name: "ABI Encoding/Decoding", type: "codec" },
  { id: "ipfs", name: "IPFS CID Builder/Decoder", type: "codec" }
];

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [selectedCodecId, setSelectedCodecId] = useState("base64");
  const [isLoading, setIsLoading] = useState(false);

  const placeholderText = useMemo(() => {
    switch (selectedCodecId) {
      case "base64":
        return 'Encode: "hello"\nDecode: "aGVsbG8="';
      case "hex":
        return 'Encode: "hello"\nDecode: "68656c6c6f"';
      case "utf8":
        return 'Encode: "hello"\nDecode: "104, 101, 108, 108, 111"';
      case "sha256":
      case "sha3-256":
      case "keccak256":
        return "Enter text to hash";
      case "abi":
        return "ABI Encode/Decode. Example: string";
      case "ipfs":
        return "Input text → generate/parse CID";
      default:
        return "Type here...";
    }
  }, [selectedCodecId]);

  const isHash = useMemo(() => {
    return CODEC_OPTIONS.find((c) => c.id === selectedCodecId)?.type === "hash";
  }, [selectedCodecId]);

  const safeOutput = (data: any) =>
    typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);

  const requestApi = async (action: "encode" | "decode") => {
    try {
      setIsLoading(true);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: input,
          codec: selectedCodecId,
          action,
          types: ["string"]
        })
      });
      const json = await res.json();
      setOutput(safeOutput(json.result || json.error));
    } catch (e: any) {
      setOutput("Error: " + e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black mt-10 p-6 text-white">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold">Web3 Codec Utility</h1>
        <select
          value={selectedCodecId}
          onChange={(e) => setSelectedCodecId(e.target.value)}
          className="w-full p-3 bg-gray-900 rounded-md"
        >
          {CODEC_OPTIONS.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholderText}
            disabled={isLoading}
            className="w-full h-40 p-3 bg-gray-800 rounded-md font-mono resize-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => requestApi("encode")}
            disabled={isLoading}
            className="p-3 bg-teal-600 rounded-md font-semibold hover:bg-teal-700 disabled:bg-gray-600"
          >
            {isHash ? "Hash" : "Encode"}
          </button>
          <button
            onClick={() => requestApi("decode")}
            disabled={isLoading || isHash}
            className="p-3 bg-teal-700 rounded-md font-semibold hover:bg-teal-800 disabled:opacity-40"
          >
            Decode
          </button>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Output</label>
          <textarea
            value={output}
            readOnly
            className="w-full h-48 p-3 bg-[#0B0F19] rounded-md font-mono text-green-400 resize-none"
            placeholder="Output will appear here..."
          />
        </div>
      </div>
    </div>
  );
}
