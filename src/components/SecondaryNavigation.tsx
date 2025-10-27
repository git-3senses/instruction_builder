import { useState } from 'react';
import svgPathsCollapse from '../imports/svg-tl6f4bx58i';
import svgPathsExpand from '../imports/svg-ontkmb16ni';

interface SecondaryNavigationProps {
  isExpanded: boolean;
  onToggle: () => void;
  activeItem: string;
  onItemChange: (item: string) => void;
}

export function SecondaryNavigation({ isExpanded, onToggle, activeItem, onItemChange }: SecondaryNavigationProps) {

  const menuItems = [
    'SFX Hedging Framework',
    'Currency',
    'Overlay',
    'Entity',
    'Picklist',
    'Portfolio',
    'Product',
    'Murex Booking Codes',
    'Instruction Builder',
    'GL BE Codes',
    'Event Builder',
    'Adjustment'
  ];

  if (!isExpanded) {
    // Collapsed View - 40px wide
    return (
      <div className="bg-white w-[40px] shrink-0 border-r border-border flex items-center justify-center" style={{ height: 'calc(100vh - 82px)' }}>
        <button
          onClick={onToggle}
          className="p-[8px] hover:bg-accent rounded transition-colors"
        >
          <svg className="size-[16px]" fill="none" viewBox="0 0 11.5 11.5">
            <g>
              <path clipRule="evenodd" d={svgPathsExpand.p2725ea00} fill="#69737B" fillRule="evenodd" transform="rotate(180 3.14 5.75)" />
            </g>
          </svg>
        </button>
      </div>
    );
  }

  // Expanded View
  return (
    <div className="bg-white w-[240px] shrink-0 border-r border-border flex flex-col" style={{ height: 'calc(100vh - 82px)' }}>
      {/* Pages Section */}
      <div className="flex-1 overflow-y-auto py-[8px]">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => onItemChange(item)}
            className={`w-full px-[16px] py-[12px] text-left transition-colors ${
              activeItem === item
                ? 'bg-[#e5f4ff]'
                : 'bg-white hover:bg-accent'
            }`}
          >
            <p className="caption text-foreground">{item}</p>
          </button>
        ))}
      </div>

      {/* Optional Secondary Actions */}
      <div className="border-t border-[#eef2f5] py-[8px]">
        <button className="w-full px-[16px] py-[12px] text-left hover:bg-accent transition-colors">
          <div className="flex items-center gap-[8px]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <g>
                <path d={svgPathsCollapse.p342f9700} fill="#69737B" />
                <path d={svgPathsCollapse.p1b3c4000} fill="#69737B" />
              </g>
            </svg>
            <p className="caption text-foreground">Print</p>
          </div>
        </button>
        <button className="w-full px-[16px] py-[12px] text-left hover:bg-accent transition-colors">
          <div className="flex items-center gap-[8px]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <g>
                <path d={svgPathsCollapse.p342f9700} fill="#69737B" />
                <path d={svgPathsCollapse.p1b3c4000} fill="#69737B" />
              </g>
            </svg>
            <p className="caption text-foreground">Settings</p>
          </div>
        </button>
      </div>

      {/* Collapse View Button */}
      <div className="border-t border-border">
        <button
          onClick={onToggle}
          className="w-full px-[16px] py-[16px] text-left hover:bg-accent transition-colors flex items-center justify-end gap-[8px]"
        >
          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
            <g>
              <path clipRule="evenodd" d={svgPathsCollapse.p2d11c300} fill="#69737B" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPathsCollapse.p340ae680} fill="#69737B" fillRule="evenodd" />
            </g>
          </svg>
          <p className="caption text-muted-foreground">Collapse View</p>
        </button>
      </div>
    </div>
  );
}
