import svgPaths from "./svg-jd1ehakw79";

function LogoDbsLogomark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name=".Logo/DBS Logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id=".Logo/DBS Logomark">
          <path clipRule="evenodd" d={svgPaths.pa375b00} fill="var(--fill-0, #FF3E3E)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p7196fc0} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function PrimarySideNavHeader() {
  return (
    <div className="bg-[#172733] h-[72px] relative shrink-0 w-full" data-name="primary-side-nav-header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[72px] items-center justify-center p-[24px] relative w-full">
          <LogoDbsLogomark />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p3a4a5600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon">
      <Container />
    </div>
  );
}

function PrimarySideNavItem() {
  return (
    <div className="bg-[#59656d] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="primary-side-nav-item">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p150ff400} fill="var(--fill-0, #9BA4AB)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Container1 />
    </div>
  );
}

function PrimarySideNavItem1() {
  return (
    <div className="bg-[#172733] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="primary-side-nav-item">
      <Icon1 />
    </div>
  );
}

function PrimarySideNavItem2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="primary-side-nav-item">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[32px] items-center justify-center px-[24px] py-[11px] relative w-full">
          <div className="h-0 relative shrink-0 w-[24px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 259" stroke="var(--stroke-0, #455057)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p37e2ae80} fill="var(--fill-0, #9BA4AB)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="icon">
      <Container2 />
    </div>
  );
}

function PrimarySideNavItem3() {
  return (
    <div className="bg-[#172733] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="primary-side-nav-item">
      <Icon2 />
    </div>
  );
}

function PrimarySideNavBody() {
  return (
    <div className="basis-0 bg-[#172733] content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-[72px]" data-name="primary-side-nav-body">
      <PrimarySideNavItem />
      <PrimarySideNavItem1 />
      <PrimarySideNavItem2 />
      {[...Array(5).keys()].map((_, i) => (
        <PrimarySideNavItem3 key={i} />
      ))}
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p101de100} fill="var(--fill-0, #9BA4AB)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Container7 />
    </div>
  );
}

function PrimarySideNavItem8() {
  return (
    <div className="bg-[#172733] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="primary-side-nav-item">
      <Icon7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p2258e800} fill="var(--fill-0, #9BA4AB)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <Container8 />
    </div>
  );
}

function PrimarySideNavItem9() {
  return (
    <div className="bg-[#172733] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="primary-side-nav-item">
      <Icon8 />
    </div>
  );
}

function AcaiGoji() {
  return (
    <div className="absolute inset-0" data-name="Acai -> Goji">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="url(#paint0_linear_19_22481)" id="Ellipse 1" r="12" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_19_22481" x1="0" x2="24" y1="0" y2="24">
              <stop stopColor="#EDB5FF" />
              <stop offset="1" stopColor="#FFB5B9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Public_Sans:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#172733] text-[10px] text-center uppercase">
        <p className="leading-[10px]">SL</p>
      </div>
    </div>
  );
}

function Initials() {
  return (
    <div className="absolute inset-0" data-name="Initials">
      <AcaiGoji />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <Initials />
    </div>
  );
}

function PrimarySideNavItem10() {
  return (
    <div className="bg-[#172733] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="primary-side-nav-item">
      <Icon9 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p30b81a00} fill="var(--fill-0, #9BA4AB)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3cc46580} fill="var(--fill-0, #9BA4AB)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Icon">
      <Container9 />
    </div>
  );
}

function PrimarySideNavItem11() {
  return (
    <div className="bg-[#172733] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="primary-side-nav-item">
      <Icon10 />
    </div>
  );
}

function PrimarySideNavFooter() {
  return (
    <div className="bg-[#172733] box-border content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-[72px]" data-name="primary-side-nav-footer">
      <div aria-hidden="true" className="absolute border-[#455057] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <PrimarySideNavItem8 />
      <PrimarySideNavItem9 />
      <PrimarySideNavItem10 />
      <PrimarySideNavItem11 />
    </div>
  );
}

