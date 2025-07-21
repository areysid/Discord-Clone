"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({
  onChange,
  value,
  endpoint,
}: FileUploadProps) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      {!value ? (
        <div className="rounded border">
          <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
              console.error(error);
            }}
            className="ut-upload-dropzone !h-32 !w-72 !min-h-0 !p-0.5"
            appearance={{
              button:
                "bg-blue-600 text-white hover:bg-blue-700 transition !py-2 !px-2 !text-xs mt-1",
              label: "text-xs text-gray-600",
              uploadIcon: "text-blue-500  px-2",
            }}
          />
        </div>
      ) : (
        <div className="relative w-24 h-24 mx-auto mt-2 ">
          <img
            src={value}
            alt="Uploaded"
            className="rounded-full w-24 h-24 object-cover border border-gray-300"
          />
          <button
            onClick={() => onChange("")}
            className="absolute top-[-8px] right-[-8px] bg-white border border-gray-300 rounded-full p-1 hover:bg-gray-100"
            aria-label="Remove image"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};
