// @ts-nocheck
// Restored from ref/.vite/renderer/find_in_page/assets/FindInPage-BE9M4xe7.js

import type { SVGProps } from "react";

type FindInPageIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function FindInPageIconBase({
  children,
  size = 18,
  ...props
}: FindInPageIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 256 256"
      width={size}
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowDownIcon(props: FindInPageIconProps) {
  return (
    <FindInPageIconBase {...props}>
      <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z" />
    </FindInPageIconBase>
  );
}

export function ArrowUpIcon(props: FindInPageIconProps) {
  return (
    <FindInPageIconBase {...props}>
      <path d="M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z" />
    </FindInPageIconBase>
  );
}

export function CloseSquareIcon(props: FindInPageIconProps) {
  return (
    <FindInPageIconBase {...props}>
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
    </FindInPageIconBase>
  );
}
