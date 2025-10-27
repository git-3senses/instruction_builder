import { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-3ai8sgr7vq';
import svgPathsInfo from '../imports/svg-y5prg77aw1';
import { Snackbar } from './Snackbar';

type UploadState = 'initial' | 'uploading' | 'success' | 'error';

interface UploadDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadComplete?: (file: File) => void;
}

export function UploadDrawer({ isOpen, onClose, onUploadComplete }: UploadDrawerProps) {
  const [uploadState, setUploadState] = useState<UploadState>('initial');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [recordCount, setRecordCount] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    // Validate file type and size
    const validTypes = ['.xls', '.xlsx'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!validTypes.includes(fileExtension)) {
      setUploadState('error');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setUploadState('error');
      return;
    }

    setSelectedFile(file);
    setUploadState('uploading');
    simulateUpload();
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setUploadState('success');
        // Simulate record count (in real app, parse the file to get actual count)
        setRecordCount(Math.floor(Math.random() * 900) + 100); // Random count between 100-999
      }
    }, 300);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadState('initial');
    setUploadProgress(0);
    setRecordCount(0);
  };

  const handleUploadFile = () => {
    if (selectedFile && onUploadComplete) {
      onUploadComplete(selectedFile);
    }
    
    // Show snackbar
    setShowSnackbar(true);
    
    // Close drawer
    handleClose();
    
    // Auto-hide snackbar after 3 seconds
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  const handleClose = () => {
    setUploadState('initial');
    setUploadProgress(0);
    setSelectedFile(null);
    setRecordCount(0);
    setIsDragging(false);
    onClose();
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={handleClose}
          />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[480px] bg-white shadow-[-8px_0px_10px_0px_rgba(0,0,0,0.05),-1px_0px_1px_0px_rgba(0,0,0,0.1)] z-50 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
          <div className="flex gap-[8px] items-start px-[24px] py-[16px]">
            <div className="flex-1 flex gap-[8px] items-center min-h-[32px]">
              <h3 className="h3-component text-foreground">Upload</h3>
            </div>
            <div className="flex gap-[8px] items-start">
              <button
                onClick={handleClose}
                className="p-[4px] hover:bg-accent rounded-[4px] transition-colors"
              >
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.pc3e4b00} fill="#69737B" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto">
          <div className="p-[24px] flex flex-col gap-[16px]">
            {/* Upload Area */}
            <div
              className={`bg-white rounded-[8px] border border-dashed ${
                isDragging ? 'border-primary bg-primary/5' : 'border-[#b0b9c0]'
              } transition-colors`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="p-[24px] flex flex-col gap-[8px] items-center">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p181d1a80} fill="#69737B" fillRule="evenodd" />
                </svg>
                <div className="flex flex-col gap-[8px] items-start text-center w-full">
                  <p className="caption text-foreground w-full">
                    <span>Drag your file here or </span>
                    <button
                      onClick={handleBrowseClick}
                      className="text-primary hover:underline"
                    >
                      browse
                    </button>
                  </p>
                  <p className="text-muted-foreground w-full" style={{ fontSize: '13px', lineHeight: '16.25px', letterSpacing: '-0.065px' }}>
                    Supports up to 10MB of XLS or XLSX
                  </p>
                </div>
              </div>
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".xls,.xlsx"
              onChange={handleFileInputChange}
              className="hidden"
            />

            {/* Upload File Status */}
            {selectedFile && uploadState !== 'success' && (
              <div className="bg-white py-[16px] flex flex-col gap-[12px]">
                <div className="flex gap-[24px] items-center">
                  {/* Left Content */}
                  <div className="flex-1 flex gap-[12px] items-center">
                    {/* File Thumbnail */}
                    <div className="bg-[#f7f7f7] p-[8px] rounded-[4px]">
                      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path 
                          clipRule="evenodd" 
                          d={svgPathsInfo.p30530900}
                          fill="#69737B" 
                          fillRule="evenodd" 
                        />
                      </svg>
                    </div>
                    
                    {/* File Info */}
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <p className="caption text-foreground">{selectedFile.name}</p>
                      <p className="text-muted-foreground" style={{ fontSize: '13px', lineHeight: '16.25px', letterSpacing: '-0.065px' }}>
                        {uploadState === 'uploading' && `${uploadProgress}%`}
                        {uploadState === 'error' && 'Upload failed'}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={handleRemoveFile}
                    className="p-[4px] hover:bg-accent rounded-[4px] transition-colors"
                  >
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPathsInfo.pc3e4b00} fill="#69737B" fillRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="h-[4px] bg-[#dde3e7] rounded-[9px] overflow-hidden">
                  <div
                    className={`h-full rounded-[23px] transition-all duration-300 ${
                      uploadState === 'error' ? 'bg-destructive' : 'bg-[#eb9600]'
                    }`}
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Upload Success - File Info with Record Count */}
            {selectedFile && uploadState === 'success' && (
              <div className="bg-white py-[16px] flex flex-col gap-[12px]">
                <div className="flex gap-[24px] items-center">
                  {/* Left Content */}
                  <div className="flex-1 flex gap-[12px] items-center">
                    {/* File Thumbnail */}
                    <div className="bg-[#f7f7f7] p-[8px] rounded-[4px]">
                      <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                        <path 
                          clipRule="evenodd" 
                          d={svgPathsInfo.p30530900}
                          fill="#69737B" 
                          fillRule="evenodd" 
                        />
                      </svg>
                    </div>
                    
                    {/* File Info with Record Count */}
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <p className="caption text-foreground">{selectedFile.name}</p>
                      <p className="text-muted-foreground" style={{ fontSize: '13px', lineHeight: '16.25px', letterSpacing: '-0.065px' }}>
                        {recordCount} records found.
                      </p>
                    </div>
                  </div>

                  {/* Actions - Trash Icon */}
                  <button
                    onClick={handleRemoveFile}
                    className="p-[4px] hover:bg-accent rounded-[4px] transition-colors"
                  >
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPathsInfo.p268f4800} fill="#69737B" fillRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
          <div className="px-[24px] py-[16px] flex justify-end">
            <button
              onClick={handleUploadFile}
              disabled={uploadState !== 'success'}
              className={`px-[24px] py-[8px] rounded-[4px] caption transition-colors ${
                uploadState === 'success'
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              Upload File
            </button>
          </div>
        </div>
      </div>
        </>
      )}

      {/* Snackbar - Render independently of drawer state */}
      <Snackbar
        message="Table updated successfully."
        isVisible={showSnackbar}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}
