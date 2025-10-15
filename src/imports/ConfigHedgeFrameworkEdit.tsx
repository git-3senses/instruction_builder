import svgPaths from "./svg-ytvkcnwpt9";

function Frame630265692() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-[32px] min-w-px relative self-stretch shrink-0">
      <div className="flex flex-col font-['Public_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#172733] text-[20px] tracking-[0.1px] w-full">
        <p className="leading-[1.4]">Add Rule Config</p>
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
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#172733] text-[16px] text-nowrap tracking-[-0.08px] whitespace-pre">Config Information</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Rule ID</p>
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input-field">
      <Label />
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[16px] text-nowrap whitespace-pre">R005</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Status</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[276px]" data-name="input-field">
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
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Description</p>
    </div>
  );
}

function TextAreaWrapper() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="text area wrapper">
      <div className="size-full">
        <div className="h-[48px] w-full" />
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

function InputField3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label2 />
      <TextArea />
      <HelpTextCharacterCount />
    </div>
  );
}

function InputField4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-field">
      <InputField3 />
    </div>
  );
}

function Frame630265742() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[884px]">
      <Frame630265748 />
      <InputField4 />
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
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#172733] text-[16px] text-nowrap tracking-[-0.08px] whitespace-pre">{`Global Murex & GL BE Codes`}</p>
    </div>
  );
}

function Frame630265767() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0">
      <Frame630265735 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Currency Type</p>
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

function InputBasic1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">Select an option</p>
          <ChevronDown17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label3 />
      <InputBasic1 />
    </div>
  );
}

function CurrencyType() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-0 mt-[69px] relative w-[414px]" data-name="Currency Type">
      <InputField5 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Hedging Instrument</p>
    </div>
  );
}

function Container5() {
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
      <Container5 />
    </div>
  );
}

function InputBasic2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">Select an option</p>
          <ChevronDown18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label4 />
      <InputBasic2 />
    </div>
  );
}

function MurexOutboundProductCode() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-[430px] mt-[69px] relative w-[414px]" data-name="Murex Outbound Product Code">
      <InputField6 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">NAV Type</p>
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

function ChevronDown19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container6 />
    </div>
  );
}

function InputBasic3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">Select an option</p>
          <ChevronDown19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField7() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[4px] items-start ml-0 mt-[138px] relative w-[414px]" data-name="input-field">
      <Label5 />
      <InputBasic3 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Hedge Method (Swap Pt)</p>
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

function ChevronDown20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container7 />
    </div>
  );
}

function InputBasic4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">Select an option</p>
          <ChevronDown20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label6 />
      <InputBasic4 />
    </div>
  );
}

function HedgeMethod() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-[430px] mt-0 relative w-[414px]" data-name="Hedge Method">
      <InputField8 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#455057] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Business Event</p>
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

function ChevronDown21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container8 />
    </div>
  );
}

function InputBasic5() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">Select an option</p>
          <ChevronDown21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <Label7 />
      <InputBasic5 />
    </div>
  );
}

function Instruction() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-0 mt-0 relative w-[414px]" data-name="Instruction">
      <InputField9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16px] mt-[16px] place-items-start relative">
      <CurrencyType />
      <MurexOutboundProductCode />
      <InputField7 />
      <HedgeMethod />
      <Instruction />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#eef2f5] h-[225px] ml-0 mt-0 w-[892px]" />
      <Group2 />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center min-h-[32px] relative shrink-0" data-name="text-block">
      <div className="flex flex-col font-['Public_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#172733] text-[20px] text-nowrap tracking-[0.1px]">
        <p className="leading-[1.4] whitespace-pre">Murex Bookings</p>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left content">
      <TextBlock />
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex flex-col h-[32px] items-center justify-center min-h-[32px] px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-center text-nowrap tracking-[-0.07px] whitespace-pre">Add New Row</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="buttons">
      <Button />
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="right content">
      <Buttons1 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="table-header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative w-full">
          <LeftContent />
          <RightContent />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="checkbox-input">
      <Input />
    </div>
  );
}

function ColumnHeader() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-center px-[12px] py-[8px] relative shrink-0 w-[48px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <CheckboxInput />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pfaf0b80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons16PxSortActive() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container11 />
    </div>
  );
}

function Sort() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive />
    </div>
  );
}

function Sorter() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Murex Book Code</p>
      <Sort />
    </div>
  );
}

