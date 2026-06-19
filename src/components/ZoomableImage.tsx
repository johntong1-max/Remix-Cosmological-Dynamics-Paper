import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomableImage({ src, alt, className = '' }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = '';
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.5, 1));
    if (scale - 0.5 <= 1) {
      setPosition({ x: 0, y: 0 }); // Reset position if zooming all the way out
    }
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] ${className}`}
        onClick={handleOpen}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleClose}
          >
            {/* Toolbar */}
            <div className="absolute top-4 right-4 flex gap-2 z-[110]">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
              <motion.img
                drag={scale > 1}
                dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                dragElastic={0.1}
                src={src}
                alt={alt}
                animate={{ scale, x: position.x, y: position.y }}
                onDragEnd={(e, info) => {
                  setPosition({
                    x: position.x + info.offset.x,
                    y: position.y + info.offset.y
                  });
                }}
                className={`max-w-full max-h-full object-contain ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                onClick={(e) => e.stopPropagation()} // Prevent close on image click
              />
            </div>
            
            <div className="absolute bottom-6 text-slate-400 text-sm bg-slate-900/50 px-4 py-2 rounded-full z-[110] pointer-events-none">
              {scale > 1 ? "Drag to pan" : "Click '+' to zoom"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
