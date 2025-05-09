import type { ImgHTMLAttributes } from 'react';
import classes from './Pic.module.css';

type TPicProps = ImgHTMLAttributes<HTMLImageElement> & {
  disabled?: boolean;
};
function Pic({ className, ...props }: TPicProps) {
  return (
    <div
      className={[classes.pic, className, props.disabled && classes.disabled]
        .filter(Boolean)
        .join(' ')}
    >
      <img {...props} />
    </div>
  );
}

export default Pic;
