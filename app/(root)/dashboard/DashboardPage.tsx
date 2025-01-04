"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Plus } from "lucide-react";
import LinkCard from "./LinkCard";

export default function DashboardPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-5">
        <div className="flex justify-center items-center gap-4">
          <Button className="flex items-center gap-2">
            <Plus /> <p>Create New Microsite</p>
          </Button>
          <Input placeholder="Search here..." className="w-48" />
        </div>
        <div className="flex flex-col gap-2">
          <Slider defaultValue={[2]} max={5} step={1} disabled />
          <p>Microsite Quota: 2 out of 5 this month</p>
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </>
  );
}