function PrimarySideNav() {
  return (
    <div className="absolute bg-[#172733] content-stretch flex flex-col h-[960px] items-start left-0 top-0" data-name="primary-side-nav">
      <PrimarySideNavHeader />
      <PrimarySideNavBody />
      <PrimarySideNavFooter />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p30b81a00} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3cc46580} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChevronsRight() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="chevrons-right">
      <Container10 />
    </div>
  );
}

function SecondaryNav() {
  return (
    <div className="absolute bg-white bottom-[4px] h-[874px] right-[1328px] w-[40px]" data-name="secondary-nav">
      <div className="box-border content-stretch flex flex-col gap-[10px] h-[874px] items-center justify-center overflow-clip px-[8px] py-[24px] relative rounded-[inherit] w-[40px]">
        <ChevronsRight />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PageTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="page title">
      <p className="font-['Public_Sans:SemiBold',_sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#172733] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">Hedge Accounting SFX</p>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-[32px] min-w-px relative shrink-0" data-name="text">
      <PageTitle />
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#455057] text-[14px] w-[min-content]">Configuration</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-[32px] min-w-px relative shrink-0" data-name="content">
      <Text />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-start px-[40px] py-[16px] right-0 top-0 w-[1368px]" data-name="header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center min-h-[32px] relative shrink-0" data-name="text-block">
      <div className="flex flex-col font-['Public_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#172733] text-[20px] text-nowrap tracking-[0.1px]">
        <p className="leading-[1.4] whitespace-pre">Instruction Builder Configuration</p>
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
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#172733] text-[14px] text-center text-nowrap tracking-[-0.07px] whitespace-pre">Add New</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="buttons">
      <Button />
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="right content">
      <Buttons />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-white left-[152px] top-[110px] w-[1248px]" data-name="table-header">
      <div className="box-border content-stretch flex gap-[8px] items-start justify-end overflow-clip pl-[24px] pr-[16px] py-[16px] relative rounded-[inherit] w-[1248px]">
        <LeftContent />
        <RightContent />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ColumnHeader() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start pl-[24px] pr-0 py-[8px] relative shrink-0 w-[52px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
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
      <Container12 />
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
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Rule ID</p>
      <Sort />
    </div>
  );
}

function Container14() {
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
      <Container14 />
    </div>
  );
}

function InputBasic() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic />
    </div>
  );
}

function ColumnHeader1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between pl-[24px] pr-[8px] py-[8px] relative shrink-0 w-[130px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter />
      <InputField />
    </div>
  );
}

function Container15() {
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
      <Container15 />
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
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Business Event</p>
      <Sort1 />
    </div>
  );
}

function Container17() {
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
      <Container17 />
    </div>
  );
}

function InputBasic1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic1 />
    </div>
  );
}

function ColumnHeader2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[130px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter1 />
      <InputField1 />
    </div>
  );
}

function Container18() {
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
      <Container18 />
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
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Hedge Method (Swap Pt)</p>
      <Sort2 />
    </div>
  );
}

function Container20() {
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
      <Container20 />
    </div>
  );
}

function InputBasic2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic2 />
    </div>
  );
}

function ColumnHeader3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter2 />
      <InputField2 />
    </div>
  );
}

function Container21() {
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

function Icons16PxSortActive3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container21 />
    </div>
  );
}

function Sort3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive3 />
    </div>
  );
}

function Sorter3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Currency Type</p>
      <Sort3 />
    </div>
  );
}

function Container23() {
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
      <Container23 />
    </div>
  );
}

function InputBasic3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic3 />
    </div>
  );
}

function ColumnHeader4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[200px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter3 />
      <InputField3 />
    </div>
  );
}

function Sorter4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Hedging Instrument</p>
    </div>
  );
}

function Container25() {
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
      <Container25 />
    </div>
  );
}

