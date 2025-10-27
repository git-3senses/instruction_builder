import { useState, useEffect } from 'react';
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

// Function to generate random Trace ID
const generateTraceId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `TRC-${timestamp}-${random}`;
};

export function GLBeCodeModal({ isOpen, onClose, mode, data }: GLBeCodeModalProps) {
  const [traceId, setTraceId] = useState('');

  // Generate Trace ID when modal opens in 'add' mode
  useEffect(() => {
    if (isOpen && mode === 'add') {
      setTraceId(generateTraceId());
    } else if (isOpen && mode !== 'add') {
      // For edit/view, use existing trace ID from data
      setTraceId(data?.beCode || '');
    }
  }, [isOpen, mode, data?.beCode]);

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
            {/* Basic Information Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Basic Information</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Trace ID</label>
                    {mode === 'add' ? (
                      <input
                        type="text"
                        value={traceId}
                        disabled
                        className="w-full h-[40px] px-[12px] py-[10px] bg-input-background border border-border rounded-[4px] caption text-foreground"
                      />
                    ) : (
                      <p className="caption text-foreground h-[40px] flex items-center">{traceId}</p>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Status</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Active</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-foreground"
                          defaultValue={mode === 'add' ? 'Active' : 'Active'}
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Country <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Singapore</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'Singapore'}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>Singapore</option>
                          <option>Malaysia</option>
                          <option>Indonesia</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">System Code <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">HAWK</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'HAWK'}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>HAWK</option>
                          <option>Manual</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">BE Code <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('beCode')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter BE Code' : ''}
                        defaultValue={getFieldValue('beCode')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
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
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] pr-[32px] caption text-foreground"
                        />
                        <Calendar className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-[4px]">
                  <label className="text-muted-foreground">Description <span className="text-[#d32f2f]">*</span></label>
                  {isReadOnly ? (
                    <p className="caption text-foreground min-h-[80px] flex items-start py-[8px]">{getFieldValue('description')}</p>
                  ) : (
                    <>
                      <textarea
                        placeholder={mode === 'add' ? 'Enter description' : ''}
                        defaultValue={getFieldValue('description')}
                        maxLength={400}
                        className="w-full min-h-[80px] px-[12px] py-[8px] bg-white border border-[#b0b9c0] rounded-[4px] resize-y caption text-foreground"
                      />
                      <p className="caption text-muted-foreground text-right mt-[4px]">0/400</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Product & Account Setup Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Product & Account Setup</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Product Code</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">12345</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter Product Code' : ''}
                        defaultValue={mode === 'add' ? '' : '12345'}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Channel</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Online</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'Online'}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>Online</option>
                          <option>Branch</option>
                          <option>Mobile</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Account Type</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Savings</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'Savings'}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>Savings</option>
                          <option>Current</option>
                          <option>Fixed Deposit</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">FX Flag <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Y</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'Y'}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>Y</option>
                          <option>N</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">BOT</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">BOT001</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter BOT' : ''}
                        defaultValue={mode === 'add' ? '' : 'BOT001'}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </div>

            {/* Accounting Configuration Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Accounting Configuration</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Event Type <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('eventType')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('eventType')}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>DR</option>
                          <option>CR</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Business Unit <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('businessUnit')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('businessUnit')}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>ACU</option>
                          <option>DBU</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Ledger <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('ledger')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('ledger')}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>Actuals</option>
                          <option>Budget</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">COA Indicator <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('coaIndicator')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('coaIndicator')}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>Y</option>
                          <option>N</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">PC Code <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('pcCode')}</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter PC Code' : ''}
                        defaultValue={getFieldValue('pcCode')}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">GL Account <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('glAccount')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('glAccount')}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>1541080</option>
                          <option>55411015</option>
                          <option>1541070</option>
                          <option>14500002</option>
                          <option>20183000</option>
                          <option>14520102</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">GL Product <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('glProduct')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('glProduct')}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>31207</option>
                          <option>99001</option>
                          <option>v7.5 COA</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </div>

            {/* Additional Classifications Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Additional Classifications</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Affiliate</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">AFF001</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter Affiliate' : ''}
                        defaultValue={mode === 'add' ? '' : 'AFF001'}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Resident</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">R</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'R'}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>R</option>
                          <option>N</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">GST</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">O</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'O'}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>O</option>
                          <option>S</option>
                          <option>Z</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Chartfield2</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">CF2001</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter Chartfield2' : ''}
                        defaultValue={mode === 'add' ? '' : 'CF2001'}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Narration Fields Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Narration Fields</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Narration1</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">To reclass</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'To reclass'}
                        >
                          <option value="">Select an option</option>
                          <option>To reclass</option>
                          <option>FX</option>
                          <option>Reclass</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Narration2</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Lock Back</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'Lock Back'}
                        >
                          <option value="">Select an option</option>
                          <option>Lock Back</option>
                          <option>Capital</option>
                          <option>FX Invest Cost</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Narration3</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Invest Cost</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'Invest Cost'}
                        >
                          <option value="">Select an option</option>
                          <option>Invest Cost</option>
                          <option>Reduction</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Narration4</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">Aff</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'Aff'}
                        >
                          <option value="">Select an option</option>
                          <option>Aff</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Narration5</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">TMU</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'TMU'}
                        >
                          <option value="">Select an option</option>
                          <option>TMU</option>
                          <option>Branch</option>
                          <option>Assoc</option>
                          <option>Subsi</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Narration6</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">TMU</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : 'TMU'}
                        >
                          <option value="">Select an option</option>
                          <option>TMU</option>
                          <option>Branch</option>
                          <option>Assoc</option>
                          <option>Subsi</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Narration7</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">-</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue=""
                        >
                          <option value="">Select an option</option>
                          <option>TMU</option>
                          <option>Branch</option>
                          <option>Assoc</option>
                          <option>Subsi</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </div>

            {/* Effective Date & Reference Section */}
            <div className="bg-white rounded-[8px] shadow-sm border border-border p-[24px] flex gap-[24px]">
              <div className="w-[270px] flex-shrink-0">
                <p className="text-foreground">Effective Date & Reference</p>
              </div>
              <div className="flex-1 flex flex-col gap-[24px] max-w-[884px]">
                {/* Row 1 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Effective Start Date <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('effectiveStartDate')}</p>
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          placeholder={mode === 'add' ? 'DD/MM/YYYY' : ''}
                          defaultValue={mode === 'add' ? '' : getFieldValue('effectiveStartDate')}
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] pr-[32px] caption text-foreground"
                        />
                        <Calendar className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Account Base Indicator <span className="text-[#d32f2f]">*</span></label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">{getFieldValue('accountBaseIndicator')}</p>
                    ) : (
                      <div className="relative">
                        <select
                          className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] appearance-none cursor-pointer caption text-muted-foreground"
                          defaultValue={mode === 'add' ? '' : getFieldValue('accountBaseIndicator')}
                        >
                          {mode === 'add' && <option value="">Select an option</option>}
                          <option>Account Transaction</option>
                          <option>Base Transaction</option>
                        </select>
                        <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-muted-foreground pointer-events-none" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[24px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="text-muted-foreground">Agreement ID</label>
                    {isReadOnly ? (
                      <p className="caption text-foreground h-[40px] flex items-center">AGR12345</p>
                    ) : (
                      <input
                        type="text"
                        placeholder={mode === 'add' ? 'Enter Agreement ID' : ''}
                        defaultValue={mode === 'add' ? '' : 'AGR12345'}
                        className="w-full h-[40px] px-[12px] py-[10px] bg-white border border-[#b0b9c0] rounded-[4px] caption text-foreground"
                      />
                    )}
                  </div>
                  <div className="flex-1"></div>
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
              <span className="text-foreground">Cancel</span>
            </button>
            {!isReadOnly && (
              <button
                onClick={onClose}
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
