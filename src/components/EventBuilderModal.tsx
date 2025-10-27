import { useState, useEffect } from 'react';
import { X, ChevronDown, Pencil, Save, Trash2 } from './icons';
import { 
  ENTITY_TYPE_OPTIONS, 
  BUSINESS_EVENT_OPTIONS, 
  HEDGE_METHOD_OPTIONS,
  CURRENCY_TYPE_OPTIONS,
  HEDGING_INSTRUMENT_OPTIONS,
  NAV_TYPE_OPTIONS,
  GL_BE_CODE_OPTIONS
} from './eventBuilderConstants';

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
  glBeCodes: Array<{
    code: string;
    entityType: string;
  }>;
}

interface EventBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'add' | 'edit' | 'view';
  nextEventId?: string;
  rowData?: EventRow;
}

interface GLBeCodeRow {
  beCode: string;
  entityType: string[];
  isEditing: boolean;
}

export function EventBuilderModal({ isOpen, onClose, mode, nextEventId, rowData }: EventBuilderModalProps) {
  const [status, setStatus] = useState('Active');
  const [description, setDescription] = useState('');
  const [businessEvent, setBusinessEvent] = useState('');
  const [hedgeMethod, setHedgeMethod] = useState('');
  const [currencyType, setCurrencyType] = useState('');
  const [hedgingInstrument, setHedgingInstrument] = useState('');
  const [navType, setNavType] = useState('');

  const [glBeCodeRows, setGlBeCodeRows] = useState<GLBeCodeRow[]>([
    { beCode: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU', entityType: ['All'], isEditing: false },
    { beCode: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU', entityType: ['Branch', 'Subsi'], isEditing: false },
    { beCode: 'SG_HAWK_DR_COILOCKBACKFXGAIN_BR', entityType: ['Assoc', 'Tmu'], isEditing: false },
  ]);

  // Populate form fields when rowData is provided (edit or view mode)
  useEffect(() => {
    if (rowData && (mode === 'edit' || mode === 'view')) {
      setBusinessEvent(rowData.businessEvent);
      setHedgeMethod(rowData.hedgeMethod);
      setCurrencyType(rowData.currencyType);
      setHedgingInstrument(rowData.hedgingInstrument);
      setStatus(rowData.status);
      setNavType(rowData.navType);
      
      // Convert glBeCodes from page format to modal format
      const convertedRows = rowData.glBeCodes.map(glBeCode => ({
        beCode: glBeCode.code,
        entityType: [glBeCode.entityType], // Convert string to array
        isEditing: false
      }));
      setGlBeCodeRows(convertedRows);
    } else if (mode === 'add') {
      // Reset form for add mode
      setBusinessEvent('');
      setHedgeMethod('');
      setCurrencyType('');
      setHedgingInstrument('');
      setStatus('Active');
      setNavType('');
      setGlBeCodeRows([
        { beCode: 'SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU', entityType: ['All'], isEditing: false },
        { beCode: 'SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU', entityType: ['Branch', 'Subsi'], isEditing: false },
        { beCode: 'SG_HAWK_DR_COILOCKBACKFXGAIN_BR', entityType: ['Assoc', 'Tmu'], isEditing: false },
      ]);
    }
  }, [rowData, mode]);

  const businessEventOptions = BUSINESS_EVENT_OPTIONS;
  const hedgeMethodOptions = HEDGE_METHOD_OPTIONS;
  const currencyTypeOptions = CURRENCY_TYPE_OPTIONS;
  const hedgingInstrumentOptions = HEDGING_INSTRUMENT_OPTIONS;
  const navTypeOptions = NAV_TYPE_OPTIONS;
  const glBeCodeOptions = GL_BE_CODE_OPTIONS;
  const entityTypeOptions = ENTITY_TYPE_OPTIONS;

  const isReadOnly = mode === 'view';
  const title = mode === 'add' ? 'Add New Event' : mode === 'edit' ? 'Edit Event' : 'View Event';

  const addNewRow = () => {
    setGlBeCodeRows([...glBeCodeRows, { 
      beCode: '', 
      entityType: [], 
      isEditing: true 
    }]);
  };

  const removeRow = (index: number) => {
    setGlBeCodeRows(glBeCodeRows.filter((_, i) => i !== index));
  };

  const toggleEditRow = (index: number) => {
    const newRows = [...glBeCodeRows];
    newRows[index].isEditing = !newRows[index].isEditing;
    setGlBeCodeRows(newRows);
  };

  const updateRow = (index: number, field: keyof GLBeCodeRow, value: any) => {
    const newRows = [...glBeCodeRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setGlBeCodeRows(newRows);
  };

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[24px] pb-0 bg-gradient-to-b from-[rgba(23,24,26,0.49)] to-[rgba(113,118,128,0.7)]">
      <div className="bg-[#f5f7f9] rounded-tl-[8px] rounded-tr-[8px] w-full flex flex-col" style={{ height: 'calc(100vh - 24px)' }}>
        {/* Header */}
        <div className="bg-white border-b border-border px-[96px] py-[24px] rounded-tl-[8px] rounded-tr-[8px] shadow-sm flex-shrink-0">
          <div className="flex items-center justify-between max-w-[1248px] mx-auto">
            <h3 className="h3-component text-foreground">{title}</h3>
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
            {/* Event Information Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Event Information</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                <div className="flex gap-[24px]">
                  <div className="flex-1">
                    <label className="text-muted-foreground mb-[4px] block">Event ID</label>
                    {mode === 'add' ? (
                      <p className="text-foreground">{nextEventId || 'EVT001'}</p>
                    ) : (
                      <p className="text-foreground">EVT001</p>
                    )}
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
                  <label className="text-muted-foreground mb-[4px] block">Description <span className="text-[#d32f2f]">*</span></label>
                  {isReadOnly ? (
                    <p className="text-foreground">{description || 'Event description'}</p>
                  ) : (
                    <>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        maxLength={400}
                        className="w-full min-h-[80px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] text-foreground resize-y"
                        placeholder="Enter event description..."
                      />
                      <p className="caption text-muted-foreground text-right mt-[4px]">{description.length}/400</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* GL BE Codes Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex flex-col">
              {/* Section Label and Form Fields Row */}
              <div className="flex gap-[24px] mb-[24px]">
                <div className="w-[200px] flex-shrink-0">
                  <p className="text-foreground">GL BE Codes</p>
                </div>
                <div className="flex-1 max-w-[884px]">
                  {/* Filter Section */}
                  <div className="bg-accent rounded-[8px] p-[16px]">
                    <div className="grid grid-cols-2 gap-x-[16px] gap-y-[24px]">
                      <div>
                        <label className="text-muted-foreground mb-[4px] block">Business Event</label>
                        {isReadOnly ? (
                          <p className="text-foreground h-[40px] flex items-center px-[12px]">{businessEvent || '-'}</p>
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
                        <label className="text-muted-foreground mb-[4px] block">Hedge Method</label>
                        {isReadOnly ? (
                          <p className="text-foreground h-[40px] flex items-center px-[12px]">{hedgeMethod || '-'}</p>
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
                          <p className="text-foreground h-[40px] flex items-center px-[12px]">{currencyType || '-'}</p>
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
                          <p className="text-foreground h-[40px] flex items-center px-[12px]">{hedgingInstrument || '-'}</p>
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
                          <p className="text-foreground h-[40px] flex items-center px-[12px]">{navType || '-'}</p>
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
              <div className="flex gap-[24px]">
                <div className="w-[200px] flex-shrink-0"></div>
                <div className="flex-1 max-w-[884px]">
                  <div className="border border-border rounded-[8px] overflow-hidden">
                    <div className="bg-white border-b border-border px-[24px] py-[16px] flex justify-between items-center">
                  <h3 className="h3-component text-foreground">GL BE Codes Table</h3>
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
                          <label className="text-muted-foreground">GL BE Code</label>
                        </th>
                        <th className="px-[8px] py-[8px] text-left whitespace-nowrap">
                          <label className="text-muted-foreground">Entity Type</label>
                        </th>
                        <th className="w-[100px] px-[8px] py-[8px] sticky right-0 bg-white z-10"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {glBeCodeRows.length === 0 ? (
                        <tr className="bg-white">
                          <td colSpan={3} className="px-[24px] py-[32px] text-center">
                            <p className="caption text-muted-foreground">No rows added yet. Click "Add New Row" to get started.</p>
                          </td>
                        </tr>
                      ) : (
                        glBeCodeRows.map((row, idx) => (
                          <tr key={idx} className="border-b border-border bg-white">
                            {/* GL BE Code */}
                            <td className="px-[8px] py-[4px] whitespace-nowrap">
                              {row.isEditing ? (
                                <div className="relative min-w-[300px]">
                                  <select
                                    value={row.beCode}
                                    onChange={(e) => updateRow(idx, 'beCode', e.target.value)}
                                    className="w-full h-[36px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground caption appearance-none cursor-pointer"
                                  >
                                    <option value="">Select GL BE Code</option>
                                    {glBeCodeOptions.map(code => (
                                      <option key={code} value={code}>{code}</option>
                                    ))}
                                  </select>
                                  <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                                </div>
                              ) : (
                                <p className="caption text-foreground px-[12px] py-[6px]">{row.beCode || '-'}</p>
                              )}
                            </td>
                            
                            {/* Entity Type */}
                            <td className="px-[8px] py-[4px]">
                              {row.isEditing ? (
                                <div className="relative min-w-[200px]">
                                  <select
                                    value={row.entityType.length === 1 ? row.entityType[0] : ''}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      if (value === 'All') {
                                        updateRow(idx, 'entityType', ['All']);
                                      } else if (value) {
                                        updateRow(idx, 'entityType', [value]);
                                      } else {
                                        updateRow(idx, 'entityType', []);
                                      }
                                    }}
                                    className="w-full h-[36px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] text-muted-foreground caption appearance-none cursor-pointer"
                                  >
                                    <option value="">Select Entity Type</option>
                                    {entityTypeOptions.map(entity => (
                                      <option key={entity} value={entity}>{entity}</option>
                                    ))}
                                  </select>
                                  <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                                </div>
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
                            <td className="px-[8px] py-[4px] sticky right-0 bg-white z-10 border-l border-border">
                              <div className="flex gap-[8px] justify-end">
                                {!isReadOnly && (
                                  <>
                                    <button
                                      onClick={() => toggleEditRow(idx)}
                                      className="p-[4px] hover:bg-accent rounded transition-colors"
                                    >
                                      {row.isEditing ? (
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
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
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