function InputBasic4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic4 />
    </div>
  );
}

function ColumnHeader5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter4 />
      <InputField4 />
    </div>
  );
}

function Container26() {
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

function Icons16PxSortActive4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container26 />
    </div>
  );
}

function Sort4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive4 />
    </div>
  );
}

function Sorter5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">NAV Type</p>
      <Sort4 />
    </div>
  );
}

function Container28() {
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
      <Container28 />
    </div>
  );
}

function InputBasic5() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic5 />
    </div>
  );
}

function ColumnHeader6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[200px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter5 />
      <InputField5 />
    </div>
  );
}

function Container29() {
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

function Icons16PxSortActive5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container29 />
    </div>
  );
}

function Sort5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive5 />
    </div>
  );
}

function Sorter6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Status</p>
      <Sort5 />
    </div>
  );
}

function Container31() {
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
      <Container31 />
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

function InputField6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic6 />
    </div>
  );
}

function ColumnHeader7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[150px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter6 />
      <InputField6 />
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

function Icons16PxSortActive6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container32 />
    </div>
  );
}

function Sort6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive6 />
    </div>
  );
}

function Sorter7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Updated By</p>
      <Sort6 />
    </div>
  );
}

function Container34() {
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
      <Container34 />
    </div>
  );
}

function InputBasic7() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">All</p>
          <ChevronDown23 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic7 />
    </div>
  );
}

function ColumnHeader8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[200px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter7 />
      <InputField7 />
    </div>
  );
}

function Container35() {
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

function Icons16PxSortActive7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icons / 16px / sort / active">
      <Container35 />
    </div>
  );
}

function Sort7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Sort">
      <Icons16PxSortActive7 />
    </div>
  );
}

function Sorter8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start min-h-[20px] overflow-clip relative rounded-tl-[2px] shrink-0 w-full" data-name="sorter">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[#69737b] text-[14px] text-justify text-nowrap tracking-[-0.07px] whitespace-pre">Last Updated</p>
      <Sort7 />
    </div>
  );
}

function Container37() {
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
      <Container37 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Calendar16 />
    </div>
  );
}

function InputBasic8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Input/Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative w-full">
          <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#69737b] text-[16px]">DD/MM/YYYY</p>
          <IconButton1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="input-field">
      <InputBasic8 />
    </div>
  );
}

function ColumnHeader9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between p-[8px] relative shrink-0 w-[197px]" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Sorter8 />
      <InputField8 />
    </div>
  );
}

function ColumnHeader10() {
  return (
    <div className="bg-white h-full relative shrink-0 w-px" data-name="column-header">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start pl-[24px] pr-[16px] py-[8px] w-px" />
      </div>
    </div>
  );
}

function TableHeaderContent() {
  return (
    <div className="bg-white content-stretch flex items-end overflow-clip relative shrink-0" data-name="table-header-content">
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader1 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader2 />
      </div>
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
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader7 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader8 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader9 />
      </div>
      <div className="flex flex-row items-end self-stretch">
        <ColumnHeader10 />
      </div>
    </div>
  );
}

function DataCell() {
  return (
    <div className="basis-0 bg-white grow h-[68px] min-h-px min-w-px relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[68px] items-start pl-[24px] pr-[8px] py-[12px] w-full" />
      </div>
    </div>
  );
}

function Frame630265729() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <TableHeaderContent />
      <DataCell />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p28970180} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRightFilled16() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="arrow-right-filled_16">
      <Container38 />
    </div>
  );
}

function TableIconArrow() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_table-icon-arrow">
      <ArrowRightFilled16 />
    </div>
  );
}

function DataCell1() {
  return (
    <div className="bg-white box-border content-stretch flex h-full items-center pl-[24px] pr-[8px] py-[16px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableIconArrow />
    </div>
  );
}

function Frame48096559() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">R001</p>
    </div>
  );
}

