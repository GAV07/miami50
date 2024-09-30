import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "./cards-demo-3";

export function TimelineDemo() {
  const data = [
    {
      title: "October",
      content: (
        <div>
            <Card className="bg-black-800">
                <div className="text relative z-50">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Applications Open
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Founders can begin applying to the program and have their work reviewed by participating investors.
                    </p>
                </div>
            </Card>
        </div>
      ),
    },
    {
      title: "November 2nd",
      content: (
        <div>
            <Card className="bg-black-800">
                <div className="text relative z-50">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Selections Closed
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                        Founders are selected and notified of their acceptance into the program.
                    </p>
                </div>
            </Card>
        </div>
      ),
    },
    {
        title: "December",
        content: (
            <div>
                <Card className="bg-black-800">
                    <div className="text relative z-50">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                            Event Day
                        </h1>
                        <p className="font-normal text-base text-gray-50 relative my-4">
                            Founders and investors meet in person to discuss the future of their companies.
                        </p>
                    </div>
                </Card>
            </div>
          ),
    },
  ];
  return (
    <div className=" w-full">
        {/* <div className="absoulte w-[100%] h-full bg-black-800 z-1" /> */}
      <Timeline data={data} />
    </div>
  );
}
