// src/components/ui/textarea.tsx
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 resize-none ${className}`}
      {...props}
    />
  );
}
