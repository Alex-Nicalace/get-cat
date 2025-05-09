import type { ImgHTMLAttributes } from 'react';
import classes from './Pic.module.css';

type TPicProps = ImgHTMLAttributes<HTMLImageElement> & {};
function Pic({ className, ...props }: TPicProps) {
  return (
    <div className={[classes.pic, className].filter(Boolean).join(' ')}>
      <img {...props} />
    </div>
  );
}

export default Pic;
