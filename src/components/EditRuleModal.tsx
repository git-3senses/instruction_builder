import { useState, useEffect } from 'react';
import { X, Trash2, ChevronDown, Pencil, Save } from './icons';
import { MultiSelectDropdown } from './MultiSelectDropdown';

interface MurexBooking {
  code: string;
  glBeCodes: string[];
}

interface RuleData {
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

interface EditRuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  ruleData: RuleData | null;
  mode: 'edit' | 'view';
}

interface CombinedRow {
  murexCode: string;
  glBeCode1: string;
  glBeCode2: string;
  entityType: string[];
  isNew: boolean;
}

export function EditRuleModal({ isOpen, onClose, ruleData, mode }: EditRuleModalProps) {
  const [status, setStatus] = useState('Active');
  const [description, setDescription] = useState('');
  const [businessEvent, setBusinessEvent] = useState('');
  const [hedgeMethod, setHedgeMethod] = useState('');
  const [currencyType, setCurrencyType] = useState('');
  const [hedgingInstrument, setHedgingInstrument] = useState('');
  const [navType, setNavType] = useState('');

  const [combinedRows, setCombinedRows] = useState<CombinedRow[]>([]);
  const [editingRows, setEditingRows] = useState<Set<number>>(new Set());

  const businessEventOptions = ['Inception', 'Utilization', 'Rollover', 'Termination'];
  const hedgeMethodOptions = ['MTM', 'COH'];
  const currencyTypeOptions = ['Restricted', 'Non-Restricted'];
  const hedgingInstrumentOptions = ['FX Swap', 'FX NDF', 'IRD Xccy Swap'];
  const navTypeOptions = ['COI', 'RE+reserves'];

  const isReadOnly = mode === 'view';

  useEffect(() => {
    if (ruleData) {
      setStatus(ruleData.status);
      setBusinessEvent(ruleData.businessEvent);
      setHedgeMethod(ruleData.hedgeMethod);
      setCurrencyType(ruleData.currencyType);
      setHedgingInstrument(ruleData.hedgingInstrument);
      setNavType(ruleData.navType);
      setDescription(`Rule configuration for ${ruleData.businessEvent} - ${ruleData.hedgingInstrument}`);
      
      // Convert murex bookings to combined rows
      const rows: CombinedRow[] = ruleData.murexBookings.map(mb => ({
        murexCode: mb.code,
        glBeCode1: mb.glBeCodes[0] || '',
        glBeCode2: mb.glBeCodes[1] || '',
        entityType: ['Branch', 'Associate'],
        isNew: false
      }));
      setCombinedRows(rows);
    }
  }, [ruleData]);

  const addNewRow = () => {
    if (!isReadOnly) {
      const newIndex = combinedRows.length;
      setCombinedRows([...combinedRows, { 
        murexCode: '', 
        glBeCode1: '', 
        glBeCode2: '', 
        entityType: [], 
        isNew: true 
      }]);
      setEditingRows(new Set([...editingRows, newIndex]));
    }
  };

  const removeRow = (index: number) => {
    if (!isReadOnly) {
      setCombinedRows(combinedRows.filter((_, i) => i !== index));
      const newEditingRows = new Set(editingRows);
      newEditingRows.delete(index);
      setEditingRows(newEditingRows);
    }
  };

  const toggleEdit = (index: number) => {
    if (isReadOnly) return;
    const newEditingRows = new Set(editingRows);
    if (newEditingRows.has(index)) {
      newEditingRows.delete(index);
    } else {
      newEditingRows.add(index);
    }
    setEditingRows(newEditingRows);
  };

  const updateRow = (index: number, field: keyof CombinedRow, value: any) => {
    if (isReadOnly) return;
    const newRows = [...combinedRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setCombinedRows(newRows);
  };

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  if (!isOpen || !ruleData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[24px] pb-0 bg-gradient-to-b from-[rgba(23,24,26,0.49)] to-[rgba(113,118,128,0.7)]">
      <div className="bg-[#f5f7f9] rounded-tl-[8px] rounded-tr-[8px] w-full flex flex-col" style={{ height: 'calc(100vh - 24px)' }}>
        {/* Header */}
        <div className="bg-white border-b border-border px-[96px] py-[24px] rounded-tl-[8px] rounded-tr-[8px] shadow-sm flex-shrink-0">
          <div className="flex items-center justify-between max-w-[1248px] mx-auto">
            <h3 className="h3-component text-foreground">
              {isReadOnly ? 'View Rule Config' : 'Edit Rule Config'}
            </h3>
            <button
              onClick={onClose}
              className="p-[4px] hover:bg-accent rounded transition-colors"
            >
              <X className="w-[24px] h-[24px] text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[96px] py-[24px]">
          <div className="flex flex-col gap-[16px] max-w-[1248px] mx-auto">
            {/* Config Information Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Config Information</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                <div className="flex gap-[24px]">
                  <div className="flex-1">
                    <label className="text-muted-foreground mb-[4px] block">Rule ID</label>
                    <p className="text-foreground">{ruleData.ruleId}</p>
                  </div>
                  <div className="w-[276px]">
                    <label className="text-muted-foreground mb-[4px] block">Status</label>
                    {isReadOnly ? (
                      <p className="text-foreground">{status}</p>
                    ) : (
                      <div className="relative">
                        <select
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] text-foreground appearance-none cursor-pointer caption"
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-muted-foreground mb-[4px] block">Description</label>
                  {isReadOnly ? (
                    <p className="text-foreground">{description}</p>
                  ) : (
                    <>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={400}
                        className="w-full min-h-[80px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] text-foreground resize-y"
                      />
                      <p className="caption text-muted-foreground text-right mt-[4px]">{description.length}/400</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Global Murex & GL BE Codes Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex flex-col">
              {/* Section Label and Form Fields Row */}
              <div className="flex gap-[24px] mb-[24px]">
                <div className="w-[200px] flex-shrink-0">
                  <p className="text-foreground">Global Murex & GL BE Codes</p>
                </div>
                <div className="flex-1">
                  {/* Filter Section */}
                  <div className="bg-accent rounded-[8px] p-[16px]">
                    <div className="grid grid-cols-2 gap-x-[16px] gap-y-[24px]">
                      <div>
                        <label className="text-muted-foreground mb-[4px] block">Business Event</label>
                        {isReadOnly ? (
                          <p className="text-foreground">{businessEvent}</p>
                        ) : (
                          <div className="relative">
                            <select
                              value={businessEvent}
                              onChange={(e) => setBusinessEvent(e.target.value)}
                              className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground appearance-none cursor-pointer caption"
                            >
                              <option value="">Select an option</option>
                              {businessEventOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-muted-foreground mb-[4px] block">Hedge Method (Swap Pt)</label>
                        {isReadOnly ? (
                          <p className="text-foreground">{hedgeMethod}</p>
                        ) : (
                          <div className="relative">
                            <select
                              value={hedgeMethod}
                              onChange={(e) => setHedgeMethod(e.target.value)}
                              className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground appearance-none cursor-pointer caption"
                            >
                              <option value="">Select an option</option>
                              {hedgeMethodOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-muted-foreground mb-[4px] block">Currency Type</label>
                        {isReadOnly ? (
                          <p className="text-foreground">{currencyType}</p>
                        ) : (
                          <div className="relative">
                            <select
                              value={currencyType}
                              onChange={(e) => setCurrencyType(e.target.value)}
                              className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground appearance-none cursor-pointer caption"
                            >
                              <option value="">Select an option</option>
                              {currencyTypeOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-muted-foreground mb-[4px] block">Hedging Instrument</label>
                        {isReadOnly ? (
                          <p className="text-foreground">{hedgingInstrument}</p>
                        ) : (
                          <div className="relative">
                            <select
                              value={hedgingInstrument}
                              onChange={(e) => setHedgingInstrument(e.target.value)}
                              className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground appearance-none cursor-pointer caption"
                            >
                              <option value="">Select an option</option>
                              {hedgingInstrumentOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="text-muted-foreground mb-[4px] block">NAV Type</label>
                        {isReadOnly ? (
                          <p className="text-foreground">{navType}</p>
                        ) : (
                          <div className="relative">
                            <select
                              value={navType}
                              onChange={(e) => setNavType(e.target.value)}
                              className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground appearance-none cursor-pointer caption"
                            >
                              <option value="">Select an option</option>
                              {navTypeOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="border border-border rounded-[8px] overflow-hidden">
                <div className="bg-white border-b border-border px-[24px] py-[16px] flex justify-between items-center">
                  <h3 className="h3-component text-foreground">Global Murex & GL BE Codes</h3>
                  {!isReadOnly && (
                    <button
                      onClick={addNewRow}
                      className="px-[24px] py-[8px] border border-border rounded-[4px] hover:bg-accent transition-colors"
                    >
                      <span className="caption">Add New Row</span>
                    </button>
                  )}
                </div>
                <div className="overflow-x-auto relative">
                  <table className="w-full">
                  <thead className="bg-white">
                    <tr className="border-b border-border">
                      <th className="px-[8px] py-[8px] text-left whitespace-nowrap">
                        <label className="text-muted-foreground">Murex Book Code</label>
                      </th>
                      <th className="px-[8px] py-[8px] text-left border-l border-border" colSpan={2}>
                        <label className="text-muted-foreground">GL BE Codes</label>
                      </th>
                      <th className="px-[8px] py-[8px] text-left border-l border-border whitespace-nowrap">
                        <label className="text-muted-foreground">Entity Type</label>
                      </th>
                      {!isReadOnly && <th className="w-[100px] px-[8px] py-[8px] sticky right-0 bg-white z-10"></th>}
                    </tr>
                  </thead>
                  <tbody>
                    {combinedRows.map((row, idx) => {
                      const isEditing = editingRows.has(idx);
                      return (
                        <tr key={idx} className="border-b border-border bg-white">
                          {/* Murex Book Code */}
                          <td className="px-[8px] py-[4px] whitespace-nowrap">
                            {isReadOnly ? (
                              <p className="caption text-foreground px-[12px] py-[6px]">{row.murexCode}</p>
                            ) : isEditing ? (
                              <div className="relative min-w-[220px]">
                                <select
                                  value={row.murexCode}
                                  onChange={(e) => updateRow(idx, 'murexCode', e.target.value)}
                                  className="w-full h-[36px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground caption appearance-none cursor-pointer"
                                >
                                  <option value="">Select Murex Book Code</option>
                                  <option value="SPOT_MIRR_INTMD_COI">SPOT_MIRR_INTMD_COI</option>
                                  <option value="SPOT_CLOSE_UHCOI_COI">SPOT_CLOSE_UHCOI_COI</option>
                                  <option value="SWAP_MIRR_INSTC_COIRE">SWAP_MIRR_INSTC_COIRE</option>
                                  <option value="SWAP_CLOSE_UHCOI_COI">SWAP_CLOSE_UHCOI_COI</option>
                                  <option value="FWD_MIRR_INTMD_COI">FWD_MIRR_INTMD_COI</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                              </div>
                            ) : (
                              <p className="caption text-foreground px-[12px] py-[6px]">{row.murexCode}</p>
                            )}
                          </td>

                          {/* GL BE Code 1 */}
                          <td className="px-[8px] py-[4px] border-l border-border whitespace-nowrap">
                            {isReadOnly ? (
                              <p className="caption text-foreground px-[12px] py-[6px]">{row.glBeCode1}</p>
                            ) : isEditing ? (
                              <div className="relative min-w-[300px]">
                                <select
                                  value={row.glBeCode1}
                                  onChange={(e) => updateRow(idx, 'glBeCode1', e.target.value)}
                                  className="w-full h-[36px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground caption appearance-none cursor-pointer"
                                >
                                  <option value="">Select GL BE Code</option>
                                  <option value="SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU">SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU</option>
                                  <option value="SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU">SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU</option>
                                  <option value="SG_HAWK_DR_COILOCKBACKFXGAIN_BR">SG_HAWK_DR_COILOCKBACKFXGAIN_BR</option>
                                  <option value="SG_HAWK_CR_COILOCKBACKFXLOSS_BR">SG_HAWK_CR_COILOCKBACKFXLOSS_BR</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                              </div>
                            ) : (
                              <p className="caption text-foreground px-[12px] py-[6px]">{row.glBeCode1}</p>
                            )}
                          </td>

                          {/* GL BE Code 2 */}
                          <td className="px-[8px] py-[4px] whitespace-nowrap">
                            {isReadOnly ? (
                              <p className="caption text-foreground px-[12px] py-[6px]">{row.glBeCode2}</p>
                            ) : isEditing ? (
                              <div className="relative min-w-[300px]">
                                <select
                                  value={row.glBeCode2}
                                  onChange={(e) => updateRow(idx, 'glBeCode2', e.target.value)}
                                  className="w-full h-[36px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground caption appearance-none cursor-pointer"
                                >
                                  <option value="">Select GL BE Code</option>
                                  <option value="SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU">SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU</option>
                                  <option value="SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU">SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU</option>
                                  <option value="SG_HAWK_DR_COILOCKBACKFXGAIN_BR">SG_HAWK_DR_COILOCKBACKFXGAIN_BR</option>
                                  <option value="SG_HAWK_CR_COILOCKBACKFXLOSS_BR">SG_HAWK_CR_COILOCKBACKFXLOSS_BR</option>
                                </select>
                                <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                              </div>
                            ) : (
                              <p className="caption text-foreground px-[12px] py-[6px]">{row.glBeCode2}</p>
                            )}
                          </td>

                          {/* Entity Type */}
                          <td className="px-[8px] py-[4px] border-l border-border">
                            {isReadOnly ? (
                              <div className="flex flex-nowrap gap-[8px] px-[12px] py-[6px] overflow-x-auto">
                                {row.entityType.length > 0 ? (
                                  row.entityType.map(type => (
                                    <span key={type} className="badge px-[8px] py-[2px] bg-muted text-foreground rounded-[4px] whitespace-nowrap">{type}</span>
                                  ))
                                ) : (
                                  <span className="caption text-muted-foreground">-</span>
                                )}
                              </div>
                            ) : isEditing ? (
                              <MultiSelectDropdown
                                options={['All', 'Branch', 'Associate', 'Subsidiary']}
                                selectedValues={row.entityType}
                                onChange={(values) => updateRow(idx, 'entityType', values)}
                                placeholder="Select entity types"
                              />
                            ) : (
                              <div className="flex flex-nowrap gap-[8px] px-[12px] py-[6px] overflow-x-auto">
                                {row.entityType.length > 0 ? (
                                  row.entityType.map(type => (
                                    <span key={type} className="badge px-[8px] py-[2px] bg-muted text-foreground rounded-[4px] whitespace-nowrap">{type}</span>
                                  ))
                                ) : (
                                  <span className="caption text-muted-foreground">-</span>
                                )}
                              </div>
                            )}
                          </td>

                          {/* Actions */}
                          {!isReadOnly && (
                            <td className="px-[8px] py-[4px] sticky right-0 bg-white z-10 border-l border-border">
                              <div className="flex gap-[8px] justify-end">
                                <button
                                  onClick={() => toggleEdit(idx)}
                                  className="p-[4px] hover:bg-accent rounded transition-colors"
                                >
                                  {isEditing ? (
                                    <Save className="w-[16px] h-[16px] text-muted-foreground" />
                                  ) : (
                                    <Pencil className="w-[16px] h-[16px] text-muted-foreground" />
                                  )}
                                </button>
                                <button
                                  onClick={() => removeRow(idx)}
                                  className="p-[4px] hover:bg-accent rounded transition-colors"
                                >
                                  <Trash2 className="w-[16px] h-[16px] text-muted-foreground" />
                                </button>
                              </div>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#f5f7f9] border-t border-border px-[96px] py-[24px] flex-shrink-0">
          <div className="max-w-[1248px] mx-auto flex justify-end gap-[16px]">
            <button
              onClick={onClose}
              className="px-[12px] py-[8px] h-[40px] rounded-[4px] hover:bg-accent transition-colors"
            >
              <span className="text-foreground">Cancel</span>
            </button>
            {!isReadOnly && (
              <button
                onClick={handleSave}
                className="px-[24px] py-[8px] h-[40px] bg-[#0077cc] rounded-[4px] hover:opacity-90 transition-opacity"
              >
                <span className="text-white">Save</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
