import svgPaths from "./svg-gy1knjfchk";

function Frame630265692() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-[32px] min-w-px relative self-stretch shrink-0">
      <div className="flex flex-col font-['Public_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#172733] text-[20px] tracking-[0.1px] w-full">
        <p className="leading-[1.4]">Add New Booking Code</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pc3e4b00} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="close">
      <Container2 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center justify-center left-0 min-h-[32px] p-[4px] rounded-[4px] top-0" data-name="icon-button">
      <Close />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[24px]" data-name="icon-wrapper">
      <IconButton2 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="buttons">
      <IconWrapper />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[16px] items-start max-w-[1200px] relative shrink-0 w-full" data-name="heading">
      <Frame630265692 />
      <Buttons />
    </div>
  );
}

function FocusOverlayHeader() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-center px-[40px] py-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1440px]" data-name="focus-overlay-header">
      <Heading />
    </div>
  );
}

function Frame630265734() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[270px]">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#172733] text-[16px] text-nowrap tracking-[-0.08px] whitespace-pre">Information</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Trace ID</p>
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label />
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[0px] text-[16px] text-nowrap whitespace-pre">SPOT_MIRR_INTMD_COI</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Status</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p1af2eb80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container3 />
    </div>
  );
}

function InputBasic() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">Active</p>
          <ChevronDown16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label1 />
      <InputBasic />
    </div>
  );
}

function InputField2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <InputField1 />
    </div>
  );
}

function Frame630265748() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField />
      <InputField2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">GL BE Code</p>
    </div>
  );
}

function InputBasic1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[0px] text-[16px]">SPOT_MIRR_INTMD_COI</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label2 />
      <InputBasic1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Country</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p1af2eb80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container4 />
    </div>
  );
}

function InputBasic2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">Singapore</p>
          <ChevronDown17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label3 />
      <InputBasic2 />
    </div>
  );
}

function InputField5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <InputField4 />
    </div>
  );
}

function Frame630265750() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField3 />
      <InputField5 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">As of Date</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p38243d80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Calendar16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="calendar_16">
      <Container5 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Calendar16 />
    </div>
  );
}

function InputBasic3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">25/12/2021</p>
          <IconButton3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label4 />
      <InputBasic3 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">System Code</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p1af2eb80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container6 />
    </div>
  );
}

function InputBasic4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">Active</p>
          <ChevronDown18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label5 />
      <InputBasic4 />
    </div>
  );
}

function InputField8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <InputField7 />
    </div>
  );
}

function Frame630265749() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField6 />
      <InputField8 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Description</p>
    </div>
  );
}

function TextAreaWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="text area wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start p-[12px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[0px] text-[16px]">SPOT_MIRR_INTMD_COI</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[0.22px] contents right-[0.22px]">
      <div className="absolute bottom-[0.22px] flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center right-[0.22px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "10", "--transform-inner-height": "1" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#69737b] h-px w-[10px]" />
        </div>
      </div>
      <div className="absolute bottom-[0.29px] flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center right-[0.98px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "5", "--transform-inner-height": "1" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#69737b] h-px w-[5px]" />
        </div>
      </div>
    </div>
  );
}

function InputFieldExpand() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name=".input-field/expand">
      <Group1 />
    </div>
  );
}

function Handler() {
  return (
    <div className="relative shrink-0 w-full" data-name="handler">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex items-start justify-end pl-0 pr-[8px] py-[8px] relative w-full">
          <InputFieldExpand />
        </div>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Text Area">
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <TextAreaWrapper />
      <Handler />
    </div>
  );
}

function HelpTextCharacterCount() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Help text / character count">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#69737b] text-[14px] text-nowrap text-right whitespace-pre">0/400</p>
    </div>
  );
}

function InputField9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label6 />
      <TextArea />
      <HelpTextCharacterCount />
    </div>
  );
}

function InputField10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-field">
      <InputField9 />
    </div>
  );
}

function Frame630265742() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame630265748 />
      <Frame630265750 />
      <Frame630265749 />
      <InputField10 />
    </div>
  );
}

