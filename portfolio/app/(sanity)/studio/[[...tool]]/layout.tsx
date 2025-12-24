import type React from "react";

export const metadata = {
  title: "Sanity Studio",
  description: "Manage your content with Sanity Studio",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default layout;
