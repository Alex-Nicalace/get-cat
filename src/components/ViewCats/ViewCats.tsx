import { useEffect, useState, type HTMLAttributes } from 'react';
import { getCat } from '../../api/apiCats';
import { useApi } from '../../hooks/useApi';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Pic from '../ui/Pic';
import classes from './ViewCats.module.css';

type TViewCatsProps = HTMLAttributes<HTMLDivElement> & {};
function ViewCats({ className, ...props }: TViewCatsProps) {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [stateCat, fetchDataCat] = useApi(getCat);
  const { data: dataCat, isLoading, errorMessage } = stateCat;

  const isShowPic = dataCat && !isLoading && !errorMessage;

  function toggleEnabled() {
    setEnabled((prev) => !prev);
  }

  function toggleAutoRefresh() {
    setAutoRefresh((prev) => !prev);
  }

  useEffect(
    function fetchOnMount() {
      const controller = new AbortController();
      fetchDataCat()({
        signal: controller.signal,
      });

      return () => controller.abort();
    },
    [fetchDataCat]
  );

  useEffect(
    function refreshAutoCat() {
      if (!autoRefresh || !enabled) return;

      const controller = new AbortController();
      const timerId = setTimeout(() => {
        fetchDataCat()({
          signal: controller.signal,
        });
      }, 5000);

      return () => {
        controller.abort();
        clearTimeout(timerId);
      };
    },
    [fetchDataCat, autoRefresh, enabled, dataCat]
  );

  function handleGetCat() {
    fetchDataCat()();
  }

  return (
    <div
      className={[classes.viewCats, className].filter(Boolean).join(' ')}
      {...props}
    >
      <Checkbox label="Enabled" checked={enabled} onChange={toggleEnabled} />
      <Checkbox
        label="Auto-refresh every 5 seconds"
        disabled={!enabled}
        checked={autoRefresh}
        onChange={toggleAutoRefresh}
      />
      <Button
        className={classes.button}
        onClick={handleGetCat}
        disabled={!enabled}
      >
        Get cat
      </Button>
      {isLoading && <div className={classes.loading}>Loading...</div>}
      {errorMessage && <div className={classes.error}>{errorMessage}</div>}
      {isShowPic && (
        <Pic
          className={classes.pic}
          src={dataCat.url}
          disabled={!enabled}
          alt="кошка"
        />
      )}
    </div>
  );
}

export default ViewCats;
