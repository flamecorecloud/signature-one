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
        action: 'ppt-to-pdf',
        options: {
          watermark,
          signPdf,
          certPath,
          certPassword,
          pdf: true
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
              PPT to PDF
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

        <div className="mt-4 space-y-3 border rounded-3xl p-8 md:p-10">
          <label className="block font-medium">Watermark (optional):</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            value={watermark}
            onChange={(e) => setWatermark(e.target.value)}
            placeholder="Example: Confidential"
          />

          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={signPdf}
              onChange={(e) => setSignPdf(e.target.checked)}
              className="
                mr-2
                  w-5 h-5
                  appearance-none
                  border border-gray-300 
                  rounded-md 
                  bg-white 
                  checked:bg-blue-600
                  checked:border-blue-600
                  dark:bg-gray-800
                  dark:border-gray-600 
                  dark:checked:bg-blue-500
                  cursor-pointer
                  relative
                  checked:before:content-['✓']
                  checked:before:absolute
                  checked:before:text-white
                  checked:before:text-sm
                  checked:before:left-[3px]
                  checked:before:top-[-1.3px]
              "
            />
            <label>Sign PDF</label>
          </div>

          {signPdf && (
            <>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={handleUploadCert}
                  className="px-3 py-2 border text-sm rounded-md"
                >
                  Select Certificate (.p12)
                </button>
                <span className="text-sm text-gray-400 truncate">
                  {certPath || 'No certificate selected'}
                </span>
              </div>

              <input
                type="password"
                className="w-full border rounded-lg px-3 py-2 mt-2"
                placeholder="Certificate password"
                value={certPassword}
                onChange={(e) => setCertPassword(e.target.value)}
              />

              <div className="grid md:grid-cols-2 gap-3 mt-4">
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2"
                  placeholder="Reason (e.g. Document verification)"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                <input
                  type="email"
                  className="border rounded-lg px-3 py-2"
                  placeholder="Contact info (e.g. info@yourcompany.com)"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2"
                  placeholder="Company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2"
                  placeholder="Location (e.g. Indonesia)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

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
