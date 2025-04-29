import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Google Drive PDF URL (view link with proper embed setup)
  const resumeUrl = "/resume.pdf";

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("Resume download started", {
      description: "Your download should begin shortly",
    });

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open(resumeUrl);
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    } else {
      toast("Unable to open print dialog", {
        description: "Your browser might be blocking popups",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h1 className="page-title">My Resume</h1>
          <div className="flex gap-2">
            <Button onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload} // Prevent immediate download
            >
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </a>
          </div>
        </div>

        {/* Displaying the PDF using an iframe */}
        <div className="content-tile">
          <div className="flex justify-center">
            <iframe
              src="/resume.pdf"
              width="100%"
              height="800px"
              frameBorder="0"
              title="Resume"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
