import { Card } from "@/components/ui/card";
import React from "react";
import PoolHeader from "./pool-header";
import PoolList from "./PoolList";
const PoolCard = () => {
  return (
    <Card className="bg-[#F0F2FF] p-0 shadow-xl gap-0 rounded-2xl border overflow-hidden">
      <PoolHeader />
      <PoolList />
    </Card>
  );
};

export default PoolCard;
