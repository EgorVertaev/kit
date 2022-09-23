import React, { FC } from "react";

interface IIconProps {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  opacity?: string;
}

export const LogoIcon: FC<IIconProps> = (props) => {
  return (
    <svg width={props.width || "48"} height={props.height || "48"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#3751FF" />
      <path d="M16.5 14.5C16.5 13.9477 16.9477 13.5 17.5 13.5H23.9857C27.319 13.5 29.9 14.4143 31.7286 16.243C33.5762 18.0716 34.5 20.6475 34.5 23.9705C34.5 27.3132 33.5762 29.9087 31.7286 31.757C29.9 33.5857 27.319 34.5 23.9857 34.5H17.5C16.9477 34.5 16.5 34.0523 16.5 33.5V14.5Z" fill="url(#paint0_linear_6348_54)"/>
      <defs>
        <linearGradient id="paint0_linear_6348_54" x1="16.5" y1="13.5" x2="34.5" y2="34.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.7" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Eye: FC<IIconProps> = (props) => {
  return (
  <svg height="28px" id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="32px" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M447.1,256.2C401.8,204,339.2,144,256,144c-33.6,0-64.4,9.5-96.9,29.8C131.7,191,103.6,215.2,65,255l-1,1l6.7,6.9   C125.8,319.3,173.4,368,256,368c36.5,0,71.9-11.9,108.2-36.4c30.9-20.9,57.2-47.4,78.3-68.8l5.5-5.5L447.1,256.2z M256,336   c-44.1,0-80-35.9-80-80c0-44.1,35.9-80,80-80c44.1,0,80,35.9,80,80C336,300.1,300.1,336,256,336z"/>
      <path d="M250.4,226.8c0-6.9,2-13.4,5.5-18.8c-26.5,0-47.9,21.6-47.9,48.2c0,26.6,21.5,48.1,47.9,48.1s48-21.5,48-48.1v0   c-5.4,3.5-11.9,5.5-18.8,5.5C266,261.6,250.4,246,250.4,226.8z"/>
    </g>
  </svg>
  );
};

export const EyeHide: FC<IIconProps> = (props) => {
  return (
    <svg width={props.width || "18"} height={props.height || "14"} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.99994 10.75C7.02468 10.75 5.42572 9.22114 5.27859 7.28364L2.54682 5.17244C2.1877 5.62296 1.85723 6.09927 1.59057 6.6201C1.53099 6.73794 1.49996 6.86814 1.49996 7.00018C1.49996 7.13222 1.53099 7.26242 1.59057 7.38026C3.00281 10.1357 5.79864 12 8.99994 12C9.70072 12 10.3768 11.8959 11.0283 11.7277L9.67702 10.6821C9.45385 10.7252 9.22723 10.7479 8.99994 10.75ZM17.1723 12.2631L14.2934 10.0381C15.168 9.30107 15.8872 8.39752 16.4093 7.38C16.4689 7.26215 16.4999 7.13196 16.4999 6.99992C16.4999 6.86787 16.4689 6.73768 16.4093 6.61984C14.9971 3.86437 12.2012 2.00005 8.99994 2.00005C7.65919 2.00167 6.34021 2.33921 5.16348 2.98182L1.85046 0.421142C1.80726 0.387524 1.75786 0.362749 1.70507 0.348232C1.65229 0.333715 1.59717 0.32974 1.54285 0.336536C1.48853 0.343332 1.43609 0.360765 1.38851 0.387838C1.34093 0.414911 1.29915 0.451094 1.26557 0.494319L0.754368 1.15239C0.686555 1.23963 0.656169 1.35023 0.669892 1.45986C0.683615 1.5695 0.740323 1.6692 0.827545 1.73703L16.1494 13.579C16.1926 13.6126 16.242 13.6373 16.2948 13.6519C16.3476 13.6664 16.4027 13.6704 16.457 13.6636C16.5113 13.6568 16.5638 13.6393 16.6114 13.6123C16.659 13.5852 16.7007 13.549 16.7343 13.5058L17.2458 12.8477C17.3136 12.7604 17.3439 12.6498 17.3301 12.5402C17.3164 12.4305 17.2596 12.3309 17.1723 12.2631ZM12.388 8.56515L11.3645 7.77401C11.4507 7.52491 11.4964 7.26361 11.4999 7.00005C11.505 6.61418 11.4195 6.2325 11.2503 5.88566C11.0812 5.53882 10.833 5.2365 10.5258 5.00297C10.2185 4.76944 9.86083 4.61122 9.48137 4.54102C9.1019 4.47082 8.71126 4.49059 8.34083 4.59875C8.49786 4.81153 8.58281 5.06892 8.58327 5.33338C8.57939 5.42138 8.56594 5.5087 8.54317 5.5938L6.62624 4.11229C7.29212 3.55583 8.13216 3.25069 8.99994 3.25005C9.49247 3.24977 9.98023 3.34658 10.4353 3.53494C10.8904 3.7233 11.3039 3.99951 11.6522 4.34779C12.0005 4.69606 12.2767 5.10957 12.465 5.56466C12.6534 6.01976 12.7502 6.50751 12.7499 7.00005C12.7499 7.56333 12.6122 8.08833 12.388 8.56541V8.56515Z" fill="#9FA2B4"/>
    </svg>
  );
};

export const OverviewIcon: FC<IIconProps> = (props) => {
  return (
    <svg width={props.width || "16"} height={props.height || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity={props.opacity || "0.4"} d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z" fill={props.fill || "#9FA2B4"}/>
    </svg>
  );
};

export const TicketsIcon: FC<IIconProps> = (props) => {
  return (
    <svg width={props.width || "16"} height={props.height || "12"} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity={props.opacity || "0.4"} d="M3.55556 3.33334H12.4444V8.66667H3.55556V3.33334ZM14.6667 6C14.6667 6.73639 15.2636 7.33334 16 7.33334V10C16 10.7364 15.4031 11.3333 14.6667 11.3333H1.33333C0.596944 11.3333 0 10.7364 0 10V7.33334C0.736389 7.33334 1.33333 6.73639 1.33333 6C1.33333 5.26362 0.736389 4.66667 0 4.66667V2.00001C0 1.26362 0.596944 0.666672 1.33333 0.666672H14.6667C15.4031 0.666672 16 1.26362 16 2.00001V4.66667C15.2636 4.66667 14.6667 5.26362 14.6667 6ZM13.3333 3.11112C13.3333 2.74292 13.0349 2.44445 12.6667 2.44445H3.33333C2.96514 2.44445 2.66667 2.74292 2.66667 3.11112V8.88889C2.66667 9.25709 2.96514 9.55556 3.33333 9.55556H12.6667C13.0349 9.55556 13.3333 9.25709 13.3333 8.88889V3.11112Z" fill={props.fill || "#9FA2B4"}/>
    </svg>
  );
};

export const ContactIcon: FC<IIconProps> = (props) => {
  return (
    <svg width={props.width || "16"} height={props.height || "12"} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity={props.opacity || "0.4"} d="M2.4 5.2C3.2825 5.2 4 4.4825 4 3.6C4 2.7175 3.2825 2 2.4 2C1.5175 2 0.8 2.7175 0.8 3.6C0.8 4.4825 1.5175 5.2 2.4 5.2ZM13.6 5.2C14.4825 5.2 15.2 4.4825 15.2 3.6C15.2 2.7175 14.4825 2 13.6 2C12.7175 2 12 2.7175 12 3.6C12 4.4825 12.7175 5.2 13.6 5.2ZM14.4 6H12.8C12.36 6 11.9625 6.1775 11.6725 6.465C12.68 7.0175 13.395 8.015 13.55 9.2H15.2C15.6425 9.2 16 8.8425 16 8.4V7.6C16 6.7175 15.2825 6 14.4 6ZM8 6C9.5475 6 10.8 4.7475 10.8 3.2C10.8 1.6525 9.5475 0.400002 8 0.400002C6.4525 0.400002 5.2 1.6525 5.2 3.2C5.2 4.7475 6.4525 6 8 6ZM9.92 6.8H9.7125C9.1925 7.05 8.615 7.2 8 7.2C7.385 7.2 6.81 7.05 6.2875 6.8H6.08C4.49 6.8 3.2 8.09 3.2 9.68V10.4C3.2 11.0625 3.7375 11.6 4.4 11.6H11.6C12.2625 11.6 12.8 11.0625 12.8 10.4V9.68C12.8 8.09 11.51 6.8 9.92 6.8ZM4.3275 6.465C4.0375 6.1775 3.64 6 3.2 6H1.6C0.7175 6 0 6.7175 0 7.6V8.4C0 8.8425 0.3575 9.2 0.8 9.2H2.4475C2.605 8.015 3.32 7.0175 4.3275 6.465Z" fill={props.fill || "#9FA2B4"}/>
    </svg>
  );
};
export const SettingIcon: FC<IIconProps> = (props) => {
  return (
    <svg width={props.width || "16"} height={props.height || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M15.2313 9.86558L13.9 9.09683C14.0344 8.37183 14.0344 7.62808 13.9 6.90308L15.2313 6.13433C15.3844 6.04683 15.4531 5.86558 15.4031 5.69683C15.0563 4.58433 14.4656 3.57808 13.6938 2.74058C13.575 2.61246 13.3813 2.58121 13.2313 2.66871L11.9 3.43746C11.3406 2.95621 10.6969 2.58433 10 2.34058V0.806206C10 0.631206 9.87814 0.478081 9.70627 0.440581C8.55939 0.184331 7.38439 0.196831 6.29377 0.440581C6.12189 0.478081 6.00002 0.631206 6.00002 0.806206V2.34371C5.30627 2.59058 4.66252 2.96246 4.10002 3.44058L2.77189 2.67183C2.61877 2.58433 2.42814 2.61246 2.30939 2.74371C1.53752 3.57808 0.946895 4.58433 0.60002 5.69996C0.546895 5.86871 0.61877 6.04996 0.771895 6.13746L2.10314 6.90621C1.96877 7.63121 1.96877 8.37496 2.10314 9.09996L0.771895 9.86871C0.61877 9.95621 0.55002 10.1375 0.60002 10.3062C0.946895 11.4187 1.53752 12.425 2.30939 13.2625C2.42814 13.3906 2.62189 13.4218 2.77189 13.3343L4.10314 12.5656C4.66252 13.0468 5.30627 13.4187 6.00314 13.6625V15.2C6.00314 15.375 6.12502 15.5281 6.29689 15.5656C7.44377 15.8218 8.61877 15.8093 9.70939 15.5656C9.88127 15.5281 10.0031 15.375 10.0031 15.2V13.6625C10.6969 13.4156 11.3406 13.0437 11.9031 12.5656L13.2344 13.3343C13.3875 13.4218 13.5781 13.3937 13.6969 13.2625C14.4688 12.4281 15.0594 11.4218 15.4063 10.3062C15.4531 10.1343 15.3844 9.95308 15.2313 9.86558ZM8.00002 10.5C6.62189 10.5 5.50002 9.37808 5.50002 7.99996C5.50002 6.62183 6.62189 5.49996 8.00002 5.49996C9.37814 5.49996 10.5 6.62183 10.5 7.99996C10.5 9.37808 9.37814 10.5 8.00002 10.5Z" fill="#9FA2B4"/>
    </svg>
  );
};

