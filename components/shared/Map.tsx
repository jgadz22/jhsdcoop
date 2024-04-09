"use client";
import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const place = { lng: 141.14136485051762, lat: 39.70220630797061 };
  const [zoom] = useState(14);

  maptilersdk.config.apiKey = process.env.mapApiKey
    ? process.env.mapApiKey
    : "No API";
  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [place.lng, place.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([141.14136485051762, 39.70220630797061])
      .addTo(map.current!);
  }, [process.env.mapApiKey, place.lng, place.lat, zoom]);

  return (
    <div className="relative w-full h-[525px] md:h-[420px] lg:h-[375px]">
      <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  );
};

export default Map;
