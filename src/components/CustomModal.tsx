import React from 'react';
import styles from './CustomModal.module.css';
import { ScrollView } from 'react-native';

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

// import React from 'react';
// import styles from './CustomModal.module.css';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title?: string;
//   children: React.ReactNode;
// }

// const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
    // <div className={`${styles.backdrop} flex justify-center items-center`}>
    //   <div className={styles.modal

    //   }>
    //     {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
    //     <div>{children}</div>
    //     <div className="mt-4 text-right">
    //       <button
    //         onClick={onClose}
    //         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
    //       >
    //         Close
    //       </button>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default CustomModal;
