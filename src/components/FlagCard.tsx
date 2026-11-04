import React from 'react';
import { motion } from 'motion/react';
import { FlagSvg, FlagId } from './FlagSvg';

interface FlagCardProps {
  flagId: FlagId;
  onClick?: () => void;
  className?: string;
}

export const FlagCard: React.FC<FlagCardProps> = ({ flagId, onClick, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer transition-transform group ${className}`}
      title="Click flag to interact"
    >
      <div className="w-full max-w-[280px] mx-auto rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
        <FlagSvg flag={flagId} isWaving={true} />
      </div>
    </motion.div>
  );
};
