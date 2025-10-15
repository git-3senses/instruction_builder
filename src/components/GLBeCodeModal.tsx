import { X, ChevronDown, Calendar } from './icons';

interface GLBeCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'add' | 'edit' | 'view';
  data?: {
    beCode: string;
    description: string;
    eventType: string;
    businessUnit: string;
    ledger: string;
    coaIndicator: string;
    pcCode: string;
    glAccount: string;
    glProduct: string;
    effectiveStartDate: string;
    accountBaseIndicator: string;
  };
}

export function GLBeCodeModal({ isOpen, onClose, mode, data }: GLBeCodeModalProps) {
  if (!isOpen) return null;

  const isReadOnly = mode === 'view';
  const title = mode === 'add' ? 'Add New GL BE Code' : mode === 'edit' ? 'Edit GL BE Code' : 'View GL BE Code';
  
  // Helper function to get field value
  const getFieldValue = (field: keyof typeof data, defaultValue: string = '') => {
    if (mode === 'add') return '';
    return data?.[field] || defaultValue;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[24px] bg-gradient-to-b from-[rgba(23,24,26,0.49)] to-[rgba(113,118,128,0.7)]">
      <div className="bg-[#f5f7f9] rounded-tl-[8px] rounded-tr-[8px] w-full flex flex-col h-[calc(100vh-24px)] overflow-hidden">
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
          <div className="max-w-[1248px] mx-auto flex flex-col gap-[16px]">
            {/* Information Section */}
            <div className="bg-white rounded-[8px] shadow-sm p-[24px] flex gap-[24px]">
              <div className="w-[270px] shrink-0">
                <p className="text-foreground">Information</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Trace ID</label>
                    {mode === 'add' ? (
                      <input
                        type="text"
                        placeholder="Auto-generated"
                        disabled
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-muted-foreground"
                      />
                    ) : (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('beCode')}</p>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Status</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Active</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] appearance-none pr-[32px] caption text-foreground"
                          defaultValue={mode === 'add' ? 'Active' : 'Active'}
                        >
                          <option className="caption">Active</option>
                          <option className="caption">Inactive</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">GL BE Code</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('beCode')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter GL BE Code' : ''}
                        defaultValue={getFieldValue('beCode')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Country</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Singapore</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] appearance-none pr-[32px] caption text-foreground"
                          defaultValue={mode === 'add' ? '' : 'Singapore'}
                        >
                          {mode === 'add' && <option value="" className="caption">Select Country</option>}
                          <option className="caption">Singapore</option>
                          <option className="caption">Malaysia</option>
                          <option className="caption">Indonesia</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">As of Date</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">25/12/2021</p>
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          placeholder={mode === 'add' ? 'DD/MM/YYYY' : ''}
                          defaultValue={mode === 'add' ? '' : '25/12/2021'}
                          className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] pr-[32px] caption text-foreground"
                        />
                        <Calendar className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">System Code</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">HAWK</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] appearance-none pr-[32px] caption text-foreground"
                          defaultValue={mode === 'add' ? '' : 'HAWK'}
                        >
                          {mode === 'add' && <option value="" className="caption">Select System Code</option>}
                          <option className="caption">HAWK</option>
                          <option className="caption">EAGLE</option>
                          <option className="caption">FALCON</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-[4px]">
                  <label className="text-muted-foreground">Description</label>
                  {isReadOnly ? (
                    <p className="caption text-foreground min-h-[80px] flex items-start py-[12px]">{getFieldValue('description')}</p>
                  ) : (
                    <>
                      <textarea
                        placeholder={mode === 'add' ? 'Enter description' : ''}
                        defaultValue={getFieldValue('description')}
                        maxLength={400}
                        className="w-full min-h-[80px] px-[12px] py-[12px] bg-input-background border border-border rounded-[4px] resize-none caption text-foreground"
                      />
                      <p className="caption text-muted-foreground text-right">0/400</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Product & Account Setup Section */}
            <div className="bg-white rounded-[8px] shadow-sm p-[24px] flex gap-[24px]">
              <div className="w-[270px] shrink-0">
                <p className="text-foreground">Product & Account Setup</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">FX Flag</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">SPOT</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] appearance-none pr-[32px] caption text-foreground"
                          defaultValue={mode === 'add' ? '' : 'SPOT'}
                        >
                          {mode === 'add' && <option value="" className="caption">Select FX Flag</option>}
                          <option className="caption">SPOT</option>
                          <option className="caption">FORWARD</option>
                          <option className="caption">SWAP</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Event Type</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('eventType')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter Event Type' : ''}
                        defaultValue={getFieldValue('eventType')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Business Unit</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('businessUnit')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter Business Unit' : ''}
                        defaultValue={getFieldValue('businessUnit')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Ledger</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('ledger')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] appearance-none pr-[32px] caption text-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('ledger')}
                        >
                          {mode === 'add' && <option value="" className="caption">Select Ledger</option>}
                          <option className="caption">DBS BU</option>
                          <option className="caption">Actuals</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">COA Indicator</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('coaIndicator')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter COA Indicator' : ''}
                        defaultValue={getFieldValue('coaIndicator')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">PC Code</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('pcCode')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter PC Code' : ''}
                        defaultValue={getFieldValue('pcCode')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">GL Account</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('glAccount')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter GL Account' : ''}
                        defaultValue={getFieldValue('glAccount')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">GL Product</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('glProduct')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter GL Product' : ''}
                        defaultValue={getFieldValue('glProduct')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                </div>

                {/* Row 5 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Account Base Ind</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('accountBaseIndicator')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter Account Base Indicator' : ''}
                        defaultValue={getFieldValue('accountBaseIndicator')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Effective Date</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('effectiveStartDate')}</p>
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          placeholder={mode === 'add' ? 'DD/MM/YYYY' : ''}
                          defaultValue={mode === 'add' ? '' : getFieldValue('effectiveStartDate')}
                          className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] pr-[32px] caption text-foreground"
                        />
                        <Calendar className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#f5f7f9] px-[96px] py-[24px] border-t border-border flex-shrink-0">
          <div className="max-w-[1248px] mx-auto flex justify-end gap-[16px]">
            <button
              onClick={onClose}
              className="px-[12px] py-[8px] h-[40px] rounded-[4px] hover:bg-accent transition-colors"
            >
              <span className="caption text-foreground">Cancel</span>
            </button>
            {!isReadOnly && (
              <button
                onClick={onClose}
                className="px-[24px] py-[8px] h-[40px] bg-[#0077cc] rounded-[4px] hover:bg-[#005fa3] transition-colors"
              >
                <span className="caption text-white">Save</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
