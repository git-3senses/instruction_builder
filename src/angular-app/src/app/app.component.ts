import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import svgPaths from '../../../imports/svg-njr3iq9til';
import { SecondaryNavigationComponent } from './components/secondary-navigation/secondary-navigation.component';
import { GLBeCodesPageComponent } from './components/gl-be-codes-page/gl-be-codes-page.component';
import { AddRuleModalComponent } from './components/add-rule-modal/add-rule-modal.component';
import { EditRuleModalComponent } from './components/edit-rule-modal/edit-rule-modal.component';
import { RowActionMenuComponent } from './components/row-action-menu/row-action-menu.component';
import { ColumnFilterDropdownComponent } from './components/column-filter-dropdown/column-filter-dropdown.component';
import { DateColumnFilterComponent } from './components/date-column-filter/date-column-filter.component';

interface MurexBooking {
  code: string;
  glBeCodes: string[];
}

interface TableRow {
  id: string;
  ruleId: string;
  businessEvent: string;
  hedgeMethod: string;
  currencyType: string;
  hedgingInstrument: string;
  navType: string;
  status: string;
  updatedBy: string;
  lastUpdated: string;
  murexBookings: MurexBooking[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SecondaryNavigationComponent,
    GLBeCodesPageComponent,
    AddRuleModalComponent,
    EditRuleModalComponent,
    RowActionMenuComponent,
    ColumnFilterDropdownComponent,
    DateColumnFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  svgPaths = svgPaths;
  expandedRows = new Set<string>();
  isAddModalOpen = false;
  isEditModalOpen = false;
  selectedRule: TableRow | null = null;
  editMode: 'edit' | 'view' = 'edit';
  isSecondaryNavExpanded = true;
  activePage = 'Instruction Builder';
  
  filters: Record<string, string[]> = {
    ruleId: [],
    businessEvent: [],
    hedgeMethod: [],
    currencyType: [],
    hedgingInstrument: [],
    status: [],
    navType: [],
    updatedBy: [],
  };

  dateRange: { start: Date | null; end: Date | null } = {
    start: null,
    end: null,
  };

  mockData: TableRow[] = [
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

  get filteredData(): TableRow[] {
    return this.mockData.filter(row => {
      const passesFilters = Object.entries(this.filters).every(([key, values]) => {
        if (values.length === 0) return true;
        const rowValue = row[key as keyof TableRow];
        return values.includes(String(rowValue));
      });

      const passesDateFilter = (() => {
        if (!this.dateRange.start && !this.dateRange.end) return true;
        
        const [datePart] = row.lastUpdated.split(' ');
        const [month, day, year] = datePart.split('/').map(Number);
        const rowDate = new Date(year, month - 1, day);
        
        if (this.dateRange.start && this.dateRange.end) {
          return rowDate >= this.dateRange.start && rowDate <= this.dateRange.end;
        } else if (this.dateRange.start) {
          return rowDate >= this.dateRange.start;
        }
        return true;
      })();

      return passesFilters && passesDateFilter;
    });
  }

  toggleRow(id: string): void {
    if (this.expandedRows.has(id)) {
      this.expandedRows.delete(id);
    } else {
      this.expandedRows.add(id);
    }
  }

  isRowExpanded(id: string): boolean {
    return this.expandedRows.has(id);
  }

  handleFilterChange(column: string, values: string[]): void {
    this.filters = { ...this.filters, [column]: values };
  }

  handleDateRangeChange(startDate: Date | null, endDate: Date | null): void {
    this.dateRange = { start: startDate, end: endDate };
  }

  getNextRuleId(): string {
    const lastRule = this.mockData[this.mockData.length - 1];
    const lastId = parseInt(lastRule.ruleId.replace('R', ''));
    return `R${String(lastId + 1).padStart(3, '0')}`;
  }

  handleEditClick(row: TableRow): void {
    this.selectedRule = row;
    this.editMode = 'edit';
    this.isEditModalOpen = true;
  }

  handleViewClick(row: TableRow): void {
    this.selectedRule = row;
    this.editMode = 'view';
    this.isEditModalOpen = true;
  }

  handleActivate(ruleId: string): void {
    console.log('Activating rule:', ruleId);
  }

  handleInactivate(ruleId: string): void {
    console.log('Inactivating rule:', ruleId);
  }

  handleAuditLog(ruleId: string): void {
    console.log('Opening audit log for rule:', ruleId);
  }

  onSecondaryNavToggle(): void {
    this.isSecondaryNavExpanded = !this.isSecondaryNavExpanded;
  }

  onPageChange(page: string): void {
    this.activePage = page;
  }

  onAddModalClose(): void {
    this.isAddModalOpen = false;
  }

  onEditModalClose(): void {
    this.isEditModalOpen = false;
    this.selectedRule = null;
  }

  getStatusClass(status: string): string {
    return status === 'Active' 
      ? 'bg-[#b0e8d0] text-foreground' 
      : 'bg-[#ffd6d6] text-foreground';
  }
}