function DataCell2() {
  return (
    <div className="bg-white box-border content-stretch flex items-start pl-[24px] pr-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096559 />
    </div>
  );
}

function Frame48096560() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">Inception</p>
    </div>
  );
}

function DataCell3() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096560 />
    </div>
  );
}

function Frame48096561() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">COH</p>
    </div>
  );
}

function DataCell4() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096561 />
    </div>
  );
}

function Frame48096562() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">Non-Restricted</p>
    </div>
  );
}

function DataCell5() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096562 />
    </div>
  );
}

function Frame48096563() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">FX Spot</p>
    </div>
  );
}

function DataCell6() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096563 />
    </div>
  );
}

function Frame48096564() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">COI</p>
    </div>
  );
}

function DataCell7() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096564 />
    </div>
  );
}

function TagStatus() {
  return (
    <div className="bg-[#b0e8d0] box-border content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0 w-[71px]" data-name="tag-status">
      <p className="basis-0 font-['Public_Sans:Medium',_sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center tracking-[-0.07px]">Active</p>
    </div>
  );
}

function Frame48096603() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[20px] items-start justify-center relative shrink-0">
      <TagStatus />
    </div>
  );
}

function DataCell8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-full items-center justify-center px-[8px] py-[12px] relative shrink-0 w-[150px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096603 />
    </div>
  );
}

function Goji1() {
  return (
    <div className="absolute inset-0" data-name="Goji">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFB5B9)" id="Ellipse 1" r="12" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Public_Sans:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#455057] text-[10px] text-center uppercase">
        <p className="leading-[normal]">A</p>
      </div>
    </div>
  );
}

function Initials2() {
  return (
    <div className="absolute inset-0" data-name="Initials">
      <Goji1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="avatar">
      <Initials2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
      <Avatar1 />
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">John Doe</p>
    </div>
  );
}

function DataCell9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame29 />
    </div>
  );
}

function Frame48096565() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] w-[184px] whitespace-pre-wrap">{`10/02/2025  09:08:56`}</p>
    </div>
  );
}

function DataCell10() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096565 />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start overflow-clip relative shrink-0 w-full" data-name="Item">
      <DataCell1 />
      <DataCell2 />
      <DataCell3 />
      <DataCell4 />
      <DataCell5 />
      <DataCell6 />
      <DataCell7 />
      <DataCell8 />
      <DataCell9 />
      <DataCell10 />
    </div>
  );
}

function Frame630265828() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Item />
    </div>
  );
}

function R1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="R1">
      <Frame630265828 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p28970180} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRightFilled17() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="arrow-right-filled_16">
      <Container46 />
    </div>
  );
}

function TableIconArrow1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_table-icon-arrow">
      <ArrowRightFilled17 />
    </div>
  );
}

function DataCell11() {
  return (
    <div className="bg-white box-border content-stretch flex h-full items-center pl-[24px] pr-[8px] py-[16px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableIconArrow1 />
    </div>
  );
}

function Frame48096566() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">R002</p>
    </div>
  );
}

function DataCell12() {
  return (
    <div className="bg-white box-border content-stretch flex items-start pl-[24px] pr-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096566 />
    </div>
  );
}

function Frame48096567() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">Inception</p>
    </div>
  );
}

function DataCell13() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096567 />
    </div>
  );
}

function Frame48096568() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">COH</p>
    </div>
  );
}

function DataCell14() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096568 />
    </div>
  );
}

function Frame48096569() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">Restricted</p>
    </div>
  );
}

function DataCell15() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096569 />
    </div>
  );
}

function Frame48096570() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">FX Spot</p>
    </div>
  );
}

function DataCell16() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096570 />
    </div>
  );
}

function Frame48096571() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">COI</p>
    </div>
  );
}

function DataCell17() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096571 />
    </div>
  );
}

function TagStatus1() {
  return (
    <div className="bg-[#b0e8d0] box-border content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0 w-[71px]" data-name="tag-status">
      <p className="basis-0 font-['Public_Sans:Medium',_sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center tracking-[-0.07px]">Active</p>
    </div>
  );
}

