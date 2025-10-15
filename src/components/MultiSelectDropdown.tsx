import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from './icons';

interface MultiSelectDropdownProps {
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MultiSelectDropdown({ 
  options, 
  selectedValues, 
  onChange, 
  placeholder = 'Select options',
  disabled = false 
}: MultiSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    if (disabled) return;
    
    if (option === 'All') {
      if (selectedValues.includes('All') || selectedValues.length === options.length - 1) {
        onChange([]);
      } else {
        onChange(['All']);
      }
    } else {
      let newValues = selectedValues.filter(v => v !== 'All');
      if (newValues.includes(option)) {
        newValues = newValues.filter(v => v !== option);
      } else {
        newValues = [...newValues, option];
      }
      onChange(newValues);
    }
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) {
      return placeholder;
    }
    if (selectedValues.includes('All')) {
      return 'All';
    }
    return selectedValues.join(', ');
  };

  const isOptionSelected = (option: string) => {
    if (option === 'All') {
      return selectedValues.includes('All') || selectedValues.length === options.length - 1;
    }
    return selectedValues.includes(option) || selectedValues.includes('All');
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] text-foreground caption appearance-none cursor-pointer flex items-center justify-between ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <span className={selectedValues.length === 0 ? 'text-muted-foreground' : 'text-foreground'}>
          {getDisplayText()}
        </span>
        <ChevronDown className={`w-[16px] h-[16px] text-muted-foreground transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-[4px] bg-white border border-border rounded-[4px] shadow-sm max-h-[200px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              className="w-full px-[12px] py-[8px] flex items-center gap-[8px] hover:bg-accent transition-colors text-left"
            >
              <div className={`w-[16px] h-[16px] border-2 rounded-[2px] flex items-center justify-center ${
                isOptionSelected(option) 
                  ? 'bg-[#0077cc] border-[#0077cc]' 
                  : 'border-muted-foreground'
              }`}>
                {isOptionSelected(option) && (
                  <Check className="w-[12px] h-[12px] text-white" />
                )}
              </div>
              <span className="caption text-foreground">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
