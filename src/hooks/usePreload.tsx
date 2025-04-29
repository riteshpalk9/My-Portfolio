
import { useEffect } from 'react';

const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

const preloadVideo = (src: string) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.oncanplaythrough = resolve;
    video.onerror = reject;
    video.src = src;
    video.load();
  });
};

export const usePreload = (path: string) => {
  useEffect(() => {
    const preloadPage = async () => {
      // Add preloading for specific routes
      if (path === '/') {
        try {
          await Promise.all([
            preloadImage('/home_img.png'),
            preloadVideo('/home_video.mp4')
          ]);
        } catch (error) {
          console.error('Failed to preload assets:', error);
        }
      }
      // Add more route-specific preloading here if needed
    };

    preloadPage();
  }, [path]);
};
