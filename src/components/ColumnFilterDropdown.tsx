import { useState } from 'react';
import { Check, ChevronDown } from './icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover-simple';

interface ColumnFilterDropdownProps {
  column: string;
  values: string[];
  selectedValues: string[];
  onFilterChange: (values: string[]) => void;
  onSort?: (direction: 'asc' | 'desc' | null) => void;
}

export function ColumnFilterDropdown({ 
  column, 
  values, 
  selectedValues, 
  onFilterChange,
  onSort 
}: ColumnFilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

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

  const handleSort = () => {
    let newDirection: 'asc' | 'desc' | null = null;
    if (sortDirection === null) {
      newDirection = 'asc';
    } else if (sortDirection === 'asc') {
      newDirection = 'desc';
    } else {
      newDirection = null;
    }
    setSortDirection(newDirection);
    if (onSort) {
      onSort(newDirection);
    }
  };

  const displayText = selectedValues.length === 0 || selectedValues.length === uniqueValues.length
    ? 'All'
    : `${selectedValues.length} selected`;

  return (
    <div className="flex flex-col gap-[4px] w-full">
      {/* Column Header with Sort */}
      <div className="flex items-center justify-between">
        <label className="text-muted-foreground">{column}</label>
        {onSort && (
          <button
            onClick={handleSort}
            className="ml-[4px] p-[2px] hover:bg-accent rounded transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={sortDirection ? 'opacity-100' : 'opacity-50'}
            >
              <path
                d="M6 3L8 5H4L6 3Z"
                fill={sortDirection === 'asc' ? 'currentColor' : '#9BA4AB'}
                className="text-muted-foreground"
              />
              <path
                d="M6 9L4 7H8L6 9Z"
                fill={sortDirection === 'desc' ? 'currentColor' : '#9BA4AB'}
                className="text-muted-foreground"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Filter Dropdown */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="w-full h-[32px] px-[12px] py-[6px] bg-white border border-border rounded-[4px] flex items-center justify-between hover:bg-accent/30 transition-colors">
            <span className="caption text-foreground">{displayText}</span>
            <ChevronDown className="w-[14px] h-[14px] text-muted-foreground" />
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
                className="w-full h-[32px] px-[8px] py-[4px] bg-input-background border border-border rounded-[4px] caption text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                      <span className="caption text-foreground text-left flex-1 truncate">{value}</span>
                      {selectedValues.includes(value) && (
                        <Check className="w-[16px] h-[16px] text-primary shrink-0 ml-[8px]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