function Container13() {
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

function ChevronDown22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container13 />
    </div>
  );
}

function InputBasic6() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic6 />
    </div>
  );
}

function ColumnHeader1() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[8px] relative size-full">
          <Sorter />
          <InputField10 />
        </div>
      </div>
    </div>
  );
}

function ColumnHeader2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between pl-[8px] pr-0 py-[8px] relative shrink-0 w-[90px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableHeaderContent() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="table-header-content">
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader />
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <ColumnHeader1 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader2 />
      </div>
    </div>
  );
}

function Frame630265728() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <TableHeaderContent />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input1 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton4 />
    </div>
  );
}

function DataCell() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame30 />
    </div>
  );
}

function Frame48096559() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">SPOT_MIRR_INTMD_COI</p>
    </div>
  );
}

function DataCell1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096559 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container16 />
    </div>
  );
}

function IconButton5() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash16 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton5 />
    </div>
  );
}

function DataCell2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame31 />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell />
      <DataCell1 />
      <DataCell2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input2 />
    </div>
  );
}

function IconButton6() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton6 />
    </div>
  );
}

function DataCell3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame32 />
    </div>
  );
}

function Frame48096560() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">SPOT_CLOSE_UHCOI_COI</p>
    </div>
  );
}

function DataCell4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096560 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container19 />
    </div>
  );
}

function IconButton7() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash17 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton7 />
    </div>
  );
}

function DataCell5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame33 />
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell3 />
      <DataCell4 />
      <DataCell5 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input3 />
    </div>
  );
}

function IconButton8() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput3 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton8 />
    </div>
  );
}

function DataCell6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame34 />
    </div>
  );
}

function Frame48096561() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">SWAP_MIRR_INSTC_COIRE</p>
    </div>
  );
}

function DataCell7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096561 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container22 />
    </div>
  );
}

function IconButton9() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash18 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton9 />
    </div>
  );
}

function DataCell8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame35 />
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <DataCell6 />
      <DataCell7 />
      <DataCell8 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input4 />
    </div>
  );
}

function IconButton10() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput4 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton10 />
    </div>
  );
}

function DataCell9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame36 />
    </div>
  );
}

function Frame48096562() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">SPOT_TRFNEAR_INSTC_COI</p>
    </div>
  );
}

function DataCell10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096562 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container25 />
    </div>
  );
}

function IconButton11() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash19 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton11 />
    </div>
  );
}

function DataCell11() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame37 />
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell9 />
      <DataCell10 />
      <DataCell11 />
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input5 />
    </div>
  );
}

function IconButton12() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput5 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton12 />
    </div>
  );
}

function DataCell12() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame38 />
    </div>
  );
}

function Frame48096563() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">SPOT_MIRR_HGGIC_COI</p>
    </div>
  );
}

function DataCell13() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096563 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container28 />
    </div>
  );
}

function IconButton13() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash20 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton13 />
    </div>
  );
}

function DataCell14() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame39 />
    </div>
  );
}

function Item4() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell12 />
      <DataCell13 />
      <DataCell14 />
    </div>
  );
}

function Frame630265768() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Frame630265710() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <TableHeader />
      <Frame630265728 />
      <Frame630265768 />
    </div>
  );
}

function Frame630265739() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#dde3e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame630265710 />
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center min-h-[32px] relative shrink-0" data-name="text-block">
      <div className="flex flex-col font-['Public_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#172733] text-[20px] text-nowrap tracking-[0.1px]">
        <p className="leading-[1.4] whitespace-pre">GL BE Codes</p>
      </div>
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left content">
      <TextBlock1 />
    </div>
  );
}

function Button11() {
  return (
    <div className="box-border content-stretch flex flex-col h-[32px] items-center justify-center min-h-[32px] px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-center text-nowrap tracking-[-0.07px] whitespace-pre">Add New Row</p>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="buttons">
      <Button11 />
    </div>
  );
}

function RightContent1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="right content">
      <Buttons2 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="table-header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative w-full">
          <LeftContent1 />
          <RightContent1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="checkbox-input">
      <Input6 />
    </div>
  );
}

function ColumnHeader3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-center px-[12px] py-[8px] relative shrink-0 w-[48px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <CheckboxInput6 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pfaf0b80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons16PxSortActive1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container31 />
    </div>
  );
}

function Sort1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive1 />
    </div>
  );
}

