import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ServicesSkeleton = ({ styles }) => {
  return (
    <div className={styles}>
      <Skeleton height={100} />
      <Skeleton height={100} />
    </div>
  );
};
