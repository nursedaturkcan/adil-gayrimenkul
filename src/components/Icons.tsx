import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 34V18.2L20 8l12 10.2V34h-8.5V24.5h-7V34H8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16.5 34V28h7v6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 21h4M24 21h4M12 25.5h4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 3.75h2.2l1.1 3.3-1.6 1.6a12.5 12.5 0 0 0 6.15 6.15l1.6-1.6 3.3 1.1v2.2A1.75 1.75 0 0 1 18.5 18.2 14.75 14.75 0 0 1 5.8 5.5a1.75 1.75 0 0 1 1.7-1.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.5V6.5M16 3.5V6.5M3.5 10h17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2.5A9.45 9.45 0 0 0 2.6 11.9a9.4 9.4 0 0 0 1.3 4.8L2.5 21.5l4.95-1.3a9.5 9.5 0 0 0 14.05-8.3 9.46 9.46 0 0 0-9.46-9.4Zm5.5 13.4c-.23.65-1.35 1.25-1.88 1.33-.48.07-1.1.1-1.77-.11-.41-.13-.93-.3-1.6-.59-2.82-1.22-4.65-4.05-4.8-4.24-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.23-.26.62-.38.99-.38.12 0 .23 0 .33.01.29.01.43.03.62.48.23.56.8 1.94.87 2.08.07.14.12.31.02.5-.09.2-.14.31-.27.48-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.22 1.36.28.14.44.12.6-.07.17-.2.7-.81.89-1.09.19-.28.38-.23.64-.14.26.09 1.66.78 1.95.92.28.14.47.21.54.33.07.12.07.7-.16 1.35Z" />
    </svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 6 8 12v12c0 10.5 6.8 16.8 16 20 9.2-3.2 16-9.5 16-20V12L24 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m17 24 5 5 9-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function PortfolioIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <rect x="8" y="14" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M18 14v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 22h32" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function LocationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 42s14-11.2 14-22A14 14 0 1 0 10 20c0 10.8 14 22 14 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function FastIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M8 28h12l4-12 5 20 4-10h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 18h8M10 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 24s8-14 20-14 20 14 20 14-8 14-20 14S4 24 4 24Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.8" />
      <path d="m24 12 4 16-16-4 12-12Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  )
}
