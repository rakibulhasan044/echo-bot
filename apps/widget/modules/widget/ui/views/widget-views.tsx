"use client";

import React from "react";
import WidgetAuthScreen from "../screens/widget-auth-screen";

interface Props {
  organizationId: string;
}

export const WidgetViews = ({ organizationId }: Props) => {
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetAuthScreen />
      {/* <WidgetFooter /> */}
    </main>
  );
};
