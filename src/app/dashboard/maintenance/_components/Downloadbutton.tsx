'use client';
import React from 'react';
import { Plus } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Downloadbutton() {
  const downloadPdf = () => {
    const pdfUrl = '/SAZ.pdf'; // Path to your PDF in the public directory

    // Create a temporary link element
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'MaintainanceReport.pdf'; // Set the desired filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Clean up the temporary element
  };

  return (
    <Button className='text-xs md:text-sm' onClick={downloadPdf}>
      <Plus className='mr-2 h-4 w-4' /> Download Reports
    </Button>
  );
}
