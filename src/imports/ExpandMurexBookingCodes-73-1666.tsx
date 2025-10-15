import svgPaths from "./svg-be2osyndfh";

function Icon() {
  return (
    <div className="h-[23.993px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p350ea00} fill="var(--fill-0, #FF3E3E)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path clipRule="evenodd" d={svgPaths.p1516e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function LogoDbsLogomark() {
  return (
    <div className="absolute bg-[#172733] box-border content-stretch flex flex-col h-[81.996px] items-start left-0 pb-0 pl-[23.993px] pr-[24.01px] pt-[28.993px] top-0 w-[71.996px]" data-name="LogoDbsLogomark">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1601.34px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1601.34px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#172733] text-[16px] text-nowrap top-[-0.78px] whitespace-pre">Hedge Accounting SFX</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[1601.34px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[1601.34px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Configuration</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[7.986px] h-[52.986px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[81.996px] items-start left-[72px] pb-[1.111px] pt-[15.99px] px-[40px] top-0 w-[1681.34px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[81.996px] relative shrink-0 w-[1753.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[81.996px] relative w-[1753.33px]">
        <LogoDbsLogomark />
        <Container1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.pc698400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#59656d] h-[55.99px] relative shrink-0 w-[71.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[55.99px] items-center justify-center pl-0 pr-[0.017px] py-0 relative w-[71.996px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p375191a0} fill="var(--fill-0, #9BA4AB)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[55.99px] relative shrink-0 w-[71.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[55.99px] items-center justify-center pl-0 pr-[0.017px] py-0 relative w-[71.996px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#172733] h-[918.004px] relative shrink-0 w-[71.996px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[918.004px] items-start relative w-[71.996px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">SFX Hedging Framework</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[7.99px] w-[238.889px]" data-name="Button">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Currency</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[52.97px] w-[238.889px]" data-name="Button">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Overlay</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[97.95px] w-[238.889px]" data-name="Button">
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Entity</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[142.93px] w-[238.889px]" data-name="Button">
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Picklist</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[187.92px] w-[238.889px]" data-name="Button">
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Portfolio</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[232.9px] w-[238.889px]" data-name="Button">
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Product</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[277.88px] w-[238.889px]" data-name="Button">
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Murex Booking Codes</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[322.87px] w-[238.889px]" data-name="Button">
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">GL BE Codes</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[367.85px] w-[238.889px]" data-name="Button">
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Instruction Builder</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#e5f4ff] h-[44.983px] left-0 top-[412.83px] w-[238.889px]" data-name="Button">
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[12px] w-[206.91px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Adjustment</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white h-[44.983px] left-0 top-[457.81px] w-[238.889px]" data-name="Button">
      <Paragraph12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[756.858px] left-0 overflow-clip top-0 w-[238.889px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_15.05%_14.92%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <path d={svgPaths.p33977a50} fill="var(--fill-0, #69737B)" id="Vector" />
          <path d={svgPaths.p34e3200} fill="var(--fill-0, #69737B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[15.99px]">
        <Group />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[31.181px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[31.181px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Print</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[20.99px] items-center left-[15.99px] top-[12px] w-[206.91px]" data-name="Container">
      <Icon3 />
      <Paragraph13 />
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[44.983px] relative shrink-0 w-full" data-name="Button">
      <Container7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_15.05%_14.92%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group">
          <path d={svgPaths.p33977a50} fill="var(--fill-0, #69737B)" id="Vector" />
          <path d={svgPaths.p34e3200} fill="var(--fill-0, #69737B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[15.99px]">
        <Group1 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[54.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[54.375px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[20.99px] items-center left-[15.99px] top-[12px] w-[206.91px]" data-name="Container">
      <Icon4 />
      <Paragraph14 />
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[44.983px] relative shrink-0 w-full" data-name="Button">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[2.67e_-5px] h-[107.049px] items-start left-0 pb-0 pt-[9.097px] px-0 top-[756.86px] w-[238.889px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eef2f5] border-[1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[14.06%_7.81%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p215f2300} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.ped66370} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[15.99px]">
        <Group2 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[91.424px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[91.424px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Collapse View</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[52.969px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[7.986px] h-[52.969px] items-center justify-end pl-0 pr-[15.99px] py-0 relative w-full">
          <Icon5 />
          <Paragraph15 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[54.08px] items-start left-0 pb-0 pt-[1.111px] px-0 top-[863.91px] w-[238.889px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button13 />
    </div>
  );
}

function SecondaryNavigation() {
  return (
    <div className="bg-white h-[917.986px] relative shrink-0 w-[240px]" data-name="SecondaryNavigation">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[917.986px] relative w-[240px]">
        <Container6 />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[308.854px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[308.854px]">
        <p className="absolute font-['Public_Sans:SemiBold',_sans-serif] font-semibold leading-[30px] left-0 text-[#172733] text-[20px] text-nowrap top-[0.33px] whitespace-pre">Instruction Builder Configuration</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">Add New</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[42.517px] relative rounded-[4px] shrink-0 w-[109.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42.517px] items-start pb-[1.111px] pt-[13.542px] px-[25.104px] relative w-[109.288px]">
        <Text />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[75.608px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[75.608px] items-center justify-between pb-[1.111px] pt-0 px-[23.993px] relative w-full">
          <Heading3 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[46.771px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[46.771px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Rule ID</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[92.014px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[92.014px]">
        <Text1 />
        <ChevronDown />
      </div>
    </div>
  );
}

function ColumnFilterDropdown() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[23.99px] top-[12px] w-[92.014px]" data-name="ColumnFilterDropdown">
      <Label />
      <Button15 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[81.528px] left-[72.53px] top-0 w-[140px]" data-name="Header Cell">
      <ColumnFilterDropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[98.906px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[98.906px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Business Event</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[148.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[148.021px]">
        <Text2 />
        <ChevronDown1 />
      </div>
    </div>
  );
}

function ColumnFilterDropdown1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[148.021px]" data-name="ColumnFilterDropdown">
      <Label1 />
      <Button16 />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[81.528px] left-[212.53px] top-0 w-[180px]" data-name="Header Cell">
      <ColumnFilterDropdown1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[163.333px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[163.333px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Hedge Method (Swap Pt)</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[188.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[188.021px]">
        <Text3 />
        <ChevronDown2 />
      </div>
    </div>
  );
}

function ColumnFilterDropdown2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[188.021px]" data-name="ColumnFilterDropdown">
      <Label2 />
      <Button17 />
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[81.528px] left-[392.54px] top-0 w-[220px]" data-name="Header Cell">
      <ColumnFilterDropdown2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[95.208px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[95.208px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Currency Type</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[148.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[148.021px]">
        <Text4 />
        <ChevronDown3 />
      </div>
    </div>
  );
}

function ColumnFilterDropdown3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[148.021px]" data-name="ColumnFilterDropdown">
      <Label3 />
      <Button18 />
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[81.528px] left-[612.53px] top-0 w-[180px]" data-name="Header Cell">
      <ColumnFilterDropdown3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[131.649px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[131.649px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Hedging Instrument</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[168.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[168.021px]">
        <Text5 />
        <ChevronDown4 />
      </div>
    </div>
  );
}

function ColumnFilterDropdown4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[168.021px]" data-name="ColumnFilterDropdown">
      <Label4 />
      <Button19 />
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[81.528px] left-[792.53px] top-0 w-[200px]" data-name="Header Cell">
      <ColumnFilterDropdown4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[43.056px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[43.056px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[108.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[108.021px]">
        <Text6 />
        <ChevronDown5 />
      </div>
    </div>
  );
}

function ColumnFilterDropdown5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[108.021px]" data-name="ColumnFilterDropdown">
      <Label5 />
      <Button20 />
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[81.528px] left-[992.53px] top-0 w-[140px]" data-name="Header Cell">
      <ColumnFilterDropdown5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[63.646px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[63.646px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">NAV Type</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown6() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[108.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[108.021px]">
        <Text7 />
        <ChevronDown6 />
      </div>
    </div>
  );
}

function ColumnFilterDropdown6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[108.021px]" data-name="ColumnFilterDropdown">
      <Label6 />
      <Button21 />
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[81.528px] left-[1132.54px] top-0 w-[140px]" data-name="Header Cell">
      <ColumnFilterDropdown6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[76.233px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[76.233px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Updated By</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[18.229px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[18.229px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All</p>
      </div>
    </div>
  );
}

function ChevronDown7() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[148.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[148.021px]">
        <Text8 />
        <ChevronDown7 />
      </div>
    </div>
  );
}

function ColumnFilterDropdown7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[148.021px]" data-name="ColumnFilterDropdown">
      <Label7 />
      <Button22 />
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[81.528px] left-[1272.54px] top-0 w-[180px]" data-name="Header Cell">
      <ColumnFilterDropdown7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[87.431px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] relative w-[87.431px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Last Updated</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[57.465px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20.99px] overflow-clip relative rounded-[inherit] w-[57.465px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">All dates</p>
      </div>
    </div>
  );
}

function ChevronDown8() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2026980} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-white h-[31.997px] relative rounded-[4px] shrink-0 w-[208.021px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.997px] items-center justify-between px-[13.108px] py-[1.111px] relative w-[208.021px]">
        <Text9 />
        <ChevronDown8 />
      </div>
    </div>
  );
}

function DateColumnFilter() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[56.979px] items-start left-[15.99px] top-[12px] w-[208.021px]" data-name="DateColumnFilter">
      <Label8 />
      <Button23 />
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute h-[81.528px] left-[1452.54px] top-0 w-[240px]" data-name="Header Cell">
      <DateColumnFilter />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[81.528px] left-0 top-0 w-[1765px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[rgba(238,242,245,0.5)] h-[81.528px] left-0 top-0 w-[1765px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[20.99px] left-[24.55px] top-[16.16px] w-[91.458px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">R001</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[53.333px] left-[72.53px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Inception</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[53.333px] left-[212.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[188.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">COH</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[53.333px] left-[392.54px] top-0 w-[220px]" data-name="Table Cell">
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Non-Restricted</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[53.333px] left-[612.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[168.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">FX Spot</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[53.333px] left-[792.53px] top-0 w-[200px]" data-name="Table Cell">
      <Paragraph20 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#b0e8d0] h-[16.215px] left-[15.99px] rounded-[3.72827e+07px] top-[20.43px] w-[51.528px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-px uppercase whitespace-pre">Active</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[53.333px] left-[992.53px] top-0 w-[140px]" data-name="Table Cell">
      <Text10 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[108.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">COI</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[53.333px] left-[1132.54px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[20.99px] left-[31.98px] top-[1.49px] w-[58.472px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">John Doe</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[7.153px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[7.153px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-0 text-[#455057] text-[10px] text-nowrap top-[0.11px] uppercase whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute bg-[#ffb5b9] content-stretch flex items-center justify-center left-0 rounded-[3.72827e+07px] size-[23.993px] top-0" data-name="Avatar">
      <Text11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[23.993px] left-[15.99px] top-[14.67px] w-[148.021px]" data-name="Container">
      <Paragraph22 />
      <Avatar />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[53.333px] left-[1272.54px] top-0 w-[180px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[207.465px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">10/02/2025 09:08:56</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[53.333px] left-[1452.54px] top-0 w-[240px]" data-name="Table Cell">
      <Paragraph23 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[53.333px] left-0 top-0 w-[1765px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20.99px] left-[24.55px] top-[16.16px] w-[91.458px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">R002</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[53.333px] left-[72.53px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Inception</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[53.333px] left-[212.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph25 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[188.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">COH</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[53.333px] left-[392.54px] top-0 w-[220px]" data-name="Table Cell">
      <Paragraph26 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Restricted</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[53.333px] left-[612.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[168.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">FX Spot</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[53.333px] left-[792.53px] top-0 w-[200px]" data-name="Table Cell">
      <Paragraph28 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#b0e8d0] h-[16.215px] left-[15.99px] rounded-[3.72827e+07px] top-[20.43px] w-[51.528px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-px uppercase whitespace-pre">Active</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[53.333px] left-[992.53px] top-0 w-[140px]" data-name="Table Cell">
      <Text12 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[108.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">COI</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[53.333px] left-[1132.54px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[20.99px] left-[31.98px] top-[1.49px] w-[58.472px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">John Doe</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[7.153px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[7.153px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-0 text-[#455057] text-[10px] text-nowrap top-[0.11px] uppercase whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute bg-[#ffb5b9] content-stretch flex items-center justify-center left-0 rounded-[3.72827e+07px] size-[23.993px] top-0" data-name="Avatar">
      <Text13 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[23.993px] left-[15.99px] top-[14.67px] w-[148.021px]" data-name="Container">
      <Paragraph30 />
      <Avatar1 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[53.333px] left-[1272.54px] top-0 w-[180px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[207.465px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">10/02/2025 09:08:56</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[53.333px] left-[1452.54px] top-0 w-[240px]" data-name="Table Cell">
      <Paragraph31 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[53.333px] left-0 top-[53.33px] w-[1765px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[20.99px] left-[24.55px] top-[16.16px] w-[91.458px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">R003</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[53.333px] left-[72.53px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph32 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Inception</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[53.333px] left-[212.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[188.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">COH</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[53.333px] left-[392.54px] top-0 w-[220px]" data-name="Table Cell">
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Non-Restricted</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[53.333px] left-[612.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[168.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">FX Spot</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[53.333px] left-[792.53px] top-0 w-[200px]" data-name="Table Cell">
      <Paragraph36 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#ffd6d6] h-[16.215px] left-[15.99px] rounded-[3.72827e+07px] top-[20.43px] w-[62.049px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-px uppercase whitespace-pre">Inactive</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[53.333px] left-[992.53px] top-0 w-[140px]" data-name="Table Cell">
      <Text14 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[108.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">RE</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[53.333px] left-[1132.54px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[20.99px] left-[31.98px] top-[1.49px] w-[58.472px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">John Doe</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[7.153px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[7.153px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-0 text-[#455057] text-[10px] text-nowrap top-[0.11px] uppercase whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute bg-[#ffb5b9] content-stretch flex items-center justify-center left-0 rounded-[3.72827e+07px] size-[23.993px] top-0" data-name="Avatar">
      <Text15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[23.993px] left-[15.99px] top-[14.67px] w-[148.021px]" data-name="Container">
      <Paragraph38 />
      <Avatar2 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[53.333px] left-[1272.54px] top-0 w-[180px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[207.465px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">10/02/2025 09:08:56</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[53.333px] left-[1452.54px] top-0 w-[240px]" data-name="Table Cell">
      <Paragraph39 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[53.333px] left-0 top-[106.67px] w-[1765px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[20.99px] left-[24.55px] top-[16.16px] w-[91.458px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">R004</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[53.333px] left-[72.53px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph40 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Inception</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[53.333px] left-[212.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph41 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[188.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">COH</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[53.333px] left-[392.54px] top-0 w-[220px]" data-name="Table Cell">
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[148.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Restricted</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[53.333px] left-[612.53px] top-0 w-[180px]" data-name="Table Cell">
      <Paragraph43 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[168.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">FX Spot</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[53.333px] left-[792.53px] top-0 w-[200px]" data-name="Table Cell">
      <Paragraph44 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#ffd6d6] h-[16.215px] left-[15.99px] rounded-[3.72827e+07px] top-[20.43px] w-[62.049px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-px uppercase whitespace-pre">Inactive</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[53.333px] left-[992.53px] top-0 w-[140px]" data-name="Table Cell">
      <Text16 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[108.021px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">RE</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[53.333px] left-[1132.54px] top-0 w-[140px]" data-name="Table Cell">
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[20.99px] left-[31.98px] top-[1.49px] w-[58.472px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">John Doe</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15px] relative shrink-0 w-[7.153px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[7.153px]">
        <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-0 text-[#455057] text-[10px] text-nowrap top-[0.11px] uppercase whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="absolute bg-[#ffb5b9] content-stretch flex items-center justify-center left-0 rounded-[3.72827e+07px] size-[23.993px] top-0" data-name="Avatar">
      <Text17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[23.993px] left-[15.99px] top-[14.67px] w-[148.021px]" data-name="Container">
      <Paragraph46 />
      <Avatar3 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[53.333px] left-[1272.54px] top-0 w-[180px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[20.99px] left-[15.99px] top-[16.16px] w-[207.465px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-0 text-[#172733] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">10/02/2025 09:08:56</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[53.333px] left-[1452.54px] top-0 w-[240px]" data-name="Table Cell">
      <Paragraph47 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[53.333px] left-0 top-[160px] w-[1765px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[213.333px] left-0 top-[81.53px] w-[1765px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[295.417px] left-0 top-0 w-[1765px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pf9ff300} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute left-[23.99px] rounded-[4px] size-[23.993px] top-[12.55px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute bg-white h-[53.333px] left-0 top-[81.53px] w-[72.535px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button24 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[26.215px] relative rounded-[4px] shrink-0 w-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[26.215px] items-start pb-0 pt-[5.104px] px-[3.993px] relative w-[23.976px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[3.99px] size-[15.99px] top-[3.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5148cc0} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[23.976px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[26.215px] items-start justify-end left-[8.54px] top-[13.56px] w-[55.938px]" data-name="Container">
      <Button25 />
      <Button26 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute bg-white h-[53.333px] left-[1173.3px] top-[81.53px] w-[72.465px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <Container16 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pf9ff300} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute left-[23.99px] rounded-[4px] size-[23.993px] top-[12.55px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute bg-white h-[53.333px] left-0 top-[134.86px] w-[72.535px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button27 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[26.215px] relative rounded-[4px] shrink-0 w-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[26.215px] items-start pb-0 pt-[5.104px] px-[3.993px] relative w-[23.976px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[3.99px] size-[15.99px] top-[3.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5148cc0} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[23.976px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[26.215px] items-start justify-end left-[8.54px] top-[13.56px] w-[55.938px]" data-name="Container">
      <Button28 />
      <Button29 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute bg-white h-[53.333px] left-[1173.3px] top-[134.86px] w-[72.465px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pf9ff300} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute left-[23.99px] rounded-[4px] size-[23.993px] top-[12.55px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute bg-white h-[53.333px] left-0 top-[188.19px] w-[72.535px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button30 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p2f58a00} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_10.24%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.p3daf07c0} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[26.215px] relative rounded-[4px] shrink-0 w-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[26.215px] items-start pb-0 pt-[5.104px] px-[3.993px] relative w-[23.976px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[3.99px] size-[15.99px] top-[3.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5148cc0} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[23.976px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[26.215px] items-start justify-end left-[8.54px] top-[13.56px] w-[55.938px]" data-name="Container">
      <Button31 />
      <Button32 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute bg-white h-[53.333px] left-[1173.3px] top-[188.19px] w-[72.465px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <Container18 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pf9ff300} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute left-[23.99px] rounded-[4px] size-[23.993px] top-[12.55px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute bg-white h-[53.333px] left-0 top-[241.53px] w-[72.535px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button33 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p2f58a00} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_10.24%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.p3daf07c0} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[26.215px] relative rounded-[4px] shrink-0 w-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[26.215px] items-start pb-0 pt-[5.104px] px-[3.993px] relative w-[23.976px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[3.99px] size-[15.99px] top-[3.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p5148cc0} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Button35() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-[23.976px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[26.215px] items-start justify-end left-[8.54px] top-[13.56px] w-[55.938px]" data-name="Container">
      <Button34 />
      <Button35 />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute bg-white h-[53.333px] left-[1173.3px] top-[241.53px] w-[72.465px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function HeaderCell9() {
  return <div className="absolute bg-[rgba(238,242,245,0.5)] h-[81.528px] left-0 top-0 w-[72.535px]" data-name="Header Cell" />;
}

function HeaderCell10() {
  return <div className="absolute bg-[rgba(238,242,245,0.5)] h-[81.528px] left-[1173.3px] top-0 w-[72.465px]" data-name="Header Cell" />;
}

function Container20() {
  return (
    <div className="h-[306.528px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <HeaderCell9 />
      <HeaderCell10 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[384.358px] relative rounded-[8px] shrink-0 w-[1247.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[384.358px] items-start p-[1.111px] relative w-[1247.99px]">
        <Container11 />
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow h-[918.004px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[918.004px] items-start pb-0 pl-[96.667px] pr-0 pt-[40px] relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1753.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-start relative w-[1753.33px]">
        <Container5 />
        <SecondaryNavigation />
        <Container22 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f5f7f9] content-stretch flex flex-col h-[1000px] items-start left-0 top-0 w-[1753.33px]" data-name="App">
      <Container2 />
      <Container23 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[152.188px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[152.188px]">
        <p className="absolute font-['Public_Sans:SemiBold',_sans-serif] font-semibold leading-[30px] left-0 text-[#172733] text-[20px] text-nowrap top-[0.33px] whitespace-pre">Edit Rule Config</p>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="h-[23.993px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.333%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p5571a40} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99942" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[31.979px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[31.979px]">
        <X />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[31.979px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[31.979px] items-center justify-between relative w-full">
          <Heading4 />
          <Button36 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[81.076px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[1753.33px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[81.076px] items-start pb-[1.111px] pt-[23.993px] px-[252.674px] relative w-[1753.33px]">
        <Container24 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[24.01px] relative shrink-0 w-[270px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.01px] relative w-[270px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#172733] text-[16px] text-nowrap top-[-0.78px] whitespace-pre">Config Information</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Rule ID</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[24.01px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#172733] text-[16px] text-nowrap top-[-0.78px] whitespace-pre">R001</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow h-[64.983px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[64.983px] items-start relative w-full">
        <Label9 />
        <Paragraph49 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Status</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-1174.22px] size-0 top-[-179.15px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#172733] text-[16px] top-[-3px] w-0">Active</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-1174.22px] size-0 top-[-179.15px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#172733] text-[16px] top-[-3px] w-0">Inactive</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[4px] top-0 w-[275.99px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#b0b9c0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option />
      <Option1 />
    </div>
  );
}

function ChevronDown9() {
  return (
    <div className="absolute left-[248px] size-[15.99px] top-[12.01px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronDown">
          <path d={svgPaths.p7268680} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <ChevronDown9 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[64.983px] relative shrink-0 w-[275.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[64.983px] items-start relative w-[275.99px]">
        <Label10 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[64.983px] relative shrink-0 w-[883.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[23.993px] h-[64.983px] items-start relative w-[883.993px]">
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Description</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-full" data-name="Text Area">
      <div className="h-[80px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-[-566.22px] text-[#172733] text-[16px] top-[-271.13px] w-0">Rule configuration for Inception - FX Spot</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b0b9c0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[884.08px] text-[#455057] text-[14px] text-right top-[-1.89px] translate-x-[-100%] w-[48px]">42/400</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[136.198px] relative shrink-0 w-[883.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.993px] h-[136.198px] items-start relative w-[883.993px]">
        <Label11 />
        <TextArea />
        <Paragraph50 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[225.174px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[23.993px] h-[225.174px] items-start relative w-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white h-[275.382px] relative rounded-[8px] shrink-0 w-[1247.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[23.993px] h-[275.382px] items-start pb-[1.111px] pl-[25.104px] pr-[44.896px] pt-[25.104px] relative w-[1247.99px]">
        <Paragraph48 />
        <Container31 />
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[24.01px] relative shrink-0 w-[270px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24.01px] relative w-[270px]">
        <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#172733] text-[16px] text-nowrap top-[-0.78px] whitespace-pre">{`Global Murex & GL BE Codes`}</p>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Business Event</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Select an option</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Inception</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Utilization</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Rollover</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Termination</p>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[4px] top-0 w-[422.014px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#b0b9c0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
    </div>
  );
}

function ChevronDown10() {
  return (
    <div className="absolute left-[394.03px] size-[15.99px] top-[12.01px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronDown">
          <path d={svgPaths.p7268680} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown1 />
      <ChevronDown10 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.983px] items-start left-0 top-0 w-[422.014px]" data-name="Container">
      <Label12 />
      <Container33 />
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Hedge Method (Swap Pt)</p>
    </div>
  );
}

function Option7() {
  return (
    <div className="absolute left-[-1020.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Select an option</p>
    </div>
  );
}

function Option8() {
  return (
    <div className="absolute left-[-1020.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">MTM</p>
    </div>
  );
}

function Option9() {
  return (
    <div className="absolute left-[-1020.21px] size-0 top-[-486.51px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">COH</p>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[4px] top-0 w-[422.014px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#b0b9c0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option7 />
      <Option8 />
      <Option9 />
    </div>
  );
}

function ChevronDown11() {
  return (
    <div className="absolute left-[394.03px] size-[15.99px] top-[12.01px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronDown">
          <path d={svgPaths.p7268680} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown2 />
      <ChevronDown11 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.983px] items-start left-[438px] top-0 w-[422.014px]" data-name="Container">
      <Label13 />
      <Container35 />
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Currency Type</p>
    </div>
  );
}

function Option10() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-575.49px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Select an option</p>
    </div>
  );
}

function Option11() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-575.49px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Restricted</p>
    </div>
  );
}

function Option12() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-575.49px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Non-Restricted</p>
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[4px] top-0 w-[422.014px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#b0b9c0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option10 />
      <Option11 />
      <Option12 />
    </div>
  );
}

function ChevronDown12() {
  return (
    <div className="absolute left-[394.03px] size-[15.99px] top-[12.01px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronDown">
          <path d={svgPaths.p7268680} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown3 />
      <ChevronDown12 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.983px] items-start left-0 top-[88.98px] w-[422.014px]" data-name="Container">
      <Label14 />
      <Container37 />
    </div>
  );
}

function Label15() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Hedging Instrument</p>
    </div>
  );
}

function Option13() {
  return (
    <div className="absolute left-[-1020.21px] size-0 top-[-575.49px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Select an option</p>
    </div>
  );
}

function Option14() {
  return (
    <div className="absolute left-[-1020.21px] size-0 top-[-575.49px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">FX Swap</p>
    </div>
  );
}

function Option15() {
  return (
    <div className="absolute left-[-1020.21px] size-0 top-[-575.49px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">FX NDF</p>
    </div>
  );
}

function Option16() {
  return (
    <div className="absolute left-[-1020.21px] size-0 top-[-575.49px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">IRD Xccy Swap</p>
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[4px] top-0 w-[422.014px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#b0b9c0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option13 />
      <Option14 />
      <Option15 />
      <Option16 />
    </div>
  );
}

function ChevronDown13() {
  return (
    <div className="absolute left-[394.03px] size-[15.99px] top-[12.01px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronDown">
          <path d={svgPaths.p7268680} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown4 />
      <ChevronDown13 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.983px] items-start left-[438px] top-[88.98px] w-[422.014px]" data-name="Container">
      <Label15 />
      <Container39 />
    </div>
  );
}

function Label16() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">NAV Type</p>
    </div>
  );
}

function Option17() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-664.46px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">Select an option</p>
    </div>
  );
}

function Option18() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-664.46px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">COI</p>
    </div>
  );
}

function Option19() {
  return (
    <div className="absolute left-[-582.21px] size-0 top-[-664.46px]" data-name="Option">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#455057] text-[16px] top-[-3px] w-0">RE+reserves</p>
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[4px] top-0 w-[422.014px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#b0b9c0] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Option17 />
      <Option18 />
      <Option19 />
    </div>
  );
}

function ChevronDown14() {
  return (
    <div className="absolute left-[394.03px] size-[15.99px] top-[12.01px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ChevronDown">
          <path d={svgPaths.p7268680} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown5 />
      <ChevronDown14 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.983px] items-start left-0 top-[177.95px] w-[422.014px]" data-name="Container">
      <Label16 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[242.934px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container36 />
      <Container38 />
      <Container40 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#eef2f5] h-[274.913px] relative rounded-[8px] shrink-0 w-[891.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[274.913px] items-start pb-0 pt-[15.99px] px-[15.99px] relative w-[891.997px]">
        <Container43 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[152.274px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[152.274px]">
        <p className="absolute font-['Public_Sans:SemiBold',_sans-serif] font-semibold leading-[30px] left-0 text-[#172733] text-[20px] text-nowrap top-[0.33px] whitespace-pre">Murex Bookings</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">Add New Row</p>
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[42.517px] relative rounded-[4px] shrink-0 w-[140.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42.517px] items-start pb-[1.111px] pt-[13.542px] px-[25.104px] relative w-[140.625px]">
        <Text18 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[75.608px] items-center justify-between left-[1.11px] pb-[1.111px] pt-0 px-[23.993px] top-[1.11px] w-[889.774px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <Heading5 />
      <Button37 />
    </div>
  );
}

function Label17() {
  return (
    <div className="absolute h-[20.99px] left-[7.99px] top-[7.99px] w-[115.764px]" data-name="Label">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] left-0 text-[#455057] text-[14px] text-nowrap top-[-1.89px] whitespace-pre">Murex Book Code</p>
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute h-[37.517px] left-0 top-0 w-[769.774px]" data-name="Header Cell">
      <Label17 />
    </div>
  );
}

function HeaderCell12() {
  return <div className="absolute h-[37.517px] left-[769.77px] top-0 w-[120px]" data-name="Header Cell" />;
}

function TableRow5() {
  return (
    <div className="absolute h-[37.517px] left-0 top-0 w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <HeaderCell11 />
      <HeaderCell12 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute bg-white h-[37.517px] left-0 top-0 w-[889.774px]" data-name="Table Header">
      <TableRow5 />
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[6.54px] w-[753.802px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SPOT_MIRR_INTMD_COI</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[54.08px] left-0 top-0 w-[769.774px]" data-name="Table Cell">
      <Paragraph52 />
    </div>
  );
}

function Pencil() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil />
      </div>
    </div>
  );
}

function Trash2() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash2 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[15.05px] w-[104.028px]" data-name="Container">
      <Button38 />
      <Button39 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[54.08px] left-[769.77px] top-0 w-[120px]" data-name="Table Cell">
      <Container46 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute bg-white h-[54.08px] left-0 top-0 w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell44 />
      <TableCell45 />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[6.54px] w-[753.802px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SPOT_CLOSE_UHCOI_COI</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[54.08px] left-0 top-0 w-[769.774px]" data-name="Table Cell">
      <Paragraph53 />
    </div>
  );
}

function Pencil1() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil1 />
      </div>
    </div>
  );
}

function Trash3() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash3 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[15.05px] w-[104.028px]" data-name="Container">
      <Button40 />
      <Button41 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[54.08px] left-[769.77px] top-0 w-[120px]" data-name="Table Cell">
      <Container47 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute bg-white h-[54.08px] left-0 top-[54.08px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[6.54px] w-[753.802px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SWAP_MIRR_INSTC_COIRE</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[54.08px] left-0 top-0 w-[769.774px]" data-name="Table Cell">
      <Paragraph54 />
    </div>
  );
}

function Pencil2() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil2 />
      </div>
    </div>
  );
}

function Trash4() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash4 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[15.05px] w-[104.028px]" data-name="Container">
      <Button42 />
      <Button43 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[54.08px] left-[769.77px] top-0 w-[120px]" data-name="Table Cell">
      <Container48 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute bg-white h-[54.08px] left-0 top-[108.16px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[6.54px] w-[753.802px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SWAP_CLOSE_UHCOI_COI</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[54.08px] left-0 top-0 w-[769.774px]" data-name="Table Cell">
      <Paragraph55 />
    </div>
  );
}

function Pencil3() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil3 />
      </div>
    </div>
  );
}

function Trash5() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash5 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[15.05px] w-[104.028px]" data-name="Container">
      <Button44 />
      <Button45 />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[54.08px] left-[769.77px] top-0 w-[120px]" data-name="Table Cell">
      <Container49 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute bg-white h-[54.08px] left-0 top-[162.24px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell50 />
      <TableCell51 />
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[6.54px] w-[753.802px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">FWD_MIRR_INTMD_COI</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[54.08px] left-0 top-0 w-[769.774px]" data-name="Table Cell">
      <Paragraph56 />
    </div>
  );
}

function Pencil4() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil4 />
      </div>
    </div>
  );
}

function Trash6() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash6 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[15.05px] w-[104.028px]" data-name="Container">
      <Button46 />
      <Button47 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[54.08px] left-[769.77px] top-0 w-[120px]" data-name="Table Cell">
      <Container50 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute bg-white h-[54.08px] left-0 top-[216.32px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell52 />
      <TableCell53 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[270.399px] left-0 top-[37.52px] w-[889.774px]" data-name="Table Body">
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute h-[308.472px] left-[1.11px] overflow-clip top-[76.72px] w-[889.774px]" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[386.302px] relative rounded-[8px] shrink-0 w-[891.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[386.302px] overflow-clip relative rounded-[inherit] w-[891.997px]">
        <Container45 />
        <Table1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[30px] relative shrink-0 w-[121.493px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[121.493px]">
        <p className="absolute font-['Public_Sans:SemiBold',_sans-serif] font-semibold leading-[30px] left-0 text-[#172733] text-[20px] text-nowrap top-[0.33px] whitespace-pre">GL BE Codes</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex h-[16.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">Add New Row</p>
    </div>
  );
}

function Button48() {
  return (
    <div className="h-[42.517px] relative rounded-[4px] shrink-0 w-[140.625px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42.517px] items-start pb-[1.111px] pt-[13.542px] px-[25.104px] relative w-[140.625px]">
        <Text19 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white h-[75.608px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[75.608px] items-center justify-between pb-[1.111px] pt-0 px-[23.993px] relative w-full">
          <Heading6 />
          <Button48 />
        </div>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[7.99px] top-[12.43px] w-[77.483px]" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] relative shrink-0 text-[#455057] text-[14px] text-nowrap whitespace-pre">GL BE Code</p>
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute h-[40.851px] left-0 top-0 w-[383.802px]" data-name="Header Cell">
      <Label18 />
    </div>
  );
}

function Label19() {
  return (
    <div className="absolute content-stretch flex h-[16.667px] items-start left-[7.99px] top-[12.43px] w-[73.646px]" data-name="Label">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[21px] relative shrink-0 text-[#455057] text-[14px] text-nowrap whitespace-pre">Entity Type</p>
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute h-[40.851px] left-[383.8px] top-0 w-[383.802px]" data-name="Header Cell">
      <Label19 />
    </div>
  );
}

function HeaderCell15() {
  return <div className="absolute h-[40.851px] left-[767.6px] top-0 w-[122.17px]" data-name="Header Cell" />;
}

function TableRow11() {
  return (
    <div className="absolute h-[40.851px] left-0 top-0 w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <HeaderCell13 />
      <HeaderCell14 />
      <HeaderCell15 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="absolute bg-white h-[40.851px] left-0 top-0 w-[889.774px]" data-name="Table Header">
      <TableRow11 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_TMU</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph57 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container53 />
    </div>
  );
}

function Pencil5() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button49() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil5 />
      </div>
    </div>
  );
}

function Trash7() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash7 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button49 />
      <Button50 />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container54 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-0 w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_TMU</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph58 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container55 />
    </div>
  );
}

function Pencil6() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button51() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil6 />
      </div>
    </div>
  );
}

function Trash8() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button52() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash8 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button51 />
      <Button52 />
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container56 />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[56.08px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_DR_UHDCOILOCKBACKFXGAIN_BR</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph59 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container57 />
    </div>
  );
}

function Pencil7() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button53() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil7 />
      </div>
    </div>
  );
}

function Trash9() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button54() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash9 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button53 />
      <Button54 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container58 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[112.15px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_CR_UHDCOILOCKBACKFXLOSS_BR</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph60 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container59 />
    </div>
  );
}

function Pencil8() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button55() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil8 />
      </div>
    </div>
  );
}

function Trash10() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button56() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash10 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button55 />
      <Button56 />
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container60 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[168.23px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_DR_UHCOILOCKBACKFXGAIN_TMU</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph61 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container61 />
    </div>
  );
}

function Pencil9() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button57() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil9 />
      </div>
    </div>
  );
}

function Trash11() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button58() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash11 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button57 />
      <Button58 />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container62 />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[224.31px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_CR_UHCOILOCKBACKFXLOSS_TMU</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph62 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container63 />
    </div>
  );
}

function Pencil10() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button59() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil10 />
      </div>
    </div>
  );
}

function Trash12() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button60() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash12 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button59 />
      <Button60 />
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container64 />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[280.38px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_DR_COILOCKBACKFXGAIN_REL</p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph63 />
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container65 />
    </div>
  );
}

function Pencil11() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button61() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil11 />
      </div>
    </div>
  );
}

function Trash13() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button62() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash13 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button61 />
      <Button62 />
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container66 />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[336.46px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_CR_COILOCKBACKFXLOSS_REL</p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph64 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text34 />
      <Text35 />
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container67 />
    </div>
  );
}

function Pencil12() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button63() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil12 />
      </div>
    </div>
  );
}

function Trash14() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button64() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash14 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button63 />
      <Button64 />
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container68 />
    </div>
  );
}

function TableRow19() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[392.54px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_DR_FWDCOILOCKBACKFXGAIN_TMU</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph65 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container69 />
    </div>
  );
}

function Pencil13() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button65() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil13 />
      </div>
    </div>
  );
}

function Trash15() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button66() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash15 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button65 />
      <Button66 />
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container70 />
    </div>
  );
}

function TableRow20() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[448.61px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[40.99px] left-[7.99px] top-[7.54px] w-[367.83px]" data-name="Paragraph">
      <p className="absolute font-['Public_Sans:Regular',_sans-serif] font-normal leading-[21px] left-[12px] text-[#172733] text-[14px] text-nowrap top-[8.11px] whitespace-pre">SG_HAWK_CR_FWDCOILOCKBACKFXLOSS_TMU</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[56.076px] left-0 top-0 w-[383.802px]" data-name="Table Cell">
      <Paragraph66 />
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[12px] rounded-[4px] top-[10px] w-[59.063px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Branch</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute bg-[#dde3e7] h-[22.986px] left-[79.05px] rounded-[4px] top-[10px] w-[72.188px]" data-name="Text">
      <p className="absolute font-['Public_Sans:Medium',_sans-serif] font-medium leading-[15px] left-[7.99px] text-[#172733] text-[10px] text-nowrap top-[4.1px] uppercase whitespace-pre">Associate</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[42.986px] left-[7.99px] top-[6.54px] w-[367.83px]" data-name="Container">
      <Text38 />
      <Text39 />
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[56.076px] left-[383.8px] top-0 w-[383.802px]" data-name="Table Cell">
      <Container71 />
    </div>
  );
}

function Pencil14() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Pencil">
      <div className="absolute inset-[12.5%_12.5%_12.35%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.54%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p33fb2600} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button67() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Pencil14 />
      </div>
    </div>
  );
}

function Trash16() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
            <path d={svgPaths.p1aa58e80} id="Vector" stroke="var(--stroke-0, #455057)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button68() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[23.976px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.976px]">
        <Trash16 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex gap-[7.986px] h-[23.976px] items-start justify-end left-[7.99px] top-[16.04px] w-[106.198px]" data-name="Container">
      <Button67 />
      <Button68 />
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[56.076px] left-[767.6px] top-0 w-[122.17px]" data-name="Table Cell">
      <Container72 />
    </div>
  );
}

function TableRow21() {
  return (
    <div className="absolute bg-white h-[56.076px] left-0 top-[504.69px] w-[889.774px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1.111px] border-solid inset-0 pointer-events-none" />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="absolute h-[560.764px] left-0 top-[40.85px] w-[889.774px]" data-name="Table Body">
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
      <TableRow20 />
      <TableRow21 />
    </div>
  );
}

function Table2() {
  return (
    <div className="h-[602.17px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader2 />
      <TableBody2 />
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[680px] relative rounded-[8px] shrink-0 w-[891.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2.289e_-5px] h-[680px] items-start overflow-clip p-[1.111px] relative rounded-[inherit] w-[891.997px]">
        <Container52 />
        <Table2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="basis-0 grow h-[1389.2px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[23.993px] h-[1389.2px] items-start relative w-full">
        <Container44 />
        <Container51 />
        <Container73 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white h-[1439.41px] relative rounded-[8px] shrink-0 w-[1247.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[23.993px] h-[1439.41px] items-start pb-[1.111px] pl-[25.104px] pr-[36.892px] pt-[25.104px] relative w-[1247.99px]">
        <Paragraph51 />
        <Container74 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] h-[1730.78px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1753.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pl-[247.118px] pr-[258.229px] pt-[23.993px] relative rounded-[inherit] w-[1753.33px]">
        <Container76 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex h-[18.889px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#172733] text-[16px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function Button69() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-[75.538px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start pb-0 pl-[11.997px] pr-[11.996px] pt-[10.208px] relative w-[75.538px]">
        <Text40 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex h-[18.889px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Save</p>
    </div>
  );
}

function Button70() {
  return (
    <div className="bg-[#0077cc] h-[40px] relative rounded-[4px] shrink-0 w-[84.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start pb-0 pt-[10.208px] px-[23.993px] relative w-[84.219px]">
        <Text41 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex gap-[15.99px] h-[40px] items-start justify-end relative w-full">
          <Button69 />
          <Button70 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#f5f7f9] h-[89.097px] relative shrink-0 w-[1753.33px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[1.111px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[89.097px] items-start pb-0 pt-[25.104px] px-[252.674px] relative w-[1753.33px]">
        <Container78 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#f5f7f9] h-[975.99px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[1753.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[975.99px] items-start relative w-[1753.33px]">
        <Container25 />
        <Container77 />
        <Container79 />
      </div>
    </div>
  );
}

function EditRuleModal() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[rgba(23,24,26,0.49)] h-[1000px] items-start justify-center left-0 pb-0 pt-[23.993px] px-0 to-[rgba(113,118,128,0.7)] top-0 w-[1753.33px]" data-name="EditRuleModal">
      <Container80 />
    </div>
  );
}

export default function ExpandMurexBookingCodes() {
  return (
    <div className="bg-white relative size-full" data-name="Expand Murex Booking Codes">
      <App />
      <EditRuleModal />
    </div>
  );
}