function Sorter1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">GL BE Code</p>
      <Sort1 />
    </div>
  );
}

function ColumnHeader4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[377px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pfaf0b80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons16PxSortActive2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container32 />
    </div>
  );
}

function Sort2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive2 />
    </div>
  );
}

function Sorter2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Entity Type</p>
      <Sort2 />
    </div>
  );
}

function ColumnHeader5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[377px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter2 />
    </div>
  );
}

function ColumnHeader6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between pl-[8px] pr-0 py-[8px] relative shrink-0 w-[90px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableHeaderContent1() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="table-header-content">
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader3 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader4 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader5 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader6 />
      </div>
    </div>
  );
}

function Frame630265729() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <TableHeaderContent1 />
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input7 />
    </div>
  );
}

function IconButton15() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput7 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton15 />
    </div>
  );
}

function DataCell15() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame40 />
    </div>
  );
}

function Frame48096564() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU</p>
    </div>
  );
}

function DataCell16() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096564 />
        </div>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Branch</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label9 />
    </div>
  );
}

function TagFilter() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container35 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Associate</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label10 />
    </div>
  );
}

function TagFilter1() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container36 />
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Subsidiary</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label11 />
    </div>
  );
}

function TagFilter2() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container37 />
      </div>
    </div>
  );
}

function TagGroup() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="tag group">
      <TagFilter />
      <TagFilter1 />
      <TagFilter2 />
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="container">
      <TagGroup />
    </div>
  );
}

function DataCell17() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[8px] py-[12px] relative w-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container39 />
    </div>
  );
}

function IconButton16() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash21 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton16 />
    </div>
  );
}

function DataCell18() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame41 />
    </div>
  );
}

function Item5() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell15 />
      <DataCell16 />
      <DataCell17 />
      <DataCell18 />
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input8 />
    </div>
  );
}

function IconButton17() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput8 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton17 />
    </div>
  );
}

function DataCell19() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame42 />
    </div>
  );
}

function Frame48096565() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU</p>
    </div>
  );
}

function DataCell20() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096565 />
        </div>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Branch</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label12 />
    </div>
  );
}

function TagFilter3() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container42 />
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Associate</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label13 />
    </div>
  );
}

function TagFilter4() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container43 />
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Subsidiary</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label14 />
    </div>
  );
}

function TagFilter5() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container44 />
      </div>
    </div>
  );
}

function TagGroup1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="tag group">
      <TagFilter3 />
      <TagFilter4 />
      <TagFilter5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="container">
      <TagGroup1 />
    </div>
  );
}

function DataCell21() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[8px] py-[12px] relative w-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container46 />
    </div>
  );
}

function IconButton18() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash22 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton18 />
    </div>
  );
}

function DataCell22() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame43 />
    </div>
  );
}

function Item6() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell19 />
      <DataCell20 />
      <DataCell21 />
      <DataCell22 />
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input9 />
    </div>
  );
}

function IconButton19() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput9 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton19 />
    </div>
  );
}

function DataCell23() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame44 />
    </div>
  );
}

function Frame48096566() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_BR</p>
    </div>
  );
}

function DataCell24() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096566 />
        </div>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Branch</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label15 />
    </div>
  );
}

function TagFilter6() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container49 />
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Associate</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label16 />
    </div>
  );
}

function TagFilter7() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container50 />
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Subsidiary</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label17 />
    </div>
  );
}

function TagFilter8() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container51 />
      </div>
    </div>
  );
}

function TagGroup2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="tag group">
      <TagFilter6 />
      <TagFilter7 />
      <TagFilter8 />
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="container">
      <TagGroup2 />
    </div>
  );
}

function DataCell25() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[8px] py-[12px] relative w-full">
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container53 />
    </div>
  );
}

function IconButton20() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash23 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton20 />
    </div>
  );
}

function DataCell26() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame45 />
    </div>
  );
}

function Item7() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <DataCell23 />
      <DataCell24 />
      <DataCell25 />
      <DataCell26 />
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input10 />
    </div>
  );
}

function IconButton21() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput10 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton21 />
    </div>
  );
}

function DataCell27() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame46 />
    </div>
  );
}

function Frame48096567() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-[216px]">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">SG_HAWK_cR_UHDCOILOCKBACKFXLOSS_BR</p>
    </div>
  );
}

