import svgPaths from '../imports/svg-3ct3vftyrx';

interface SnackbarProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Snackbar({ message, isVisible, onClose }: SnackbarProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-[24px] left-1/2 -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-bottom-2">
      <div className="bg-[#172733] rounded-[4px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.2),0px_0px_1px_0px_rgba(0,0,0,0.25)]">
        <div className="box-border flex gap-[16px] items-start px-[16px] py-[12px]">
          {/* Left Content */}
          <div className="flex gap-[12px] items-start grow">
            {/* Icon */}
            <div className="flex gap-[10px] items-start px-0 py-[4px]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                  <path 
                    clipRule="evenodd" 
                    d={svgPaths.p1c2dc900} 
                    fill="#00AB61" 
                    fillRule="evenodd" 
                  />
                </svg>
              </div>
            </div>
            
            {/* Text */}
            <div className="flex flex-col justify-center min-h-[32px]">
              <p className="text-white" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                {message}
              </p>
            </div>
          </div>

          {/* Right Content - Close Button */}
          <div className="flex gap-[16px] items-center justify-end">
            <button
              onClick={onClose}
              className="flex flex-col items-center justify-center min-h-[32px] p-[4px] rounded-[4px] hover:bg-white/10 transition-colors"
            >
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path 
                  clipRule="evenodd" 
                  d={svgPaths.pc3e4b00} 
                  fill="white" 
                  fillRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
