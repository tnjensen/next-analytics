"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const GoogleAnalytic = () => {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="G-3J7TGR36H2" // Optional, can be set in .env
        debugMode={false} // Enable for debugging
      />
    </>
  );
};