function DataCell28() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[8px] py-[12px] relative w-full">
          <Frame48096567 />
        </div>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Branch</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label18 />
    </div>
  );
}

function TagFilter9() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container56 />
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Associate</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label19 />
    </div>
  );
}

function TagFilter10() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container57 />
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-nowrap tracking-[-0.07px] whitespace-pre">Subsidiary</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex h-full items-center justify-end relative rounded-[4px] shrink-0" data-name="container">
      <Label20 />
    </div>
  );
}

function TagFilter11() {
  return (
    <div className="bg-[#dde3e7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="tag-filter">
      <div className="flex flex-row items-center self-stretch">
        <Container58 />
      </div>
    </div>
  );
}

function TagGroup3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="tag group">
      <TagFilter9 />
      <TagFilter10 />
      <TagFilter11 />
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="container">
      <TagGroup3 />
    </div>
  );
}

function DataCell29() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[8px] py-[12px] relative w-full">
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container60 />
    </div>
  );
}

function IconButton22() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash24 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton22 />
    </div>
  );
}

function DataCell30() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame47 />
    </div>
  );
}

function Item8() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell27 />
      <DataCell28 />
      <DataCell29 />
      <DataCell30 />
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[18px]" data-name="input">
      <div className="content-stretch flex flex-col items-center overflow-clip rounded-[inherit] size-[18px]" />
      <div aria-hidden="true" className="absolute border-2 border-[#69737b] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function CheckboxInput11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="checkbox-input">
      <Input11 />
    </div>
  );
}

function IconButton23() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <CheckboxInput11 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton23 />
    </div>
  );
}

function DataCell31() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48 />
    </div>
  );
}

function Container63() {
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

function ChevronDown23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container63 />
    </div>
  );
}

function InputBasic7() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">Select GL BE Code</p>
          <ChevronDown23 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic7 />
    </div>
  );
}

function DataCell32() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[6px] relative w-full">
          <InputField11 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
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

function ChevronDown24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="chevron-down_16">
      <Container65 />
    </div>
  );
}

function InputBasic8() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">Choose Entity Type</p>
          <ChevronDown24 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic8 />
    </div>
  );
}

function DataCell33() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[6px] relative w-full">
          <InputField12 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pa01cab0} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="trash_16">
      <Container66 />
    </div>
  );
}

function IconButton24() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Trash25 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton24 />
    </div>
  );
}

function DataCell34() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative shrink-0 w-[90px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame49 />
    </div>
  );
}

function Item9() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start relative shrink-0 w-full" data-name="Item">
      <DataCell31 />
      <DataCell32 />
      <DataCell33 />
      <DataCell34 />
    </div>
  );
}

function Frame630265769() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Frame630265711() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-full">
      <TableHeader1 />
      <Frame630265729 />
      <Frame630265769 />
    </div>
  );
}

function Frame630265740() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[24px] items-start ml-0 mt-0 relative rounded-[8px] w-[892px]">
      <div aria-hidden="true" className="absolute border border-[#dde3e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame630265711 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame630265740 />
    </div>
  );
}

function Frame630265897() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[24px] items-start ml-0 mt-0 relative w-[892px]">
      <Group4 />
      <Frame630265739 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame630265897 />
    </div>
  );
}

function TransactionDetails1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[24px] items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1248px]" data-name="Transaction Details">
      <Frame630265767 />
      <Group5 />
    </div>
  );
}

function Frame630265802() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-x-clip overflow-y-auto relative shrink-0">
      <TransactionDetails />
      <TransactionDetails1 />
    </div>
  );
}

function Button24() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#172733] text-[16px] text-center text-nowrap tracking-[-0.08px] whitespace-pre">Cancel</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[#0077cc] box-border content-stretch flex flex-col h-[40px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.08px] whitespace-pre">Save</p>
    </div>
  );
}

function Frame630265743() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Button24 />
      <Button25 />
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
    <div className="bg-[#f5f7f9] content-stretch flex flex-col h-[1856px] items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[1440px]" data-name="focus overlay">
      <FocusOverlayHeader />
      <Content />
    </div>
  );
}

export default function ConfigHedgeFrameworkEdit() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[rgba(23,24,26,0.49)] items-start pb-0 pt-[24px] px-0 relative size-full to-[rgba(113,118,128,0.7)]" data-name="Config - Hedge Framework Edit">
      <FocusOverlay />
    </div>
  );
}