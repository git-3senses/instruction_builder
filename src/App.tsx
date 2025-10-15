import { useState } from 'react';
import React from 'react';
import svgPaths from "./imports/svg-njr3iq9til";
import { AddRuleModal } from './components/AddRuleModal';
import { EditRuleModal } from './components/EditRuleModal';
import { RowActionMenu } from './components/RowActionMenu';
import { SecondaryNavigation } from './components/SecondaryNavigation';
import { GLBeCodesPage } from './components/GLBeCodesPage';
import { ColumnFilterDropdown } from './components/ColumnFilterDropdown';
import { DateColumnFilter } from './components/DateColumnFilter';

// Mock data for the table
const mockData = [
  {
    id: 'R001',
    ruleId: 'R001',
    businessEvent: 'Inception',
    hedgeMethod: 'COH',
    currencyType: 'Non-Restricted',
    hedgingInstrument: 'FX Spot',
    navType: 'COI',
    status: 'Active',
    updatedBy: 'John Doe',
    lastUpdated: '10/02/2025 09:08:56',
    murexBookings: [
      { code: 'SPOT_MIRR_INTMD_COI', glBeCodes: ['SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU', 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU'] },
      { code: 'SPOT_CLOSE_UHCOI_COI', glBeCodes: ['SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_BR', 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_BR'] },
      { code: 'SWAP_MIRR_INSTC_COIRE', glBeCodes: ['SG_HAWK_DR_UHCOILOCKBACKFXGAIN_TMU', 'SG_HAWK_CR_UHCOILOCKBACKFXLOSS_TMU'] },
      { code: 'SWAP_CLOSE_UHCOI_COI', glBeCodes: ['SG_HAWK_DR_COILOCKBACKFXGAIN_REL', 'SG_HAWK_CR_COILOCKBACKFXLOSS_REL'] },
      { code: 'FWD_MIRR_INTMD_COI', glBeCodes: ['SG_HAWK_DR_FWDCOILOCKBACKFXGAIN_TMU', 'SG_HAWK_CR_FWDCOILOCKBACKFXLOSS_TMU'] },
    ]
  },
  {
    id: 'R002',
    ruleId: 'R002',
    businessEvent: 'Inception',
    hedgeMethod: 'COH',
    currencyType: 'Restricted',
    hedgingInstrument: 'FX Spot',
    navType: 'COI',
    status: 'Active',
    updatedBy: 'John Doe',
    lastUpdated: '10/02/2025 09:08:56',
    murexBookings: [
      { code: 'SPOT_TRFNEAR_INSTC_COI', glBeCodes: ['SG_HAWK_DR_COILOCKBACKFXGAIN_BR', 'SG_HAWK_CR_COILOCKBACKFXLOSS_BR'] },
      { code: 'SPOT_MIRR_HGGIC_COI', glBeCodes: ['SG_HAWK_DR_HGGICFXGAIN_TMU', 'SG_HAWK_CR_HGGICFXLOSS_TMU'] },
      { code: 'SWAP_TRFNEAR_INSTC_COI', glBeCodes: ['SG_HAWK_DR_SWAPCOILOCKBACKFXGAIN_BR', 'SG_HAWK_CR_SWAPCOILOCKBACKFXLOSS_BR'] },
      { code: 'FWD_CLOSE_UHCOI_COI', glBeCodes: ['SG_HAWK_DR_FWDCOILOCKBACKFXGAIN_BR', 'SG_HAWK_CR_FWDCOILOCKBACKFXLOSS_BR'] },
      { code: 'SPOT_OPEN_HGGIC_COI', glBeCodes: ['SG_HAWK_DR_OPENHGGICFXGAIN_TMU', 'SG_HAWK_CR_OPENHGGICFXLOSS_TMU'] },
    ]
  },
  {
    id: 'R003',
    ruleId: 'R003',
    businessEvent: 'Inception',
    hedgeMethod: 'COH',
    currencyType: 'Non-Restricted',
    hedgingInstrument: 'FX Spot',
    navType: 'RE',
    status: 'Inactive',
    updatedBy: 'John Doe',
    lastUpdated: '10/02/2025 09:08:56',
    murexBookings: [
      { code: 'SPOT_MIRR_INTMD_RE', glBeCodes: ['SG_HAWK_DR_UHRELOCKBACKFXGAIN_TMU', 'SG_HAWK_CR_UHRELOCKBACKFXLOSS_TMU'] },
      { code: 'SPOT_CLOSE_UHRE_RE', glBeCodes: ['SG_HAWK_DR_UHRELOCKBACKFXGAIN_BR', 'SG_HAWK_CR_UHRELOCKBACKFXLOSS_BR'] },
      { code: 'SWAP_MIRR_INSTC_RE', glBeCodes: ['SG_HAWK_DR_UHRELOCKBACKFXGAIN_TMU', 'SG_HAWK_CR_UHRELOCKBACKFXLOSS_TMU'] },
      { code: 'SWAP_CLOSE_UHRE_RE', glBeCodes: ['SG_HAWK_DR_RELOCKBACKFXGAIN_REL', 'SG_HAWK_CR_RELOCKBACKFXLOSS_REL'] },
      { code: 'FWD_MIRR_INTMD_RE', glBeCodes: ['SG_HAWK_DR_FWDRELOCKBACKFXGAIN_TMU', 'SG_HAWK_CR_FWDRELOCKBACKFXLOSS_TMU'] },
    ]
  },
  {
    id: 'R004',
    ruleId: 'R004',
    businessEvent: 'Inception',
    hedgeMethod: 'COH',
    currencyType: 'Restricted',
    hedgingInstrument: 'FX Spot',
    navType: 'RE',
    status: 'Inactive',
    updatedBy: 'John Doe',
    lastUpdated: '10/02/2025 09:08:56',
    murexBookings: [
      { code: 'SPOT_TRFNEAR_INSTC_RE', glBeCodes: ['SG_HAWK_DR_RELOCKBACKFXGAIN_BR', 'SG_HAWK_CR_RELOCKBACKFXLOSS_BR'] },
      { code: 'SPOT_MIRR_HGGIC_RE', glBeCodes: ['SG_HAWK_DR_HGGICREFXGAIN_TMU', 'SG_HAWK_CR_HGGICREFXLOSS_TMU'] },
      { code: 'SWAP_TRFNEAR_INSTC_RE', glBeCodes: ['SG_HAWK_DR_SWAPRELOCKBACKFXGAIN_BR', 'SG_HAWK_CR_SWAPRELOCKBACKFXLOSS_BR'] },
      { code: 'FWD_CLOSE_UHRE_RE', glBeCodes: ['SG_HAWK_DR_FWDRELOCKBACKFXGAIN_BR', 'SG_HAWK_CR_FWDRELOCKBACKFXLOSS_BR'] },
      { code: 'SPOT_OPEN_HGGIC_RE', glBeCodes: ['SG_HAWK_DR_OPENHGGICREFXGAIN_TMU', 'SG_HAWK_CR_OPENHGGICREFXLOSS_TMU'] },
    ]
  }
];

function LogoDbsLogomark() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.pa375b00} fill="#FF3E3E" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p7196fc0} fill="white" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-0 rounded-full bg-[#FFB5B9] flex items-center justify-center">
        <span className="badge text-[#455057]">{initials}</span>
      </div>
    </div>
  );
}

export default function App() {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRule, setSelectedRule] = useState<typeof mockData[0] | null>(null);
  const [editMode, setEditMode] = useState<'edit' | 'view'>('edit');
  const [isSecondaryNavExpanded, setIsSecondaryNavExpanded] = useState(true);
  const [activePage, setActivePage] = useState('Instruction Builder');
  
  // Filter state
  const [filters, setFilters] = useState<Record<string, string[]>>({
    ruleId: [],
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

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  // Filter logic
  const filteredData = mockData.filter(row => {
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
      const [datePart] = row.lastUpdated.split(' ');
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

  const handleFilterChange = (column: string, values: string[]) => {
    setFilters(prev => ({ ...prev, [column]: values }));
  };

  const handleDateRangeChange = (startDate: Date | null, endDate: Date | null) => {
    setDateRange({ start: startDate, end: endDate });
  };

  // Calculate next rule ID based on existing rules
  const getNextRuleId = () => {
    const lastRule = mockData[mockData.length - 1];
    const lastId = parseInt(lastRule.ruleId.replace('R', ''));
    return `R${String(lastId + 1).padStart(3, '0')}`;
  };

  const handleEditClick = (row: typeof mockData[0]) => {
    setSelectedRule(row);
    setEditMode('edit');
    setIsEditModalOpen(true);
  };

  const handleViewClick = (row: typeof mockData[0]) => {
    setSelectedRule(row);
    setEditMode('view');
    setIsEditModalOpen(true);
  };

  const handleActivate = (ruleId: string) => {
    console.log('Activating rule:', ruleId);
    // Add your activation logic here
  };

  const handleInactivate = (ruleId: string) => {
    console.log('Inactivating rule:', ruleId);
    // Add your inactivation logic here
  };

  const handleAuditLog = (ruleId: string) => {
    console.log('Opening audit log for rule:', ruleId);
    // Add your audit log logic here
  };

  return (
    <div className="bg-[#f5f7f9] min-h-screen flex flex-col">
      {/* Top Row: Logo and Header */}
      <div className="flex h-[82px] shrink-0">
        {/* Primary Sidebar Logo */}
        <div className="bg-sidebar w-[72px] flex items-center justify-center shrink-0">
          <LogoDbsLogomark />
        </div>

        {/* Main Content Header */}
        <div className="bg-white border-b border-border px-[40px] py-[16px] flex-1">
          <div className="flex flex-col gap-[8px]">
            <p className="text-foreground">Hedge Accounting SFX</p>
            <p className="caption text-muted-foreground">Configuration</p>
          </div>
        </div>
      </div>

      {/* Bottom Row: Sidebars and Content */}
      <div className="flex flex-1">
        {/* Primary Sidebar Nav Items */}
        <div className="bg-sidebar flex flex-col w-[72px] shrink-0">
          <div className="bg-sidebar-primary h-[56px] flex items-center justify-center cursor-pointer">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p3a4a5600} fill="white" fillRule="evenodd" />
            </svg>
          </div>
          <div className="h-[56px] flex items-center justify-center cursor-pointer hover:bg-sidebar-accent">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p150ff400} fill="#9BA4AB" fillRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Secondary Navigation */}
        <SecondaryNavigation 
          isExpanded={isSecondaryNavExpanded} 
          onToggle={() => setIsSecondaryNavExpanded(!isSecondaryNavExpanded)}
          activeItem={activePage}
          onItemChange={setActivePage}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-auto">
        {/* Conditional Page Rendering */}
        {activePage === 'GL BE Codes' ? (
          <GLBeCodesPage />
        ) : (
          <div className="p-[40px]">
          <div className="bg-card rounded-lg shadow-sm border border-border max-w-[1248px] mx-auto">
            {/* Table Header */}
            <div className="px-[24px] py-[16px] border-b border-border flex justify-between items-center">
              <h3 className="h3-component text-foreground">Instruction Builder Configuration</h3>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="px-[24px] py-[8px] border border-border rounded-md hover:bg-accent transition-colors"
              >
                <span className="caption">Add New</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto relative">
              <table className="min-w-full">
                <thead className="bg-accent/50">
                  <tr className="border-b border-border">
                    <th className="w-[52px] px-[24px] py-[12px] sticky left-0 bg-accent/50 z-20"></th>
                    <th className="px-[24px] py-[12px] text-left min-w-[140px]">
                      <ColumnFilterDropdown
                        column="Rule ID"
                        values={mockData.map(d => d.ruleId)}
                        selectedValues={filters.ruleId}
                        onFilterChange={(values) => handleFilterChange('ruleId', values)}
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
                        column="Hedge Method (Swap Pt)"
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
                        onDateRangeChange={handleDateRangeChange}
                      />
                    </th>
                    <th className="w-[80px] px-[8px] py-[12px] sticky right-0 bg-accent/50 z-20"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row) => (
                    <React.Fragment key={row.id}>
                      {/* Main Row */}
                      <tr className="border-b border-border hover:bg-accent/30 transition-colors">
                        <td className="px-[24px] py-[12px] sticky left-0 bg-card z-10 border-r border-border">
                          <button 
                            onClick={() => toggleRow(row.id)}
                            className="p-[2px] hover:bg-accent rounded transition-colors"
                          >
                            {expandedRows.has(row.id) ? (
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
                          <p className="caption text-foreground">{row.ruleId}</p>
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
                          <div className="flex items-center gap-[8px]">
                            <Avatar initials="A" />
                            <p className="caption text-foreground">{row.updatedBy}</p>
                          </div>
                        </td>
                        <td className="px-[16px] py-[12px] whitespace-nowrap">
                          <p className="caption text-foreground">{row.lastUpdated}</p>
                        </td>
                        <td className="px-[8px] py-[12px] sticky right-0 bg-card z-10 border-l border-border">
                          <div className="flex gap-[8px] justify-end">
                            <button 
                              onClick={() => row.status === 'Active' ? handleEditClick(row) : handleViewClick(row)}
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
                              onActivate={() => handleActivate(row.ruleId)}
                              onInactivate={() => handleInactivate(row.ruleId)}
                              onAuditLog={() => handleAuditLog(row.ruleId)}
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
                      {expandedRows.has(row.id) && row.murexBookings.length > 0 && (
                        <tr>
                          <td colSpan={11} className="bg-[#f7f7f7] p-0">
                            <div className="overflow-x-auto py-[12px]">
                              <table className="w-full border-collapse">
                                <thead className="bg-[#f7f7f7]">
                                  <tr className="border-b border-border">
                                    <th className="w-[52px] px-[24px] py-[8px]"></th>
                                    <th className="px-[8px] py-[8px] text-left whitespace-nowrap w-auto">
                                      <label className="text-muted-foreground">Murex Booking Codes</label>
                                    </th>
                                    <th className="px-[8px] py-[8px] text-left whitespace-nowrap w-auto">
                                      <label className="text-muted-foreground">GL BE Codes</label>
                                    </th>
                                    <th className="px-[8px] py-[8px] text-left whitespace-nowrap w-auto">
                                      <label className="text-muted-foreground"></label>
                                    </th>
                                    <th className="px-[8px] py-[8px] w-full"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {row.murexBookings.map((booking, idx) => (
                                    <tr key={idx} className="border-b border-border last:border-b-0">
                                      <td className="px-[24px] py-[12px] bg-[#f7f7f7]"></td>
                                      <td className="px-[8px] py-[12px] bg-[#f7f7f7] whitespace-nowrap">
                                        <p className="caption text-foreground">{booking.code}</p>
                                      </td>
                                      <td className="px-[8px] py-[12px] bg-[#f7f7f7] whitespace-nowrap">
                                        <p className="caption text-foreground">{booking.glBeCodes[0]}</p>
                                      </td>
                                      <td className="px-[8px] py-[12px] bg-[#f7f7f7] whitespace-nowrap">
                                        <p className="caption text-foreground">{booking.glBeCodes[1] || ''}</p>
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
        </div>
        )}
      </div>
      </div>

      {/* Add Rule Modal */}
      <AddRuleModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        nextRuleId={getNextRuleId()}
      />

      {/* Edit/View Rule Modal */}
      <EditRuleModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedRule(null);
        }}
        ruleData={selectedRule}
        mode={editMode}
      />
    </div>
  );
}
