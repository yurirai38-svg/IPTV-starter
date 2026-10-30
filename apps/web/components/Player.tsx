'use client';

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

type PlayerProps = {
  src: string;
  title: string;
};

export function Player({ src, title }: PlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);

    return () => {
      hls.destroy();
    };
  }, [src]);

  return (
    <div style={{ maxWidth: 960, margin: '24px auto' }}>
      <h3>{title}</h3>
      <video
        ref={videoRef}
        controls
        playsInline
        style={{ width: '100%', maxHeight: 540, background: '#000' }}
      />
    </div>
  );
}