function Frame48096604() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[20px] items-start justify-center relative shrink-0">
      <TagStatus1 />
    </div>
  );
}

function DataCell18() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-full items-center justify-center px-[8px] py-[12px] relative shrink-0 w-[150px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096604 />
    </div>
  );
}

function Goji2() {
  return (
    <div className="absolute inset-0" data-name="Goji">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFB5B9)" id="Ellipse 1" r="12" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Public_Sans:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#455057] text-[10px] text-center uppercase">
        <p className="leading-[normal]">A</p>
      </div>
    </div>
  );
}

function Initials3() {
  return (
    <div className="absolute inset-0" data-name="Initials">
      <Goji2 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="avatar">
      <Initials3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
      <Avatar2 />
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">John Doe</p>
    </div>
  );
}

function DataCell19() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame31 />
    </div>
  );
}

function Frame48096572() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] w-[184px] whitespace-pre-wrap">{`10/02/2025  09:08:56`}</p>
    </div>
  );
}

function DataCell20() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096572 />
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative self-stretch shrink-0" data-name="Item">
      <DataCell11 />
      <DataCell12 />
      <DataCell13 />
      <DataCell14 />
      <DataCell15 />
      <DataCell16 />
      <DataCell17 />
      <DataCell18 />
      <DataCell19 />
      <DataCell20 />
    </div>
  );
}

function R2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="R1">
      <Item1 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p28970180} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRightFilled18() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="arrow-right-filled_16">
      <Container54 />
    </div>
  );
}

function TableIconArrow2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_table-icon-arrow">
      <ArrowRightFilled18 />
    </div>
  );
}

function DataCell21() {
  return (
    <div className="bg-white box-border content-stretch flex h-full items-center pl-[24px] pr-[8px] py-[16px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableIconArrow2 />
    </div>
  );
}

function Frame48096573() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">R003</p>
    </div>
  );
}

function DataCell22() {
  return (
    <div className="bg-white box-border content-stretch flex items-start pl-[24px] pr-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096573 />
    </div>
  );
}

function Frame48096574() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">Inception</p>
    </div>
  );
}

function DataCell23() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096574 />
    </div>
  );
}

function Frame48096575() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">COH</p>
    </div>
  );
}

function DataCell24() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096575 />
    </div>
  );
}

function Frame48096576() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">Non-Restricted</p>
    </div>
  );
}

function DataCell25() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096576 />
    </div>
  );
}

function Frame48096577() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">FX Spot</p>
    </div>
  );
}

function DataCell26() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096577 />
    </div>
  );
}

function Frame48096578() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">RE</p>
    </div>
  );
}

function DataCell27() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096578 />
    </div>
  );
}

function TagStatus2() {
  return (
    <div className="bg-[#ffd6d6] box-border content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0 w-[71px]" data-name="tag-status">
      <p className="basis-0 font-['Public_Sans:Medium',_sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center tracking-[-0.07px]">Inactive</p>
    </div>
  );
}

function Frame48096605() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[20px] items-start justify-center relative shrink-0">
      <TagStatus2 />
    </div>
  );
}

function DataCell28() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-full items-center justify-center px-[8px] py-[12px] relative shrink-0 w-[150px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096605 />
    </div>
  );
}

function Goji3() {
  return (
    <div className="absolute inset-0" data-name="Goji">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFB5B9)" id="Ellipse 1" r="12" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Public_Sans:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#455057] text-[10px] text-center uppercase">
        <p className="leading-[normal]">A</p>
      </div>
    </div>
  );
}

function Initials4() {
  return (
    <div className="absolute inset-0" data-name="Initials">
      <Goji3 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="avatar">
      <Initials4 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
      <Avatar3 />
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">John Doe</p>
    </div>
  );
}

function DataCell29() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame32 />
    </div>
  );
}

