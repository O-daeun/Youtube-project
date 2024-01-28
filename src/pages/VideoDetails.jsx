import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "react-query";
import VideoSideList from "../components/VideoSideList";
import { useLocation } from "react-router-dom";
import ChannelTitle from "../components/ChannelTitle";

export default function VideoDetails() {
  const {
    state: { videoId },
  } = useLocation();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: video,
  } = useQuery(["detail", videoId], () => youtube.detail(videoId), {
    staleTime: 1000 * 60 * 1,
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러</p>;
  if (video)
    return (
      <section className="flex flex-col xl:flex-row gap-4 my-4">
        <article className="basis-2/3">
          <iframe
            id={video.id}
            width="100%"
            className="h-[200px] sm:h-[400px] md:h-[640px]"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
            title={video.snippet.title}
          />
          <div className="px-4">
            <h2 className="my-4 text-xl font-bold">{video.snippet.title}</h2>
            <ChannelTitle
              id={video.snippet.channelId}
              name={video.snippet.channelTitle}
            />
            <p className="py-4 my-4 whitespace-pre-wrap border-y-2 border-slate-700">
              {video.snippet.description}
            </p>
          </div>
        </article>
        <article className="basis-1/3">
          <VideoSideList keyword={video.snippet.channelTitle} />
        </article>
      </section>
    );
}
