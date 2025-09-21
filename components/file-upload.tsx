"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { FileIcon, FileType, X } from "lucide-react";

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
  const urlWithoutQuery = value?.split("?")[0];
  const isPdf = urlWithoutQuery?.toLowerCase().endsWith(".pdf");
   if (value && isPdf) {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
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

