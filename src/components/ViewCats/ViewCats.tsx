import type { HTMLAttributes } from 'react';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Pic from '../ui/Pic';
import classes from './ViewCats.module.css';

type TViewCatsProps = HTMLAttributes<HTMLDivElement> & {};
function ViewCats({ className, ...props }: TViewCatsProps) {
  return (
    <div
      className={[classes.container, className].filter(Boolean).join(' ')}
      {...props}
    >
      <Checkbox label="Enabled" />
      <Checkbox label="Auto-refresh every 5 seconds" />
      <Button className={classes.button}>Get cat</Button>
      <Pic className={classes.pic} src="https://cataas.com/cat" />
    </div>
  );
}

export default ViewCats;
