import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface WebsiteCardProps {
  url: string;
  title: string;
  img: string;
  siteLink?: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ url, title, img, siteLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const screenshotUrl = `https://image.thum.io/get/width/800/${url}`;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onTap={() => setIsHovered(!isHovered)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        width: '350px',
        height: '400px',
        backgroundImage: `url(${screenshotUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
        cursor: 'default', // no pointer on whole container
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Semi-transparent overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#38C6C6',
                pointerEvents: 'none',
              }}
            />

            {/* Foreground content */}
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'end',
                gap: '12px',
                padding: '16px',
                color: 'white',
                zIndex: 10,
                userSelect: 'none',
                pointerEvents: 'none', // disable pointer events on entire content
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  textShadow: '0 0 6px rgba(0, 0, 0, 0.6)',
                }}
              >
                {title}
              </h3>

              {siteLink && (
                <a
                  href={siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    fontWeight:'bold',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    pointerEvents: 'auto', // enable pointer only on button
                    cursor: 'pointer',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Site <ArrowForwardIcon fontSize="small" />
                </a>
              )}

              <img
                src={img}
                alt={title}
                style={{
                  width: '200px',
                  height: 'auto',
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WebsiteCard;
