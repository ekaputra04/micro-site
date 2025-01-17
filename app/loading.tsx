"use client";

import { InfinitySpin } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <>
      <div className="top-0 right-0 bottom-0 left-0 z-50 fixed flex justify-center items-center bg-black/90 w-screen h-screen">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    </>
  );
}
