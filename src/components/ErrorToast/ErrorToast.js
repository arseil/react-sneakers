import styles from './ErrorToast.module.scss';

export function ErrorToast({ message }) {
  if (!message) return null;

  return (
    <div className={styles.errorToast} role="alert">
      {message}
    </div>
  );
}
