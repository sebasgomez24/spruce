import React from 'react';

// Define the type for a single video
export type VideoData = {
  src: string;
  poster: string;
  title: string;
};

// Define the props type
interface VideoProps {
  videos: VideoData[];
}

const Video: React.FC<VideoProps> = ({ videos }) => {
  return (
    <section id="video" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900">Videos</h2>
        <div className="space-y-8">
          {videos.map((video, idx) => (
            <div key={idx} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
              <video
                src={video.src}
                controls
                className="w-full h-full object-cover"
                poster={video.poster}
              >
                Your browser does not support the video tag.
              </video>
              <div className="text-center mt-2 text-gray-700">{video.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video; 