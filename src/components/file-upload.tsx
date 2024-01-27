"use client";
import { OurFileRouter } from "@/api/uploadthing/core";
import { UploadDropzone } from "@uploadthing/react";
import { File, Trash } from "lucide-react";
import Image from "next/image";
import { UploadFileResponse } from "uploadthing/client";
import { IMG_MAX_LIMIT } from "./forms/category-form";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface ImageUploadProps {
    onChange?: any;
    onRemove: (value: UploadFileResponse[]) => void;
    value: UploadFileResponse[];
}

const FileUpload = ({
    onChange,
    onRemove,
    value,
}: ImageUploadProps) => {
    const { toast } = useToast();
    const onDeleteFile = (key: string) => {
        const files = value;
        let filteredFiles = files.filter((item) => item.key !== key);
        onRemove(filteredFiles);
    };
    const onUpdateFile = (newFiles: UploadFileResponse[]) => {
        onChange([...value, ...newFiles]);
    };
    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value && !!value.length &&
                    value?.map((item) => (
                        <div
                            key={item.key}
                            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
                        >
                            <div className="z-10 absolute top-2 right-2">
                                <Button
                                    type="button"
                                    onClick={() => onDeleteFile(item.key)}
                                    variant="destructive"
                                    size="sm"
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                            <div>
                                <Image
                                    fill
                                    className="object-cover"
                                    alt="Image"
                                    src={item.fileUrl || ""}
                                />
                            </div>
                        </div>
                    ))}
            </div>
            <div>
                {value && value.length < IMG_MAX_LIMIT && (
                    <UploadDropzone<OurFileRouter>
                        className="dark:bg-zinc-800 h-52 py-2 ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300"
                        endpoint="imageUploader"
                        config={{ mode: "auto", appendOnPaste: true }}
                        content={{
                            allowedContent({ isUploading }) {
                                if (isUploading)
                                    return (
                                        <>
                                            <p className="mt-2 text-sm text-slate-400 animate-pulse">
                                                Img Uploading...
                                            </p>
                                        </>
                                    );
                            },
                        }}
                        onClientUploadComplete={(res) => {
                            // Do something with the response
                            const data: UploadFileResponse[] | undefined = res;
                            if (data) {
                                onUpdateFile(data);
                            }
                        }}
                        onUploadError={(error: Error) => {
                            toast({
                                title: "Error",
                                variant: "destructive",
                                description: error.message,
                            });
                        }}
                        onUploadBegin={() => {
                            // Do something once upload begins
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default FileUpload;