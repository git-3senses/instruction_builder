import svgPaths from "./svg-rpk1ky9btf";

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[32px] relative shrink-0 w-full" data-name="title">
      <p className="font-['Public_Sans:SemiBold',_sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#172733] text-[16px] text-nowrap tracking-[0.08px] whitespace-pre">Upload table</p>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
      <Title />
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
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="close">
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

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[24px]" data-name="wrapper">
      <IconButton2 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="actions">
      <Wrapper />
    </div>
  );
}

function DrawerHeader() {
  return (
    <div className="bg-white relative shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="drawer-header">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative w-full">
          <Text />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p181d1a80} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CloudUpload() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="cloud-upload">
      <Container3 />
    </div>
  );
}

function ContentCopy() {
  return (
    <div className="content-stretch flex flex-col font-['Public_Sans:Medium',_sans-serif] font-medium gap-[8px] items-start leading-[1.2] relative shrink-0 text-center w-full" data-name="Content Copy">
      <p className="relative shrink-0 text-[#172733] text-[0px] text-[14px] w-full">
        <span>{`Drag your file here or `}</span>
        <span className="text-[#0077cc]">browse</span>
      </p>
      <p className="relative shrink-0 text-[#69737b] text-[13px] tracking-[-0.065px] w-full">Supports up to 10MB of XLS or XLSX</p>
    </div>
  );
}

function UploadArea() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="_upload-area">
      <div aria-hidden="true" className="absolute border border-[#b0b9c0] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[24px] relative w-full">
          <CloudUpload />
          <ContentCopy />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path clipRule="evenodd" d={svgPaths.p30530900} fill="var(--fill-0, #69737B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function File() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="file">
      <Container4 />
    </div>
  );
}

function FileThumbnail() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex gap-[10px] items-start overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="_file-thumbnail">
      <File />
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Public_Sans:Medium',_sans-serif] font-medium gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="leading-[17.5px] relative shrink-0 text-[#172733] text-[14px] tracking-[-0.07px] w-full">SFX_May2024.xls</p>
      <p className="leading-[16.25px] relative shrink-0 text-[#69737b] text-[13px] tracking-[-0.065px] w-full">100%</p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left content">
      <FileThumbnail />
      <Title1 />
    </div>
  );
}

function Container6() {
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

function Close1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="close">
      <Container6 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center min-h-[32px] p-[4px] relative rounded-[4px] shrink-0" data-name="icon-button">
      <Close1 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Actions">
      <IconButton4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <LeftContent />
      <Actions1 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="h-[4px] overflow-clip relative rounded-[9px] shrink-0 w-full" data-name="Progress bar">
      <div className="absolute bg-[#00ab61] bottom-0 left-0 right-[-1.33%] rounded-[23px] top-0" />
    </div>
  );
}

function UploadFile() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-start justify-end overflow-clip px-0 py-[16px] relative shrink-0 w-full" data-name="_upload-file">
      <Container7 />
      <ProgressBar />
    </div>
  );
}

function DrawerBody() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="drawer-body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <UploadArea />
          <UploadFile />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0077cc] box-border content-stretch flex flex-col items-end justify-center min-h-[40px] px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="button">
      <p className="font-['Public_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Update table</p>
    </div>
  );
}

function DrawerFooterDefault() {
  return (
    <div className="bg-white relative shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.05),0px_0px_1px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="drawer-footer/Default">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-end px-[24px] py-[16px] relative w-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default function FileUploadSuccessOverlay() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[-8px_0px_10px_0px_rgba(0,0,0,0.05),-1px_0px_1px_0px_rgba(0,0,0,0.1)] size-full" data-name="File Upload Success Overlay">
      <DrawerHeader />
      <DrawerBody />
      <DrawerFooterDefault />
    </div>
  );
}