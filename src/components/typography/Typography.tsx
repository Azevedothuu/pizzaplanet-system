import type { JSX, ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2';

interface TypographyProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const variants: Record<
  Variant,
  { tag: keyof JSX.IntrinsicElements; className: string }
> = {
  h1: {
    tag: 'h1',
    className: 'text-3xl font-bold',
  },
  h2: {
    tag: 'h2',
    className: 'text-2xl font-medium',
  },
  h3: {
    tag: 'h3',
    className: 'text-xl font-medium',
  },
  body1: {
    tag: 'p',
    className: 'text-base font-normal',
  },
  body2: {
    tag: 'p',
    className: 'text-sm font-normal text-muted',
  },
};

export function Typography({
  variant = 'body1',
  children,
  className = '',
}: TypographyProps): JSX.Element {
  const { tag: Tag, className: baseClass } = variants[variant];

  return <Tag className={`${baseClass} ${className}`}>{children}</Tag>;
}
