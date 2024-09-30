import Image, { StaticImageData }  from "next/image";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import image1 from "/public/images/brickell.jpg"
import image2 from "/public/images/brickell2.jpg"
import image3 from "/public/images/miami.jpg"


export function BentoGridSection() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

interface SkeletonProps {
  photo: StaticImageData;
}

const Skeleton: React.FC<SkeletonProps> = ({ photo }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src={photo} alt="picture of Miami" />
  </div>
);

const items = [
  {
    title: <h1 className="text-4xl">What is Miami50</h1>,
    description: <p className="text-lg">Miami50 is a premier startup event centered around one thing - founder-investor engagement. No panels or speeches, just curated discussions between amazing investors and phenomenal founders. Historically, the Basel answer for the tech and innovation ecosystem has been to host a series of panels and conversations that speak about the growing ecosystem but nothing has been actively designed to get investors connected with founders in a deliberate way to cultivate high quality conversations that raises the probability to lead to funding.</p>,
    className: "md:col-span-2",
  },
  {
    title: "Investors",
    description: "Investor groups or unofficial groups of angels, of no more than 5 individuals each, established to look at deals together without having a pre-established syndicates",
    header: <Skeleton photo={image1} />,
    className: "md:col-span-1",
  },
  {
    title: "Resource Partners",
    description: "Organizations and institutions that provide direct financial, administrative, or operational support to startups",
    header: <Skeleton photo={image2} />,
    className: "md:col-span-1",
  },
  {
    title: "Founders",
    description:
      "Pre-selected founders from across the state looking to kick-off or close their funding round.",
    header: <Skeleton photo={image3} />,
    className: "md:col-span-2",
  },
];
