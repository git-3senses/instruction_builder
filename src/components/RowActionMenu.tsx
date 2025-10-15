import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface RowActionMenuProps {
  status: 'Active' | 'Inactive';
  onActivate?: () => void;
  onInactivate?: () => void;
  onAuditLog?: () => void;
  children: React.ReactNode;
}

export function RowActionMenu({ 
  status, 
  onActivate, 
  onInactivate, 
  onAuditLog, 
  children 
}: RowActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 4,
        right: window.innerWidth - rect.right
      });
    }
  }, [isOpen]);

  const handleAction = (action: () => void | undefined) => {
    if (action) {
      action();
    }
    setIsOpen(false);
  };

  return (
    <>
      <div ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>

      {isOpen && createPortal(
        <div 
          ref={menuRef}
          className="fixed z-[9999]"
          style={{
            top: `${position.top}px`,
            right: `${position.right}px`
          }}
        >
          <div className="bg-white relative rounded-[8px] w-[144px]">
            <div className="box-border flex flex-col items-start overflow-clip px-[4px] py-[8px]">
              {status === 'Inactive' ? (
                <button
                  onClick={() => handleAction(onActivate || (() => {}))}
                  className="h-[40px] relative rounded-[4px] w-full hover:bg-accent transition-colors"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border flex gap-[8px] h-[40px] items-center px-[12px] py-[12px] w-full">
                      <p className="text-foreground">Activate</p>
                    </div>
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => handleAction(onInactivate || (() => {}))}
                  className="h-[40px] relative rounded-[4px] w-full hover:bg-accent transition-colors"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border flex gap-[8px] h-[40px] items-center px-[12px] py-[12px] w-full">
                      <p className="text-foreground">Inactivate</p>
                    </div>
                  </div>
                </button>
              )}

              <button
                onClick={() => handleAction(onAuditLog || (() => {}))}
                className="h-[40px] relative rounded-[4px] w-full hover:bg-accent transition-colors"
              >
                <div className="flex flex-row items-center size-full">
                  <div className="box-border flex gap-[8px] h-[40px] items-center px-[12px] py-[12px] w-full">
                    <p className="text-foreground">Audit Log</p>
                  </div>
                </div>
              </button>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(23,24,26,0)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_8px_8px_0px_rgba(0,0,0,0.08),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
