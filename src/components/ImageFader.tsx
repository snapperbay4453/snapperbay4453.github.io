import { useEffect, useState } from 'preact/hooks';
import LoadingIcon from './LoadingIcon';

interface ImageFaderProps {
  src: string;
  alt?: string;
  height: number;
  width?: number;
  fade?: boolean;
  loadingIcon?: boolean;
  rounded?: boolean;
}

export default function ImageFader({
  src,
  alt,
  height,
  width,
  fade = true,
  loadingIcon = true,
  rounded = true,
}: ImageFaderProps) {
  const [rendered, setRendered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div class='relative'>
      <div
        class={`
        ${
          fade ? 'transition-all duration-1000' : ''
        } ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ height: `${height}px`, width: width ? `${width}px` : 'auto' }}
      >
        <img
          class={`
          ${
            rounded ? 'rounded-3xl' : ''
          }`}
          src={src}
          alt={alt ?? ''}
          height={height}
          width={width ?? 'auto'}
          onLoad={handleImageLoad}
          loading='lazy'
          decoding='async'
        />
      </div>
      <div class={`
        absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center 
        ${
          fade ? 'transition-all duration-1000' : ''
        } ${
          loadingIcon && rendered && !loaded ? 'delay-500' : ''
        } ${
          loadingIcon && rendered && !loaded ? 'opacity-100' : 'opacity-0'
        }
      `}>
        <LoadingIcon />
      </div>
    </div>
  );
};
