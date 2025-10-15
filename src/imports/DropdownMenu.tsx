function DropdownItem() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="dropdown-item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Medium',_sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] tracking-[-0.07px]">Activate</p>
        </div>
      </div>
    </div>
  );
}

function DropdownItem1() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="dropdown-item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center p-[12px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Medium',_sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] tracking-[-0.07px]">Audit Log</p>
        </div>
      </div>
    </div>
  );
}

export default function DropdownMenu() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="dropdown-menu">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start overflow-clip px-[4px] py-[8px] relative size-full">
          <DropdownItem />
          <DropdownItem1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(23,24,26,0)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_8px_8px_0px_rgba(0,0,0,0.08),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}