import React from 'react';
import styles from './CustomModal.module.css';

interface CustomModalProps {
  isOpen: boolean;
  title?:string;
  onClose?: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({children,isOpen,onClose,title}) => {
  if(!isOpen){
    return null
  }


  return (
    <div className={`${styles.backdrop} flex justify-center items-center`}>
      <div className={styles.modal}>
        {title && <h1 className='text-lg font-bold mb-4'>{title}</h1>}
        <div>
          {children}
        </div>
        {onClose && <div className='text-right mt-4'>
          <button onClick={onClose} className='px-4 py-2 text-white bg-red-500 hover:bg-red-700 font-semibold rounded'>close</button>
        </div>}
      </div>
    </div>
  );
};

export default CustomModal;
