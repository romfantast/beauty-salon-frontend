import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const LazyImage = ({
  alt,
  src,
  width,
  height,
  styles,
  isBlurred = true,
  transitionDelay = '0.1s',
  ...rest
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src}
      width={width}
      className={styles}
      effect={isBlurred ? 'blur' : 'none'}
      wrapperProps={{
        style: { transitionDelay: transitionDelay },
      }}
      {...rest}
    />
  );
};
