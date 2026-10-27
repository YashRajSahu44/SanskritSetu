import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'gold' | 'maroon' | 'subtle';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({ 
  className = '', 
  variant = 'gold' 
}) => {
  const colorClass = variant === 'maroon' 
    ? 'text-maroon border-maroon/30' 
    : variant === 'subtle' 
    ? 'text-ink-secondary/40 border-ink-secondary/20' 
    : 'text-gold border-gold/40';

  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className={`flex-1 border-t ${colorClass} max-w-xs md:max-w-md`}></div>
      <div className={`mx-4 flex items-center space-x-2 ${colorClass}`}>
        <span className="text-xs opacity-60">❖</span>
        <span className="text-base font-serif">ॐ</span>
        <span className="text-xs opacity-60">❖</span>
      </div>
      <div className={`flex-1 border-t ${colorClass} max-w-xs md:max-w-md`}></div>
    </div>
  );
};
