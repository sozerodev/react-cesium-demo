import React, { useEffect, useRef } from "react";
import { Viewer } from "cesium";
import Test from "@engines/Test";

export default function Main() {
  Test(); // Test

  const viewerRef = useRef();

  useEffect(() => {
    if (viewerRef.current) {
      new Viewer(viewerRef.current);
    }
    return () => {};
  }, [viewerRef]);

  return <div id="map" ref={viewerRef} />;
}