function TransactionDetails() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1248px]" data-name="Transaction Details">
      <Frame630265734 />
      <Frame630265742 />
    </div>
  );
}

function Frame630265735() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[270px]">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#172733] text-[16px] text-nowrap tracking-[-0.08px] whitespace-pre">{`Product &  Account Setup`}</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">FX Flag</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p1af2eb80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container7 />
    </div>
  );
}

function InputBasic5() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">SPOT</p>
          <ChevronDown19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label7 />
      <InputBasic5 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Event Type</p>
    </div>
  );
}

function InputBasic6() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">CURR_FXD_FXD</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label8 />
      <InputBasic6 />
    </div>
  );
}

function Frame630265752() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField11 />
      <InputField12 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Business Unit</p>
    </div>
  );
}

function InputBasic7() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">DBSSG BNK INTMD</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label9 />
      <InputBasic7 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Ledger</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p1af2eb80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container8 />
    </div>
  );
}

function InputBasic8() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">DBS BU</p>
          <ChevronDown20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label10 />
      <InputBasic8 />
    </div>
  );
}

function Frame630265753() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField13 />
      <InputField14 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">COA Indicator</p>
    </div>
  );
}

function InputBasic9() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">DBS_INTF</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label11 />
      <InputBasic9 />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">PC Code</p>
    </div>
  );
}

function InputBasic10() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">HAWK</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label12 />
      <InputBasic10 />
    </div>
  );
}

function Frame630265754() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField15 />
      <InputField16 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">GL Account</p>
    </div>
  );
}

function InputBasic11() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">DBS_INTF</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label13 />
      <InputBasic11 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">GL Product</p>
    </div>
  );
}

function InputBasic12() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">HAWK</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label14 />
      <InputBasic12 />
    </div>
  );
}

function Frame630265755() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField17 />
      <InputField18 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Account Base Ind</p>
    </div>
  );
}

function InputBasic13() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">DBS_INTF</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label15 />
      <InputBasic13 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#59656d] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Effective Date</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p38243d80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Calendar17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="calendar_16">
      <Container9 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Calendar17 />
    </div>
  );
}

function InputBasic14() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[16px]">25/12/2021</p>
          <IconButton4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label16 />
      <InputBasic14 />
    </div>
  );
}

function Frame630265751() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <InputField19 />
      <InputField20 />
    </div>
  );
}

function Frame630265864() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame630265752 />
      <Frame630265753 />
      <Frame630265754 />
      <Frame630265755 />
      <Frame630265751 />
    </div>
  );
}

function TransactionDetails1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1248px]" data-name="Transaction Details">
      <Frame630265735 />
      <Frame630265864 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-x-clip overflow-y-auto relative shrink-0" data-name="Component 1">
      <TransactionDetails />
      <TransactionDetails1 />
    </div>
  );
}

function Frame630265802() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-x-clip overflow-y-auto relative shrink-0">
      <Component1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#172733] text-[16px] text-center text-nowrap tracking-[-0.08px] whitespace-pre">Cancel</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0077cc] box-border content-stretch flex flex-col h-[40px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.08px] whitespace-pre">Save</p>
    </div>
  );
}

function Frame630265743() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="button group">
      <Frame630265743 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Actions">
      <ButtonGroup />
    </div>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center px-[96px] py-[24px] relative shrink-0 w-[1440px]" data-name="content">
      <Frame630265802 />
      <Actions />
    </div>
  );
}

function FocusOverlay() {
  return (
    <div className="bg-[#f5f7f9] content-stretch flex flex-col items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[1440px]" data-name="focus overlay">
      <FocusOverlayHeader />
      <Content />
    </div>
  );
}

export default function GlBeCodeAddNew() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[rgba(23,24,26,0.49)] items-start pb-0 pt-[24px] px-0 relative size-full to-[rgba(113,118,128,0.7)]" data-name="GL BE Code - Add New">
      <FocusOverlay />
    </div>
  );
}