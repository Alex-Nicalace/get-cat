import type { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.css';

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};
function Button({ children, className, ...props }: TButtonProps) {
  return (
    <button
      {...props}
      className={[classes.button, className].filter(Boolean).join(' ')}
    >
      {children}
    </button>
  );
}

export default Button;
