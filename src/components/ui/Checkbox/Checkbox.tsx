import type { InputHTMLAttributes } from 'react';
import classes from './Checkbox.module.css';

type TCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};
function Checkbox({ label, className, ...props }: TCheckboxProps) {
  return (
    <label className={[classes.checkbox, className].filter(Boolean).join(' ')}>
      <input {...props} type="checkbox" />
      <span className={classes.checkmark}></span>
      {label && <span className={classes.label}>{label}</span>}
    </label>
  );
}

export default Checkbox;
