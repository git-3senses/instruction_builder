import svgPaths from "./svg-3ct3vftyrx";

function Container() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p1c2dc900} fill="var(--fill-0, #00AB61)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function CircleCheckmarkFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="circle-checkmark-filled">
      <Container />
    </div>
  );
}

function StatusIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[100px] shrink-0" data-name="status-icon">
      <CircleCheckmarkFilled />
    </div>
  );
}

function Icon() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-0 py-[4px] relative shrink-0" data-name="Icon">
      <StatusIcon />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <Icon />
      <div className="basis-0 flex flex-col font-['Public_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-[32px] min-w-px relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.5]">Table updated successfully.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.pc3e4b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="close">
      <Container1 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[32px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Close />
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right Content">
      <IconButton />
    </div>
  );
}

export default function Snackbar() {
  return (
    <div className="bg-[#172733] relative rounded-[4px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.2),0px_0px_1px_0px_rgba(0,0,0,0.25)] size-full" data-name="snackbar">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-[12px] relative size-full">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </div>
  );
}