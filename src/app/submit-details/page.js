"use client";

import { useState } from "react";
import Head from "next/head";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Tesseract from "tesseract.js";

export default function Submit() {
  const { toast } = useToast();
  const handleContinue = () => {
    console.log("Continue button clicked");
    toast({
      title: "Form Submitted Successfully",
      description: "Your form data has been submitted successfully.",
      action: <ToastAction altText="Close">Close</ToastAction>,
      duration: 1000,
    });
  };

  const [selectedOption, setSelectedOption] = useState("");

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...filesArray]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with upload type:", selectedOption);
    console.log("Uploaded files:", selectedFiles);
    setSelectedOption("");
    setSelectedFiles([]);
  };

  const handleReset = () => {
    setSelectedFiles([]);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 text-white p-4 h-24 ">
        <div className="flex items-center ">
          <div className="text-2xl font-bold mr-4">IMPACTO</div>
        </div>
        <div className="text-lg font-semibold">{`IMPACTO DOCUMENT PROCESSING SYSTEM [IDPS]`}</div>
      </div>
      <div className=" min-h-screen bg-gray-100">
        <Head>
          <title>Submit Details - IDPS</title>
        </Head>
        <div className="bg-white shadow-md rounded-lg p-8 h-screen ">
          <h1 className="text-2xl font-bold mb-4">Submit Details</h1>
          <div className="flex space-x-4 mb-4">
            <Dialog>
              <DialogTrigger>
                <button
                  className={`flex-1 p-4 text-center w-96 font-semibold ${
                    selectedOption === "Document"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  // onClick={() => handleOptionSelect("Document")}
                >
                  Document
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px] sm:max-h-[925px]">
                <DialogHeader>
                  <DialogTitle>Document Type</DialogTitle>
                  <DialogDescription>
                    Enter your document type here for more information
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="name"
                      className="text-right whitespace-nowrap	"
                    >
                      Document Name
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3 border border-black "
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="username"
                      className="text-right whitespace-nowrap	"
                    >
                      Document Type
                    </Label>
                    <Input
                      id="username"
                      className="col-span-3 border border-black "
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="h-10 rounded-md text-xs px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                    onClick={handleContinue}
                  >
                    Save changes
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <button
                  className={`flex-1 p-4 text-center w-96 font-semibold ${
                    selectedOption === "Invoice"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleOptionSelect("Invoice")}
                >
                  Invoice
                </button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Invoice Type</DialogTitle>
                  <DialogDescription>
                    Enter your Invoice type here for more information
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="name"
                      className="text-right whitespace-nowrap"
                    >
                      Invoice Name
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3 border border-black"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="username"
                      className="text-right whitespace-nowrap	"
                    >
                      Invoice Type
                    </Label>
                    <Input
                      id="username"
                      className="col-span-3 border border-black"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="h-10 rounded-md text-xs px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                    onClick={handleContinue}
                  >
                    Save changes
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <button
                  className={`flex-1 p-4 text-center w-96 font-semibold ${
                    selectedOption === "Visiting Card"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleOptionSelect("Visiting Card")}
                >
                  Visiting Card
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Document Type</DialogTitle>
                  <DialogDescription>
                    Enter your document type here for more information
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Document Name
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3 border border-black"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Document Type
                    </Label>
                    <Input
                      id="username"
                      className="col-span-3 border border-black"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="h-10 rounded-md text-xs px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                    onClick={handleContinue}
                  >
                    Save changes
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <button
                  className={`flex-1 p-4 text-center w-80 font-semibold ${
                    selectedOption === "Other"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleOptionSelect("Other")}
                >
                  Other
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Document Type</DialogTitle>
                  <DialogDescription>
                    Enter your document type here for more information
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Document Name
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3 border border-black"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Document Type
                    </Label>
                    <Input
                      id="username"
                      className="col-span-3 border border-black"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="h-10 rounded-md text-xs px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                    onClick={handleContinue}
                  >
                    Save changes
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-full">
              <label
                htmlFor="fileInput"
                className="block font-medium text-gray-700"
              >
                Upload File:
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex flex-col items-center h-64 justify-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="fileInput"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="fileInput"
                          name="fileInput"
                          type="file"
                          accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
                          className="sr-only"
                          onChange={handleFileChange}
                          multiple
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, JPG, PNG up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {selectedFiles.length > 0 && (
              <div className="mb-4 w-full">
                <h3 className="font-semibold">Preview:</h3>
                <div className="flex flex-wrap justify-center">
                  {selectedFiles.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={`Uploaded file ${index + 1}`}
                      className="mt-2 max-w-full mr-2"
                    />
                  ))}
                </div>
              </div>
            )}
          </form>

          <div className="py-12 flex justify-center space-x-4">
            <button
              type="submit"
              className="w-48 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Bulk image Upload
            </button>
            <Link href="/">
              <button
                type="submit"
                className="w-48 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </Link>

            <button
              type="submit"
              className="w-48 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Extract file in text
            </button>

            <button
              type="submit"
              className="w-48 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Extract file in Excel
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-48 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
