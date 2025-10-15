import { useState } from 'react';
import { ChevronDown } from './icons';
import { Calendar } from './ui/calendar-simple';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover-simple';

interface DateColumnFilterProps {
  column: string;
  onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void;
  onSort?: (direction: 'asc' | 'desc' | null) => void;
}

export function DateColumnFilter({ 
  column, 
  onDateRangeChange,
  onSort 
}: DateColumnFilterProps) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [selectingStart, setSelectingStart] = useState(true);

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

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

    if (selectingStart) {
      setStartDate(date);
      setEndDate(null);
      setSelectingStart(false);
    } else {
      if (startDate && date < startDate) {
        // If end date is before start date, swap them
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
      setSelectingStart(true);
    }
  };

  const handleApply = () => {
    onDateRangeChange(startDate, endDate);
    setOpen(false);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    onDateRangeChange(null, null);
    setSelectingStart(true);
  };

  const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const displayText = () => {
    if (!startDate && !endDate) {
      return 'All dates';
    }
    if (startDate && !endDate) {
      return formatDate(startDate);
    }
    if (startDate && endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
    return 'All dates';
  };

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

      {/* Date Picker Dropdown */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="w-full h-[32px] px-[12px] py-[6px] bg-white border border-border rounded-[4px] flex items-center justify-between hover:bg-accent/30 transition-colors">
            <span className="caption text-foreground truncate">{displayText()}</span>
            <ChevronDown className="w-[14px] h-[14px] text-muted-foreground shrink-0 ml-[4px]" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex flex-col">
            {/* Header */}
            <div className="px-[16px] py-[12px] border-b border-border">
              <p className="caption text-foreground">
                {selectingStart ? 'Select start date' : 'Select end date'}
              </p>
              {startDate && (
                <p className="badge text-muted-foreground mt-[4px]">
                  From: {formatDate(startDate)}
                  {endDate && ` to ${formatDate(endDate)}`}
                </p>
              )}
            </div>

            {/* Calendar */}
            <div className="p-[8px]">
              <Calendar
                mode="single"
                selected={selectingStart ? startDate || undefined : endDate || undefined}
                onSelect={handleDateSelect}
                initialFocus
              />
            </div>

            {/* Actions */}
            <div className="px-[16px] py-[12px] border-t border-border flex gap-[8px] justify-end">
              <button
                onClick={handleClear}
                className="px-[16px] py-[6px] caption text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear
              </button>
              <button
                onClick={handleApply}
                className="px-[16px] py-[6px] bg-primary text-primary-foreground rounded-[4px] caption hover:opacity-90 transition-opacity"
              >
                Apply
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
