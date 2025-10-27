import { useState } from 'react';
import { Eye, MoreVertical, Pencil, Upload } from './icons';
import { GLBeCodeModal } from './GLBeCodeModal';
import { RowActionMenu } from './RowActionMenu';
import { ColumnFilterDropdown } from './ColumnFilterDropdown';
import { DateColumnFilter } from './DateColumnFilter';
import { UploadDrawer } from './UploadDrawer';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination-simple';

// Mock data for GL BE Codes
const mockGLBEData = [
  {
    id: '1',
    beCode: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU',
    description: 'Unhedged COI Lock Back to original SGD amount for TMU FX Gain',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '2',
    beCode: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU',
    description: 'Unhedged COI Lock Back to original SGD amount for TMU FX Loss',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '3',
    beCode: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_BR',
    description: 'Unhedged COI Lock Back to original SGD amount for Branch FX Gain',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '4',
    beCode: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_BR',
    description: 'Unhedged COI Lock Back to original SGD amount for Branch FX Loss',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '5',
    beCode: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_ASSOC',
    description: 'Unhedged COI Lock Back to original SGD amount for Associate FX Gain',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '6',
    beCode: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_ASSOC',
    description: 'Unhedged COI Lock Back to original SGD amount for Associate FX Loss',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Inactive',
  },
  {
    id: '7',
    beCode: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_SUBSI',
    description: 'Unhedged COI Lock Back to original SGD amount for Subsidiary FX Gain',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '8',
    beCode: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_SUBSI',
    description: 'Unhedged COI Lock Back to original SGD amount for Subsidiary FX Loss',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '9',
    beCode: 'SG_HAWK_CR_HEDGEINCFXDIFFGAIN_BR',
    description: 'Hedge Inception FX Difference Gain for Branch',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '10',
    beCode: 'SG_HAWK_DR_HEDGEINCFXDIFFLOSS_BR',
    description: 'Hedge Inception FX Difference Loss for Branch',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '11',
    beCode: 'SG_HAWK_CR_HEDGEINCFXDIFFGAIN_ASSOC',
    description: 'Hedge Inception FX Difference Gain for Associate',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '12',
    beCode: 'SG_HAWK_DR_HEDGEINCFXDIFFLOSS_ASSOC',
    description: 'Hedge Inception FX Difference Loss for Associate',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Inactive',
  },
  {
    id: '13',
    beCode: 'SG_HAWK_DR_FXPLTOCFHRESERVEFCTRFXGAIN',
    description: 'FX P&L to CFH Reserve FCTR FX Gain',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '14',
    beCode: 'SG_HAWK_CR_FXPLTOCFHRESERVEFCTRFXLOSS',
    description: 'FX P&L to CFH Reserve FCTR FX Loss',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '15',
    beCode: 'SG_HAWK_DR_FXPLTOCFHRESERVECOHFXGAIN',
    description: 'FX P&L to CFH Reserve COH FX Gain',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '16',
    beCode: 'SG_HAWK_CR_FXPLTOCFHRESERVECOHFXLOSS',
    description: 'FX P&L to CFH Reserve COH FX Loss',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '17',
    beCode: 'SG_HAWK_CR_AMORTINITSWAPFCTRTONIIINCOME_FCY/SGD_SGD_lending',
    description: 'Amortization Initial Swap FCTR to NII Income FCY/SGD SGD Lending',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '18',
    beCode: 'SG_HAWK_CR_AMORTINITSWAPFCTRTONIIINCOME_FCY/SGD_SGD_borrowing',
    description: 'Amortization Initial Swap FCTR to NII Income FCY/SGD SGD Borrowing',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '19',
    beCode: 'SG_HAWK_CR_AMORTINITSWAPCOHTONIIINCOME_USD/SGD_SGD_lending',
    description: 'Amortization Initial Swap COH to NII Income USD/SGD SGD Lending',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Inactive',
  },
  {
    id: '20',
    beCode: 'SG_HAWK_CR_AMORTINITSWAPCOHTONIIINCOME_USD/SGD_SGD_borrowing',
    description: 'Amortization Initial Swap COH to NII Income USD/SGD SGD Borrowing',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '21',
    beCode: 'SG_HAWK_CR_AMORTINITSWAPCOHTONIIINCOME_USD/SGD_USD_lending',
    description: 'Amortization Initial Swap COH to NII Income USD/SGD USD Lending',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '22',
    beCode: 'SG_HAWK_CR_AMORTINITSWAPCOHTONIIINCOME_USD/SGD_USD_borrowing',
    description: 'Amortization Initial Swap COH to NII Income USD/SGD USD Borrowing',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '23',
    beCode: 'SG_HAWK_CR_MATUREDINCOME_FX_Swap_USD/SGD_USD_lending',
    description: 'Matured Income FX Swap USD/SGD USD Lending',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '24',
    beCode: 'SG_HAWK_DR_MATUREDINCOME_FX_Swap_USD/SGD_USD_borrowing',
    description: 'Matured Income FX Swap USD/SGD USD Borrowing',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '25',
    beCode: 'SG_HAWK_CR_MATUREDINCOME_FX_Swap_USD/SGD_SGD_lending',
    description: 'Matured Income FX Swap USD/SGD SGD Lending',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Inactive',
  },
  {
    id: '26',
    beCode: 'SG_HAWK_DR_MATUREDINCOME_FX_Swap_FCY/SGD_SGD_borrowing',
    description: 'Matured Income FX Swap FCY/SGD SGD Borrowing',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '27',
    beCode: 'SG_HAWK_DR_MATUREDINCOME_FX_Swap_USD/SGD_SGD_borrowing',
    description: 'Matured Income FX Swap USD/SGD SGD Borrowing',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
  {
    id: '28',
    beCode: 'SG_HAWK_CR_MATUREDINCOME_FX_swap_FCY/SGD_SGD_lending',
    description: 'Matured Income FX Swap FCY/SGD SGD Lending',
    eventType: 'CR',
    businessUnit: 'DBU',
    ledger: 'Actuals',
    coaIndicator: 'N',
    pcCode: '1234',
    glAccount: '15410180',
    glProduct: '31207',
    effectiveStartDate: '10/02/2025 09:08:56',
    accountBaseIndicator: 'Account Transaction',
    status: 'Active',
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-0 rounded-full bg-[#FFB5B9] flex items-center justify-center">
        <span className="badge text-[#455057]">{initials}</span>
      </div>
    </div>
  );
}

export function GLBeCodesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'view'>('add');
  const [selectedCode, setSelectedCode] = useState<typeof mockGLBEData[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isUploadDrawerOpen, setIsUploadDrawerOpen] = useState(false);
  
  // Filter state
  const [filters, setFilters] = useState<Record<string, string[]>>({
    beCode: [],
    description: [],
    eventType: [],
    businessUnit: [],
    ledger: [],
    coaIndicator: [],
    pcCode: [],
    glAccount: [],
    glProduct: [],
    accountBaseIndicator: [],
  });

  // Date filter state
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  // Filter logic
  const filteredData = mockGLBEData.filter(row => {
    // Apply regular filters
    const passesFilters = Object.entries(filters).every(([key, values]) => {
      if (values.length === 0) return true;
      const rowValue = row[key as keyof typeof row];
      return values.includes(String(rowValue));
    });

    // Apply date range filter
    const passesDateFilter = (() => {
      if (!dateRange.start && !dateRange.end) return true;
      
      // Parse the date string "10/02/2025 09:08:56" to Date object
      const [datePart] = row.effectiveStartDate.split(' ');
      const [month, day, year] = datePart.split('/').map(Number);
      const rowDate = new Date(year, month - 1, day);
      
      if (dateRange.start && dateRange.end) {
        return rowDate >= dateRange.start && rowDate <= dateRange.end;
      } else if (dateRange.start) {
        return rowDate >= dateRange.start;
      }
      return true;
    })();

    return passesFilters && passesDateFilter;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);
  
  const handleFilterChange = (column: string, values: string[]) => {
    setFilters(prev => ({ ...prev, [column]: values }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleDateRangeChange = (startDate: Date | null, endDate: Date | null) => {
    setDateRange({ start: startDate, end: endDate });
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, -1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages);
      }
    }
    
    return pages;
  };

  const handleAddNew = () => {
    setModalMode('add');
    setSelectedCode(null);
    setIsModalOpen(true);
  };

  const handleEdit = (row: typeof mockGLBEData[0]) => {
    setModalMode('edit');
    setSelectedCode(row);
    setIsModalOpen(true);
  };

  const handleView = (row: typeof mockGLBEData[0]) => {
    setModalMode('view');
    setSelectedCode(row);
    setIsModalOpen(true);
  };

  const handleActivate = (beCode: string) => {
    console.log('Activating GL BE Code:', beCode);
  };

  const handleInactivate = (beCode: string) => {
    console.log('Inactivating GL BE Code:', beCode);
  };

  const handleAuditLog = (beCode: string) => {
    console.log('Opening audit log for GL BE Code:', beCode);
  };

  const handleUpload = () => {
    setIsUploadDrawerOpen(true);
  };

  const handleUploadComplete = (file: File) => {
    console.log('File uploaded:', file.name);
    // Add logic to process the uploaded file
  };

  return (
    <>
      <div className="p-[40px]">
        <div className="bg-card rounded-lg shadow-sm border border-border max-w-[1248px] mx-auto flex flex-col">
          {/* Table Header */}
          <div className="px-[24px] py-[16px] border-b border-border flex justify-between items-center">
            <h3 className="h3-component text-foreground">GL BE Codes</h3>
            <div className="flex gap-[12px]">
              <button
                onClick={handleUpload}
                className="px-[24px] py-[8px] border border-border rounded-md hover:bg-accent transition-colors flex items-center gap-[8px]"
              >
                <Upload className="w-[16px] h-[16px] text-muted-foreground" />
                <span className="caption">Upload</span>
              </button>
              <button
                onClick={handleAddNew}
                className="px-[24px] py-[8px] border border-border rounded-md hover:bg-accent transition-colors"
              >
                <span className="caption">Add New</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="min-w-full">
              <thead className="bg-accent/50">
                <tr className="border-b border-border">
                  <th className="px-[24px] py-[12px] text-left min-w-[220px]">
                    <ColumnFilterDropdown
                      column="BE Code"
                      values={mockGLBEData.map(d => d.beCode)}
                      selectedValues={filters.beCode}
                      onFilterChange={(values) => handleFilterChange('beCode', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[220px]">
                    <ColumnFilterDropdown
                      column="Description"
                      values={mockGLBEData.map(d => d.description)}
                      selectedValues={filters.description}
                      onFilterChange={(values) => handleFilterChange('description', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[160px]">
                    <ColumnFilterDropdown
                      column="Event Type"
                      values={mockGLBEData.map(d => d.eventType)}
                      selectedValues={filters.eventType}
                      onFilterChange={(values) => handleFilterChange('eventType', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[180px]">
                    <ColumnFilterDropdown
                      column="Business Unit"
                      values={mockGLBEData.map(d => d.businessUnit)}
                      selectedValues={filters.businessUnit}
                      onFilterChange={(values) => handleFilterChange('businessUnit', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[140px]">
                    <ColumnFilterDropdown
                      column="Ledger"
                      values={mockGLBEData.map(d => d.ledger)}
                      selectedValues={filters.ledger}
                      onFilterChange={(values) => handleFilterChange('ledger', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[160px]">
                    <ColumnFilterDropdown
                      column="COA Indicator"
                      values={mockGLBEData.map(d => d.coaIndicator)}
                      selectedValues={filters.coaIndicator}
                      onFilterChange={(values) => handleFilterChange('coaIndicator', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[140px]">
                    <ColumnFilterDropdown
                      column="PC Code"
                      values={mockGLBEData.map(d => d.pcCode)}
                      selectedValues={filters.pcCode}
                      onFilterChange={(values) => handleFilterChange('pcCode', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[160px]">
                    <ColumnFilterDropdown
                      column="GL Account"
                      values={mockGLBEData.map(d => d.glAccount)}
                      selectedValues={filters.glAccount}
                      onFilterChange={(values) => handleFilterChange('glAccount', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[160px]">
                    <ColumnFilterDropdown
                      column="GL Product"
                      values={mockGLBEData.map(d => d.glProduct)}
                      selectedValues={filters.glProduct}
                      onFilterChange={(values) => handleFilterChange('glProduct', values)}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[240px]">
                    <DateColumnFilter
                      column="Effective Start Date"
                      onDateRangeChange={handleDateRangeChange}
                    />
                  </th>
                  <th className="px-[16px] py-[12px] text-left min-w-[220px]">
                    <ColumnFilterDropdown
                      column="Account Base Indicator"
                      values={mockGLBEData.map(d => d.accountBaseIndicator)}
                      selectedValues={filters.accountBaseIndicator}
                      onFilterChange={(values) => handleFilterChange('accountBaseIndicator', values)}
                    />
                  </th>
                  <th className="w-[80px] px-[8px] py-[12px] sticky right-0 bg-accent/50 z-20"></th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row) => (
                  <tr key={row.id} className="border-b border-border hover:bg-accent/30 transition-colors">
                    <td className="px-[24px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.beCode}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.description}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.eventType}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.businessUnit}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.ledger}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.coaIndicator}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.pcCode}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.glAccount}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.glProduct}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.effectiveStartDate}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.accountBaseIndicator}</p>
                    </td>
                    <td className="px-[8px] py-[12px] sticky right-0 bg-card z-10 border-l border-border">
                      <div className="flex gap-[8px] justify-end">
                        <button
                          onClick={() => row.status === 'Active' ? handleEdit(row) : handleView(row)}
                          className="p-[4px] hover:bg-accent rounded transition-colors"
                        >
                          {row.status === 'Active' ? (
                            <Pencil className="w-[16px] h-[16px] text-muted-foreground" />
                          ) : (
                            <Eye className="w-[16px] h-[16px] text-muted-foreground" />
                          )}
                        </button>
                        <RowActionMenu
                          status={row.status as 'Active' | 'Inactive'}
                          onActivate={() => handleActivate(row.beCode)}
                          onInactivate={() => handleInactivate(row.beCode)}
                          onAuditLog={() => handleAuditLog(row.beCode)}
                        >
                          <button className="p-[4px] hover:bg-accent rounded transition-colors">
                            <MoreVertical className="w-[16px] h-[16px] text-muted-foreground" />
                          </button>
                        </RowActionMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-[24px] py-[16px] border-t border-border flex flex-row justify-between items-center">
              <div className="flex items-center">
                <p className="caption text-muted-foreground">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} entries
                </p>
              </div>
              <div className="flex items-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {getPageNumbers().map((pageNum, idx) => (
                      <PaginationItem key={idx}>
                        {pageNum === -1 ? (
                          <PaginationEllipsis />
                        ) : (
                          <PaginationLink
                            onClick={() => setCurrentPage(pageNum)}
                            isActive={currentPage === pageNum}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        )}
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <GLBeCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        data={selectedCode || undefined}
      />

      <UploadDrawer
        isOpen={isUploadDrawerOpen}
        onClose={() => setIsUploadDrawerOpen(false)}
        onUploadComplete={handleUploadComplete}
      />
    </>
  );
}
