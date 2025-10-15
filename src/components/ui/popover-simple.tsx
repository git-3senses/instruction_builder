import * as React from "react";
import { useState, useEffect, useRef } from "react";

interface PopoverProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

interface PopoverTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

interface PopoverContentProps {
  className?: string;
  align?: "start" | "center" | "end";
  children: React.ReactNode;
}

const PopoverContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement>;
}>({
  open: false,
  setOpen: () => {},
  triggerRef: { current: null },
});

export function Popover({ open: controlledOpen, onOpenChange, children }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block">
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({ asChild, children }: PopoverTriggerProps) {
  const { setOpen, triggerRef } = React.useContext(PopoverContext);
  
  const handleClick = () => {
    setOpen(true);
  };

  if (asChild && React.isValidElement(children)) {
    return (
      <div ref={triggerRef} onClick={handleClick}>
        {React.cloneElement(children as React.ReactElement<any>, {
          onClick: (e: React.MouseEvent) => {
            handleClick();
            (children as any).props?.onClick?.(e);
          }
        })}
      </div>
    );
  }

  return (
    <div ref={triggerRef} onClick={handleClick}>
      {children}
    </div>
  );
}

export function PopoverContent({ className = "", align = "start", children }: PopoverContentProps) {
  const { open, setOpen, triggerRef } = React.useContext(PopoverContext);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open, setOpen]);

  if (!open) return null;

  const alignmentClass = 
    align === "start" ? "left-0" : 
    align === "end" ? "right-0" : 
    "left-1/2 -translate-x-1/2";

  return (
    <div 
      ref={contentRef}
      className={`absolute top-full mt-2 z-50 bg-popover border border-border rounded-md shadow-lg ${alignmentClass} ${className}`}
    >
      {children}
    </div>
  );
}
