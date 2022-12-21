'use client';

import React from 'react';
import ReactPlayer from 'react-player';

export const Splash = () => {
  return (
    <div id="video-player-wrapper">
      <ReactPlayer
        height="100%"
        loop
        muted
        playing
        style={{ objectFit: 'cover' }}
        url="https://uploads-ssl.webflow.com/60c8b883026e8472e92ab039/6323abcbf0aabc4e1fe8857f_devonta-video-transcode.mp4"
        width="100%"
      />
      <style jsx>{`
        #video-player-wrapper {
          height: calc(100vh - 158px);
        }
        div :global(video) {
          object-fit: cover;
        }
      `}</style>
      <div className="absolute bg-green-900 grid grid-cols-1 md:grid-cols-2 bg-opacity-75 p-4 w-full bottom-0">
        <p className="text-8xl text-center text-green-50 w-full">Pepe Flyers 1.0</p>
        <div className="flex items-center justify-center">
          <button className="bg-green-600 text-green-100 h-min w-min px-24 py-4 self-center uppercase">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