function Frame48096579() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] w-[184px] whitespace-pre-wrap">{`10/02/2025  09:08:56`}</p>
    </div>
  );
}

function DataCell30() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096579 />
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start overflow-clip relative shrink-0 w-full" data-name="Item">
      <DataCell21 />
      <DataCell22 />
      <DataCell23 />
      <DataCell24 />
      <DataCell25 />
      <DataCell26 />
      <DataCell27 />
      <DataCell28 />
      <DataCell29 />
      <DataCell30 />
    </div>
  );
}

function Frame630265829() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Item2 />
    </div>
  );
}

function R3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="R1">
      <Frame630265829 />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p28970180} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRightFilled19() {
  return (
    <div className="absolute content-stretch flex items-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="arrow-right-filled_16">
      <Container62 />
    </div>
  );
}

function TableIconArrow3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="_table-icon-arrow">
      <ArrowRightFilled19 />
    </div>
  );
}

function DataCell31() {
  return (
    <div className="bg-white box-border content-stretch flex h-full items-center pl-[24px] pr-[8px] py-[16px] relative shrink-0" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableIconArrow3 />
    </div>
  );
}

function Frame48096580() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">R004</p>
    </div>
  );
}

function DataCell32() {
  return (
    <div className="bg-white box-border content-stretch flex items-start pl-[24px] pr-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096580 />
    </div>
  );
}

function Frame48096581() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">Inception</p>
    </div>
  );
}

function DataCell33() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096581 />
    </div>
  );
}

function Frame48096582() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">COH</p>
    </div>
  );
}

function DataCell34() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096582 />
    </div>
  );
}

function Frame48096583() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">Restricted</p>
    </div>
  );
}

function DataCell35() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096583 />
    </div>
  );
}

function Frame48096584() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px]">FX Spot</p>
    </div>
  );
}

function DataCell36() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[130px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096584 />
    </div>
  );
}

function Frame48096585() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[20px] items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Public_Sans:Regular',_sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center">RE</p>
    </div>
  );
}

function DataCell37() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096585 />
    </div>
  );
}

function TagStatus3() {
  return (
    <div className="bg-[#ffd6d6] box-border content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0 w-[71px]" data-name="tag-status">
      <p className="basis-0 font-['Public_Sans:Medium',_sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#172733] text-[14px] text-center tracking-[-0.07px]">Inactive</p>
    </div>
  );
}

function Frame48096606() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[20px] items-start justify-center relative shrink-0">
      <TagStatus3 />
    </div>
  );
}

function DataCell38() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-full items-center justify-center px-[8px] py-[12px] relative shrink-0 w-[150px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096606 />
    </div>
  );
}

function Goji4() {
  return (
    <div className="absolute inset-0" data-name="Goji">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFB5B9)" id="Ellipse 1" r="12" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Public_Sans:Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#455057] text-[10px] text-center uppercase">
        <p className="leading-[normal]">A</p>
      </div>
    </div>
  );
}

function Initials5() {
  return (
    <div className="absolute inset-0" data-name="Initials">
      <Goji4 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="avatar">
      <Initials5 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
      <Avatar4 />
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] text-nowrap whitespace-pre">John Doe</p>
    </div>
  );
}

function DataCell39() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start px-[8px] py-[12px] relative shrink-0 w-[200px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame33 />
    </div>
  );
}

function Frame48096586() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <p className="font-['Public_Sans:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#172733] text-[14px] w-[184px] whitespace-pre-wrap">{`10/02/2025  09:08:56`}</p>
    </div>
  );
}

function DataCell40() {
  return (
    <div className="bg-white box-border content-stretch flex items-start px-[8px] py-[12px] relative shrink-0 w-[198px]" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame48096586 />
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-start overflow-clip relative shrink-0 w-full" data-name="Item">
      <DataCell31 />
      <DataCell32 />
      <DataCell33 />
      <DataCell34 />
      <DataCell35 />
      <DataCell36 />
      <DataCell37 />
      <DataCell38 />
      <DataCell39 />
      <DataCell40 />
    </div>
  );
}

