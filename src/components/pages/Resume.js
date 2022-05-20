import React from 'react';
import Pdf from "./Assets/LisaCRGunn.pdf";

export default function Resume() {
    return (
      <div>
        <a href={Pdf} target = "_blank" >Download Pdf</a>
      </div>
    );
  }