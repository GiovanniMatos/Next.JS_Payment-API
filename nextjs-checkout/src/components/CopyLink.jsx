"use client";

import { CIcon } from '@coreui/icons-react';
import { cilCopy, cilShareAlt } from '@coreui/icons';
import { useState } from 'react';

export default function CopyLink(){
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
      if (!navigator.clipboard) {
        // Handle fallback for older browsers
        return;
      }
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy text:',   
        err);
        });
    };
  
    const handleClick = () => {
      const textToCopy = linkProduct; 
      handleCopy(textToCopy);
      setCopied(true); 
    };
    const linkProduct = "something here will be copied"; 

    return(
        <>
        <div className="flex">
            <h1 className="font-bold text-2xl mr-2">Share</h1>
            <CIcon icon={cilShareAlt} className="w-6"/>
        </div>
        <div className="flex bg-gray-800 pt-2 pb-2 lg:w-[40%]">
            <input type="text"
            defaultValue={linkProduct}
            className="ml-2 text-lg pl-1 text-black rounded-l-sm" />

            <button onClick={handleClick} className="pr-2 pt-2 pb-2 rounded-r-sm bg-orange-600 flex">
                <h1 className="ml-4 font-bold">{copied ? 'Copied!' : 'Copy'}</h1>
                <CIcon icon={cilCopy} className="w-6"/>
            </button>
        </div>
        </>
    )
}