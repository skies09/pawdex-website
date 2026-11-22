import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark active:bg-primary-dark disabled:bg-primary/40 disabled:text-white/80',
  secondary:
    'bg-surface-card text-ink ring-1 ring-surface-border hover:bg-primary-hover active:bg-primary-soft disabled:text-ink-muted disabled:opacity-60',
  ghost:
    'bg-transparent text-primary hover:bg-primary-soft/60 active:bg-primary-soft disabled:text-ink-muted disabled:opacity-60',
}

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

type Shared = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type AsButton = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type AsLink = Shared &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-primary'

export function Button(props: AsButton | AsLink) {
  const { children, variant = 'primary', size = 'md', className = '', ...rest } = props
  const classes = [base, variants[variant], sizes[size], className].join(' ')

  if ('href' in props && props.href) {
    const { href, ...linkRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
