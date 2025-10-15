import { useState, useEffect } from 'react';
import { Check, ChevronDown, X } from './icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover-simple';

interface ColumnFilterProps {
  column: string;
  values: string[];
  selectedValues: string[];
  onFilterChange: (values: string[]) => void;
}

export function ColumnFilter({ column, values, selectedValues, onFilterChange }: ColumnFilterProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique values and sort them
  const uniqueValues = Array.from(new Set(values)).sort();

  // Filter values based on search term
  const filteredValues = uniqueValues.filter(value =>
    value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    onFilterChange(newSelectedValues);
  };

  const handleSelectAll = () => {
    onFilterChange(uniqueValues);
  };

  const handleClearAll = () => {
    onFilterChange([]);
  };

  const activeFilterCount = selectedValues.length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="inline-flex items-center gap-[4px] hover:bg-accent/50 p-[4px] rounded transition-colors relative">
          <label className="text-muted-foreground cursor-pointer">{column}</label>
          <ChevronDown className="w-[14px] h-[14px] text-muted-foreground" />
          {activeFilterCount > 0 && (
            <span className="absolute -top-[4px] -right-[4px] w-[16px] h-[16px] bg-primary rounded-full flex items-center justify-center">
              <span className="badge text-white text-[8px]">{activeFilterCount}</span>
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0" align="start">
        <div className="flex flex-col max-h-[400px]">
          {/* Header */}
          <div className="px-[12px] py-[8px] border-b border-border">
            <p className="caption text-foreground">Filter by {column}</p>
          </div>

          {/* Search */}
          <div className="px-[12px] py-[8px] border-b border-border">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[32px] px-[8px] py-[4px] bg-input-background border border-border rounded-[4px] caption text-foreground"
            />
          </div>

          {/* Actions */}
          <div className="px-[12px] py-[8px] border-b border-border flex gap-[8px]">
            <button
              onClick={handleSelectAll}
              className="caption text-primary hover:underline"
            >
              Select All
            </button>
            <span className="caption text-muted-foreground">|</span>
            <button
              onClick={handleClearAll}
              className="caption text-primary hover:underline"
            >
              Clear All
            </button>
          </div>

          {/* Options List */}
          <div className="overflow-y-auto flex-1">
            {filteredValues.length === 0 ? (
              <div className="px-[12px] py-[16px] text-center">
                <p className="caption text-muted-foreground">No results found</p>
              </div>
            ) : (
              <div className="py-[4px]">
                {filteredValues.map((value) => (
                  <button
                    key={value}
                    onClick={() => handleToggle(value)}
                    className="w-full px-[12px] py-[8px] flex items-center justify-between hover:bg-accent transition-colors"
                  >
                    <span className="caption text-foreground text-left flex-1">{value}</span>
                    {selectedValues.includes(value) && (
                      <Check className="w-[16px] h-[16px] text-primary" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
