"use client";
import React from "react";
import { WidgetViews } from "@/modules/widget/ui/views/widget-views";
import { use } from "react";

interface Props {
  searchParams: Promise<{
    organizationId: string;
  }>;
}

const page = ({ searchParams }: Props) => {
  const { organizationId } = use(searchParams);
  return <WidgetViews organizationId={organizationId} />;
};

export default page;
