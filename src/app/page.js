"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Link from 'next/link';


export default function Home() {
  const { toast } = useToast();
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const handleContinue = () => {
    console.log("Continue button clicked");
    toast({
      title: "Form Submitted Successfully",
      description: "Your form data has been submitted successfully.",
      action: <ToastAction altText="Close">Close</ToastAction>,
      duration: 1000, 
    });
    setPopoverOpen(false);
  };

  const handleOpen = () => {
    setPopoverOpen(true);
  };

  const handleClose = () => {
    setPopoverOpen(false);
  };
  
  const [formData, setFormData] = useState({
    totalAmount: "",
    netAmount: "",
    totalTaxAmount: "",
    invoiceId: "",
    currency: "",
    supplierName: "",
    supplierPhone: "",
    PaymentTerms: "",
    ReceiverName: "",
    ShipToAddress: "",
    SupplierAddress: "",
    AddressBlock: "",
    Street: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  
  const [documents, setDocuments] = useState([
    { id: 1, name: "Document 1", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
    { id: 2, name: "Document 2", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
    { id: 3, name: "Document 3", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
    { id: 4, name: "Document 4", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf"},
    { id: 5, name: "Document 5", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
    { id: 6, name: "Document 6", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
    { id: 7, name: "Document 7", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
    { id: 8, name: "Document 8", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
    { id: 9, name: "Document 9", url: "https://www.clickdimensions.com/links/TestPDFfile.pdf" },
  ]);

  const totalPages = Math.ceil(documents.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div class="mb-16">
      <nav
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
        }}
        className="h-24"
      >
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li
            style={{
              marginRight: "20px",
              textAlign: "left",
              marginTop: "10px",
              fontSize: "36px",
            }}
          >
            <a href="#">Sirma Business Consulting</a>
          </li>

          <li style={{ marginRight: "20px" }}>
            <a href="#"></a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </nav>
      <div>
     
    </div>

      <div style={{ display: "flex" }}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={60}>
            <div style={{ width: "40%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                
                <div style={{ flex: 1 }}>
                  {documents.map((document, index) => (
                    <div
                      key={document.id}
                      style={{
                        display: index === currentPage ? "block" : "none",
                      }}
                    >
                      <h2
                        style={{
                          textAlign: "justify",
                          marginTop: "15px",
                          marginBottom: "20px",
                          marginLeft: "100px",
                          fontSize: "24px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {document.name}
                      </h2>
                      <iframe
                        src={document.url}
                        width="200%"
                        height="500px"
                        title={document.name}
                        style={{
                          marginLeft: "100px",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                          backgroundColor: "#f8f8f8",
                          padding: "10px",
                        }}
                      ></iframe>
                    </div>
                  ))}
                </div>
               
                <div className="flex mt-24 ml-32">
                  <a
                    href="#"
                    className={`px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md ${
                      currentPage === 0
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } dark:bg-gray-800 dark:text-gray-600`}
                    onClick={handlePreviousPage}
                  >
                    <div className="flex items-center -mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-1 rtl:-scale-x-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        />
                      </svg>
                      <span className="mx-1">previous</span>
                    </div>
                  </a>
                  {Array.from({ length: totalPages }, (_, index) => (
                  <a
                  key={index}
                  href="#"
                  className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform rounded-md ${
                    currentPage === index ? "bg-blue-500 text-white" : "bg-white text-gray-500"
                  } sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}
                  onClick={() => handlePageClick(index)}
                >
                  {index + 1}
                </a>
                  ))}
                  <a
                    href="#"
                    className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md ${
                      currentPage === totalPages - 1
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}
                    onClick={handleNextPage}
                  >
                    <div className="flex items-center -mx-1">
                      <span className="mx-1">Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-1 rtl:-scale-x-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40}>
            <div style={{ width: "60%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "2rem",
                }}
                className="mr-60"
              >
                <form
                  onSubmit={handleSubmit}
                  style={{ width: "50%", padding: "20px" }}
                >
                  <label>
                    <div className="whitespace-nowrap"> Total Amount:</div>
                    <input
                      type="text"
                      name="totalAmount"
                      value={formData.totalAmount}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap">Net Amount:</div>

                    <input
                      type="text"
                      name="netAmount"
                      value={formData.netAmount}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Total Tax Amount</div>
                    <input
                      type="text"
                      name="totalTaxAmount"
                      value={formData.totalTaxAmount}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Invoice ID:</div>
                    <input
                      type="text"
                      name="invoiceId"
                      value={formData.invoiceId}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Invoice Type:</div>
                    <input
                      type="text"
                      name="invoicetype"
                      value={formData.invoicetype}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Currency:</div>
                    <input
                      type="text"
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Supplier Name:</div>
                    <input
                      type="text"
                      name="suppliername"
                      value={formData.suppliername}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Supplier Phone:</div>
                    <input
                      type="text"
                      name="supplierphone"
                      value={formData.supplierphone}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Payment Terms:</div>
                    <input
                      type="text"
                      name="paymentterms"
                      value={formData.paymentterms}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Receiver Name:</div>
                    <input
                      type="text"
                      name="receivername"
                      value={formData.receivername}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Ship To Address:</div>
                    <input
                      type="text"
                      name="shiptoaddress"
                      value={formData.shiptoaddress}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Supplier Address:</div>
                    <input
                      type="text"
                      name="supplieraddress"
                      value={formData.supplieraddress}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Address Block:</div>
                    <input
                      type="text"
                      name="addressblock"
                      value={formData.addressblock}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <label>
                    <div className="whitespace-nowrap"> Street:</div>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        marginBottom: "10px",
                      }}
                      className="w-96"
                    />
                  </label>
                  <br />
                  <div>
                  
                    <Button
                      className="w-96"
                      onClick={handleOpen}
                      style={{ border: "1px solid black", padding: "5px" }}
                    >
                      Submit
                    </Button>
                    {isPopoverOpen && (
                      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="bg-white p-8 rounded-md">
                          <h2 className="text-xl font-bold mb-4">
                            Are you absolutely sure?
                          </h2>
                          <p className="text-gray-500 mb-4 cursor-pointer hover:underline">
                            This action cannot be undone. This will permanently
                            submit your data into our servers.
                          </p>

                          <div className="flex justify-end">
                            <Button
                              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md mr-2"
                              onClick={handleClose}
                            >
                              Cancel
                            </Button>
                            <div>
                              <div>
                                <Button
                                  className="bg-blue-500 text-black px-3 py-1 rounded-md"
                                  onClick={handleContinue}
                                >
                                  Continue
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link href="/submit-details">
                  <div className="mt-8 items-center justify-center text-center w-96 inline-block px-6 py-3 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer">
  Move back
</div>

                    </Link>
                </form>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
    </div>
  );
}
