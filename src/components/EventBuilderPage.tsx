import { useState } from 'react';
import React from 'react';
import { ChevronDown, ChevronRight, Pencil, Eye, Upload } from './icons';
import { RowActionMenu } from './RowActionMenu';
import { EventBuilderModal } from './EventBuilderModal';
import { ColumnFilterDropdown } from './ColumnFilterDropdown';
import { DateColumnFilter } from './DateColumnFilter';
import { ENTITY_TYPE_OPTIONS } from './eventBuilderConstants';
import { UploadDrawer } from './UploadDrawer';

interface EventRow {
  eventId: string;
  businessEvent: string;
  hedgeMethod: string;
  currencyType: string;
  hedgingInstrument: string;
  status: string;
  navType: string;
  updatedBy: string;
  lastUpdated: string;
  expanded: boolean;
  glBeCodes: Array<{
    code: string;
    entityType: string;
  }>;
}

export function EventBuilderPage() {
  const [isUploadDrawerOpen, setIsUploadDrawerOpen] = useState(false);
  
  const [modalState, setModalState] = useState<{ isOpen: boolean; mode: 'add' | 'edit' | 'view'; rowData?: EventRow }>({
    isOpen: false,
    mode: 'add'
  });

  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  // Filter state
  const [filters, setFilters] = useState<Record<string, string[]>>({
    eventId: [],
    businessEvent: [],
    hedgeMethod: [],
    currencyType: [],
    hedgingInstrument: [],
    status: [],
    navType: [],
    updatedBy: [],
  });

  // Date filter state
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const mockData: EventRow[] = [
    {
      eventId: 'EVT001',
      businessEvent: 'Inception',
      hedgeMethod: 'MTM',
      currencyType: 'Restricted',
      hedgingInstrument: 'FX Swap',
      status: 'Active',
      navType: 'COI',
      updatedBy: 'John Doe',
      lastUpdated: '10/02/2025 09:08:56',
      expanded: false,
      glBeCodes: [
        { code: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU', entityType: ENTITY_TYPE_OPTIONS[0] }, // All
        { code: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU', entityType: ENTITY_TYPE_OPTIONS[1] }, // Branch
        { code: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_BR', entityType: ENTITY_TYPE_OPTIONS[2] }, // Subsi
        { code: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_BR', entityType: ENTITY_TYPE_OPTIONS[3] }, // Assoc
        { code: 'SG_HAWK_DR_UHCOILOCKBACKFXGAIN_TMU', entityType: ENTITY_TYPE_OPTIONS[4] }, // Tmu
      ]
    },
    {
      eventId: 'EVT002',
      businessEvent: 'Utilization',
      hedgeMethod: 'COH',
      currencyType: 'Non-Restricted',
      hedgingInstrument: 'FX NDF',
      status: 'Active',
      navType: 'RE+reserves',
      updatedBy: 'Jane Smith',
      lastUpdated: '10/01/2025 14:22:31',
      expanded: false,
      glBeCodes: [
        { code: 'SG_HAWK_DR_COILOCKBACKFXGAIN_BR', entityType: ENTITY_TYPE_OPTIONS[0] }, // All
        { code: 'SG_HAWK_CR_COILOCKBACKFXLOSS_BR', entityType: ENTITY_TYPE_OPTIONS[1] }, // Branch
        { code: 'SG_HAWK_DR_HGGICFXGAIN_TMU', entityType: ENTITY_TYPE_OPTIONS[2] }, // Subsi
        { code: 'SG_HAWK_CR_HGGICFXLOSS_TMU', entityType: ENTITY_TYPE_OPTIONS[4] }, // Tmu
      ]
    },
    {
      eventId: 'EVT003',
      businessEvent: 'Rollover',
      hedgeMethod: 'COH',
      currencyType: 'Restricted',
      hedgingInstrument: 'IRD Xccy Swap',
      status: 'Inactive',
      navType: 'COI',
      updatedBy: 'Jane Smith',
      lastUpdated: '09/28/2025 11:15:42',
      expanded: false,
      glBeCodes: [
        { code: 'SG_HAWK_DR_SWAPCOILOCKBACKFXGAIN_BR', entityType: ENTITY_TYPE_OPTIONS[0] }, // All
        { code: 'SG_HAWK_CR_SWAPCOILOCKBACKFXLOSS_BR', entityType: ENTITY_TYPE_OPTIONS[3] }, // Assoc
        { code: 'SG_HAWK_DR_FWDCOILOCKBACKFXGAIN_BR', entityType: ENTITY_TYPE_OPTIONS[1] }, // Branch
      ]
    },
  ];

  // Filter logic
  const filteredData = mockData.filter(row => {
    // Apply regular filters
    const passesFilters = Object.entries(filters).every(([key, values]) => {
      if (values.length === 0) return true;
      const rowValue = row[key as keyof EventRow];
      return values.includes(String(rowValue));
    });

    // Apply date range filter
    const passesDateFilter = (() => {
      if (!dateRange.start && !dateRange.end) return true;
      
      // Parse the date string "10/02/2025 09:08:56" to Date object
      const [datePart] = row.lastUpdated.split(' ');
      const [month, day, year] = datePart.split('/').map(Number);
      const rowDate = new Date(year, month - 1, day);
      
      if (dateRange.start && dateRange.end) {
        return rowDate >= dateRange.start && rowDate <= dateRange.end;
      }
      if (dateRange.start) {
        return rowDate >= dateRange.start;
      }
      if (dateRange.end) {
        return rowDate <= dateRange.end;
      }
      return true;
    })();

    return passesFilters && passesDateFilter;
  });

  const toggleRow = (eventId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedRows(newExpanded);
  };

  const handleAddNew = () => {
    setModalState({ isOpen: true, mode: 'add' });
  };

  const handleEdit = (row: EventRow) => {
    setModalState({ isOpen: true, mode: 'edit', rowData: row });
  };

  const handleView = (row: EventRow) => {
    setModalState({ isOpen: true, mode: 'view', rowData: row });
  };

  const handleDelete = (eventId: string) => {
    console.log('Delete event:', eventId);
  };

  const handleFilterChange = (column: string, values: string[]) => {
    setFilters(prev => ({ ...prev, [column]: values }));
  };

  const handleDateRangeChange = (startDate: Date | null, endDate: Date | null) => {
    setDateRange({ start: startDate, end: endDate });
  };

  const handleUploadClick = () => {
    setIsUploadDrawerOpen(true);
  };

  const handleUploadComplete = (file: File) => {
    console.log('File uploaded:', file.name);
    // Add logic to process the uploaded file and populate the table
  };

  const nextEventId = `EVT${String(mockData.length + 1).padStart(3, '0')}`;

  return (
    <div className="p-[40px]">
      <div className="bg-card rounded-lg shadow-sm border border-border max-w-[1248px] mx-auto">
        {/* Table Header */}
        <div className="px-[24px] py-[16px] border-b border-border flex justify-between items-center">
          <h3 className="h3-component text-foreground">Event Builder Configuration</h3>
          <div className="flex gap-[12px]">
            <button 
              onClick={handleUploadClick}
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
        <div className="overflow-x-auto relative">
          <table className="min-w-full">
            <thead className="bg-accent/50">
              <tr className="border-b border-border">
                <th className="w-[52px] px-[24px] py-[12px] sticky left-0 bg-accent/50 z-20"></th>
                <th className="px-[24px] py-[12px] text-left min-w-[140px]">
                  <ColumnFilterDropdown
                    column="Event ID"
                    values={mockData.map(d => d.eventId)}
                    selectedValues={filters.eventId}
                    onFilterChange={(values) => handleFilterChange('eventId', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[180px]">
                  <ColumnFilterDropdown
                    column="Business Event"
                    values={mockData.map(d => d.businessEvent)}
                    selectedValues={filters.businessEvent}
                    onFilterChange={(values) => handleFilterChange('businessEvent', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[220px]">
                  <ColumnFilterDropdown
                    column="Hedge Method"
                    values={mockData.map(d => d.hedgeMethod)}
                    selectedValues={filters.hedgeMethod}
                    onFilterChange={(values) => handleFilterChange('hedgeMethod', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[180px]">
                  <ColumnFilterDropdown
                    column="Currency Type"
                    values={mockData.map(d => d.currencyType)}
                    selectedValues={filters.currencyType}
                    onFilterChange={(values) => handleFilterChange('currencyType', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[200px]">
                  <ColumnFilterDropdown
                    column="Hedging Instrument"
                    values={mockData.map(d => d.hedgingInstrument)}
                    selectedValues={filters.hedgingInstrument}
                    onFilterChange={(values) => handleFilterChange('hedgingInstrument', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[140px]">
                  <ColumnFilterDropdown
                    column="Status"
                    values={mockData.map(d => d.status)}
                    selectedValues={filters.status}
                    onFilterChange={(values) => handleFilterChange('status', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[140px]">
                  <ColumnFilterDropdown
                    column="NAV Type"
                    values={mockData.map(d => d.navType)}
                    selectedValues={filters.navType}
                    onFilterChange={(values) => handleFilterChange('navType', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[180px]">
                  <ColumnFilterDropdown
                    column="Updated By"
                    values={mockData.map(d => d.updatedBy)}
                    selectedValues={filters.updatedBy}
                    onFilterChange={(values) => handleFilterChange('updatedBy', values)}
                  />
                </th>
                <th className="px-[16px] py-[12px] text-left min-w-[240px]">
                  <DateColumnFilter
                    column="Last Updated"
                    startDate={dateRange.start}
                    endDate={dateRange.end}
                    onDateRangeChange={handleDateRangeChange}
                  />
                </th>
                <th className="w-[80px] px-[8px] py-[12px] sticky right-0 bg-accent/50 z-20"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <React.Fragment key={row.eventId}>
                  {/* Main Row */}
                  <tr className="border-b border-border hover:bg-accent/30 transition-colors">
                    <td className="px-[24px] py-[12px] sticky left-0 bg-card z-10 border-r border-border">
                      <button 
                        onClick={() => toggleRow(row.eventId)}
                        className="p-[2px] hover:bg-accent rounded transition-colors"
                      >
                        {expandedRows.has(row.eventId) ? (
                          <svg className="w-[20px] h-[20px] text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        ) : (
                          <svg className="w-[20px] h-[20px] text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    </td>
                    <td className="px-[24px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.eventId}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.businessEvent}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.hedgeMethod}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.currencyType}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.hedgingInstrument}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <span className={`badge px-[8px] py-[2px] rounded-full ${
                        row.status === 'Active' 
                          ? 'bg-[#b0e8d0] text-foreground' 
                          : 'bg-[#ffd6d6] text-foreground'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.navType}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.updatedBy}</p>
                    </td>
                    <td className="px-[16px] py-[12px] whitespace-nowrap">
                      <p className="caption text-foreground">{row.lastUpdated}</p>
                    </td>
                    <td className="px-[8px] py-[12px] sticky right-0 bg-card z-10 border-l border-border">
                      <div className="flex gap-[8px] justify-end">
                        <button 
                          onClick={() => row.status === 'Active' ? handleEdit(row) : handleView(row)}
                          className="p-[4px] hover:bg-accent rounded transition-colors"
                        >
                          {row.status === 'Active' ? (
                            <svg className="w-[16px] h-[16px] text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          ) : (
                            <svg className="w-[16px] h-[16px] text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                        <RowActionMenu
                          status={row.status as 'Active' | 'Inactive'}
                          onActivate={() => console.log('Activate:', row.eventId)}
                          onInactivate={() => console.log('Inactivate:', row.eventId)}
                          onAuditLog={() => console.log('Audit Log:', row.eventId)}
                        >
                          <button className="p-[4px] hover:bg-accent rounded transition-colors">
                            <svg className="w-[16px] h-[16px] text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </RowActionMenu>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded Sub-table */}
                  {expandedRows.has(row.eventId) && row.glBeCodes.length > 0 && (
                    <tr>
                      <td colSpan={11} className="bg-[#f7f7f7] p-0">
                        <div className="overflow-x-auto py-[12px]">
                          <table className="w-full border-collapse">
                            <thead className="bg-[#f7f7f7]">
                              <tr className="border-b border-border">
                                <th className="w-[52px] px-[24px] py-[8px]"></th>
                                <th className="px-[8px] py-[8px] text-left whitespace-nowrap w-auto">
                                  <label className="text-muted-foreground">GL BE Code</label>
                                </th>
                                <th className="px-[8px] py-[8px] text-left whitespace-nowrap w-auto">
                                  <label className="text-muted-foreground">Entity Type</label>
                                </th>
                                <th className="px-[8px] py-[8px] w-full"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {row.glBeCodes.map((beCode) => (
                                <tr key={beCode.code} className="border-b border-border last:border-b-0">
                                  <td className="px-[24px] py-[12px] bg-[#f7f7f7]"></td>
                                  <td className="px-[8px] py-[12px] bg-[#f7f7f7] whitespace-nowrap">
                                    <p className="caption text-foreground">{beCode.code}</p>
                                  </td>
                                  <td className="px-[8px] py-[12px] bg-[#f7f7f7] whitespace-nowrap">
                                    <p className="caption text-foreground">{beCode.entityType}</p>
                                  </td>
                                  <td className="px-[8px] py-[12px] bg-[#f7f7f7]"></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <EventBuilderModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        mode={modalState.mode}
        nextEventId={nextEventId}
        rowData={modalState.rowData}
      />

      {/* Upload Drawer */}
      <UploadDrawer
        isOpen={isUploadDrawerOpen}
        onClose={() => setIsUploadDrawerOpen(false)}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  );
}
