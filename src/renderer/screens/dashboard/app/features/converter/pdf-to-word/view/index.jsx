import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Upload,
  FileText,
  CheckCircle,
  X,
  Loader2,
  AlertTriangle,
  Settings,
} from 'lucide-react';
import SkeletonText from '../../../../../../../components/skeleton/text';
import { ErrorLog } from '../../../../../../../components/error';

export default function Screen() {
  const [version, setVersion] = useState('');
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [conversionResult, setConversionResult] = useState(null);

  const [certPath, setCertPath] = useState(null);
  const [certPassword, setCertPassword] = useState('');
  const [watermark, setWatermark] = useState('');
  const [signPdf, setSignPdf] = useState(false);

  const [reason, setReason] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  const fileInputRef = useRef(null);

  // ambil versi LibreOffice
  useEffect(() => {
    window.electronAPI.getLibreVersion().then(setVersion).catch(console.error);

    // dengarkan progress dari main process
    window.electronAPI.onConvertProgress((data) => {
      setProgress(data.value);
      setProgressMessage(data.message);
    });
  }, []);

  const handleUploadCert = async () => {
    const result = await window.electronAPI.selectCertFile();
    if (result) setCertPath(result);
  };

  const startConversion = async () => {
    setIsConverting(true);
    setProgress(0);
    setConversionResult(null);
    setProgressMessage('');

    try {
      const results = await window.electronAPI.uploadFile({
        action: 'pdf-to-word',
        options: {
          watermark,
          signPdf,
          certPath,
          certPassword,
          pdf: false
        },
        placeholder: {
          reason: reason || 'Document verification',
          contactInfo: contactInfo || 'info@yourcompany.com',
          name: companyName || 'Your Company Name',
          location: location || 'Indonesia',
        },
      });
      if (!results) return;

      setConversionResult(results);

      ErrorLog({
        message : "Convert Successfully"
      })
    } catch (err) {
      console.error(err);
      ErrorLog({
        message : error.message
      })
    } finally {
      setIsConverting(false);
      setProgress(100);
    }
  };

  const resetAll = () => {
    setFiles([]);
    setProgress(0);
    setProgressMessage('');
    setConversionResult(null);
  };

  return (
    <>
      <div className="container mx-auto">
        <section className="container mx-auto">
          <div className="border rounded-3xl p-8 md:p-10">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-3">
              Convert
            </div>

            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-4">
              PDF to WORD
            </h1>

            <p className="text-lg font-normal text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
              Built on the{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Flamecore Cloud
              </span>{' '}
              ecosystem — a conversion engine that gives you total freedom. No
              file size limits, no upload restrictions, and no internet
              dependency. Your documents stay private and secure because
              everything runs locally on your device.
            </p>

            <button
              onClick={startConversion}
              className="cursor-pointer px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Open Source
            </button>
          </div>
        </section>

        {conversionResult && (
          <div className=" p-8 md:p-10 rounded-3xl border my-4">
            <p className="text-2xl font-bold mb-4">Conversion complete</p>
            {conversionResult.map((item, index) => {
              return (
                <div key={index} className="md:flex items-center gap-4 text-sm">
                  <p className="flex-1">
                    Input:{' '}
                    <span className="text-blue-400">{item.input}</span>
                  </p>
                  <p className="flex-1">
                    Output:{' '}
                    <span className="text-green-500">{item.output}</span>
                  </p>
                </div>
              );
            })}
            <button
              onClick={resetAll}
              className="mt-4 bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg text-sm"
            >
              Convert another file
            </button>
          </div>
        )}

        {isConverting && (
          <div className="bg-white dark:bg-gray-900 fixed inset-0 z-100 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-3 inline-block">
                <SkeletonText />
              </div>
              <p className="text-sm">{progressMessage && progressMessage}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
