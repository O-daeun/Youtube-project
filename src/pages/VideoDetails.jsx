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
      <section className="flex flex-col xl:flex-row gap-4">
        <article className="basis-2/3">
          <iframe
            id={video.id}
            className="my-4"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.snippet.title}
          />
          <div className="px-10">
            <h2 className="my-4 text-xl font-bold">{video.snippet.title}</h2>
            <ChannelTitle
              id={video.snippet.channelId}
              name={video.snippet.channelTitle}
            />
            <p className="my-10 whitespace-pre-wrap">
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
