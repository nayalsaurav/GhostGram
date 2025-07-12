import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardHeader } from "./ui/card";

export const MessageCardSkeleton = () => {
  return (
    <Card className="relative w-full md:w-[45%]">
      <CardHeader>
        <Skeleton className="h-6 w-[90%] rounded" />
        <Skeleton className="h-4 w-1/3 mt-2 rounded" />
      </CardHeader>
      <div className="absolute top-2 right-2">
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </Card>
  );
};

export default MessageCardSkeleton;
