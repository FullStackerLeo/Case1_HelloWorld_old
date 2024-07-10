import React, { FC } from 'react';

interface ButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const BottomButton: FC<ButtonProps> = ({ active, children, onClick }) => (
  <button    onClick={onClick}    disabled={active}    style={{      marginLeft: '4px',    }}  >
    {children}
  </button>
);

export default BottomButton;
