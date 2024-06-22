import { useRef, useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { CSSProperties } from "react";

type Props = {
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  poster?: string;
  staticFallback?: string;
  src: string;
  style?: CSSProperties;
  threshold?: number;
  lowPowerMode?: boolean;
  playBackRate?: number;
};

/**
 * Play video on viewport entry
 */
export const VideoObserver = ({
  autoPlay = false,
  loop = false,
  className,
  poster,
  staticFallback,
  src,
  style,
  threshold = 0.75,
  lowPowerMode = false,
  playBackRate = 1,
}: Props) => {
  const player = useRef<HTMLVideoElement>(null);
  const { inView, ref } = useInView({ threshold });

  useLayoutEffect(() => {
    if (inView && player.current) {
      player.current.play();
      player.current.playbackRate = playBackRate;
    }
  }, [inView, player]);

  return (
    <>
      {!lowPowerMode ? (
        <div ref={ref}>
          <video
            ref={player}
            muted
            loop={loop}
            autoPlay={autoPlay}
            playsInline
            controls={false}
            className={className}
            style={style}
            poster={poster}
          >
            <source src={`${src}#t=0.001`} type='video/mp4' />
          </video>
        </div>
      ) : (
        <div>
          <img
            className={className}
            style={style}
            src={staticFallback}
            alt='Low Power Mode'
          />
        </div>
      )}
    </>
  );
};