function Frame630265830() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Item3 />
    </div>
  );
}

function R4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="R1">
      <Frame630265830 />
    </div>
  );
}

function Frame630265881() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative shrink-0">
      <Frame630265729 />
      <R1 />
      <R2 />
      <R3 />
      <R4 />
    </div>
  );
}

function DataCell41() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[68px] items-start pl-[24px] pr-[8px] py-[12px] w-full" />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p24d30300} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path d={svgPaths.p1f266f30} fill="var(--fill-0, #69737B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SquarePencil16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="square-pencil_16">
      <Container70 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <SquarePencil16 />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p15c14c00} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13587500} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p34978df0} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVertical16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="more-vertical_16">
      <Container71 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <MoreVertical16 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function DataCell42() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative w-full">
          <Frame30 />
          <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-0">
            <div className="flex-none h-px rotate-[90deg] w-[44px]">
              <div className="relative size-full" data-name="left-border">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(221, 227, 231, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                    <line id="left-border" stroke="var(--stroke-0, #DDE3E7)" x2="44" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p24d30300} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path d={svgPaths.p1f266f30} fill="var(--fill-0, #69737B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SquarePencil17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="square-pencil_16">
      <Container72 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <SquarePencil17 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p15c14c00} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13587500} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p34978df0} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVertical17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="more-vertical_16">
      <Container73 />
    </div>
  );
}

function IconButton5() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <MoreVertical17 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton4 />
      <IconButton5 />
    </div>
  );
}

function DataCell43() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative w-full">
          <Frame34 />
          <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-0">
            <div className="flex-none h-px rotate-[90deg] w-[44px]">
              <div className="relative size-full" data-name="left-border">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(221, 227, 231, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                    <line id="left-border" stroke="var(--stroke-0, #DDE3E7)" x2="44" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path d={svgPaths.p34263900} fill="var(--fill-0, #69737B)" />
            <path d={svgPaths.p2f591280} fill="var(--fill-0, #69737B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Eye16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="eye_16">
      <Container76 />
    </div>
  );
}

function IconButton8() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Eye16 />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p15c14c00} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13587500} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p34978df0} fill="var(--fill-0, #69737B)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MoreVertical19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="more-vertical_16">
      <Container77 />
    </div>
  );
}

function IconButton9() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[24px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <MoreVertical19 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0">
      <IconButton8 />
      <IconButton9 />
    </div>
  );
}

function DataCell45() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="data-cell">
      <div aria-hidden="true" className="absolute border-[#dde3e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end pl-[8px] pr-[16px] py-[12px] relative w-full">
          <Frame36 />
          <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-0">
            <div className="flex-none h-px rotate-[90deg] w-[44px]">
              <div className="relative size-full" data-name="left-border">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(221, 227, 231, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                    <line id="left-border" stroke="var(--stroke-0, #DDE3E7)" x2="44" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame630265887() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <DataCell43 key={i} />
      ))}
      <DataCell45 />
    </div>
  );
}

function Frame630265852() {
  return (
    <div className="content-stretch flex flex-col h-[244px] items-start relative shrink-0 w-[80px]">
      <DataCell41 />
      <DataCell42 />
      <Frame630265887 />
    </div>
  );
}

function Frame630265885() {
  return (
    <div className="absolute content-stretch flex items-start left-[152px] top-[174px] w-[1248px]">
      <Frame630265881 />
      <Frame630265852 />
    </div>
  );
}

export default function ConfigInboundInstructions() {
  return (
    <div className="bg-[#f5f7f9] relative size-full" data-name="Config- Inbound Instructions">
      <PrimarySideNav />
      <SecondaryNav />
      <Header />
      <TableHeader />
      <Frame630265885 />
    </div>
  );
}