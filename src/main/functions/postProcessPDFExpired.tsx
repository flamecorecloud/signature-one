import { PDFDocument, PDFName, PDFString, PDFHexString } from 'pdf-lib';
import * as fs from 'fs';

export async function addExpiryVisualBlock(pdfDoc: PDFDocument, expiryDate: Date) {
  const jsCode = `
    var expiry = new Date("${expiryDate.toISOString()}");
    var now = new Date();
    if (now > expiry) {
      for (var i = 0; i < this.numPages; i++) {
        var pageBox = this.getPageBox("Crop", i);
        this.addAnnot({
          page: i,
          type: "Square",
          rect: pageBox,
          fillColor: color.white,
          strokeColor: color.white,
          author: "Expiry Script"
        });
      }
      app.alert("This document has expired and is no longer viewable.");
    }
  `;

  const jsAction = pdfDoc.context.obj({
    Type: PDFName.of('Action'),
    S: PDFName.of('JavaScript'),
    JS: PDFString.of(jsCode),
  });

  pdfDoc.catalog.set(PDFName.of('OpenAction'), jsAction);
  pdfDoc.setSubject('Expires on ' + expiryDate.toISOString());
}

// await addExpiryVisualBlock(pdfDoc, new Date('2025-10-21'));