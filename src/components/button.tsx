import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '../utils';

const buttonVariants = cva(
  "inline-flex cursor-pointer font-light items-center justify-center gap-2 whitespace-nowrap rounded-4xl text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-4 py-2 has-[>svg]:px-3",
  {
    variants: {
      variant: {
        default:
          'bg-amber-100 text-orange-500 shadow-xs hover:bg-orange-500/90 hover:text-amber-100',
        secondary:
          'bg-orange-500 text-amber-100 shadow-xs hover:bg-amber-100/90 hover:text-orange-500'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export default function Button({
  className,
  variant,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}
