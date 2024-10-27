// src/components/ui/scroll-area.tsx
import React from 'react';

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function ScrollArea({ children, className = '', ...props }: ScrollAreaProps) {
  return (
    <div
      className={`overflow-y-auto h-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
