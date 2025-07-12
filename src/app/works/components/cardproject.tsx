"use client";

// components/ProjectCardCard.tsx

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  img: string;
  tools: string[];
  desc: string;
  features: string[];
  images: string[];
};

export default function ProjectCardCard({
  id,
  title,
  img,
  tools,
  desc,
  features,
  images,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" bg-white p-4 rounded-lg shadow hover:shadow-lg transition w-[250px]">
          <Image
            src={img}
            alt={title}
            width={400}
            height={200}
            className="w-full h-32 object-cover rounded mb-2"
          />
          <h3 className="font-semibold text-zinc-800">{title}</h3>
          <div className="flex flex-wrap gap-1 mt-2">
            {tools.map((tool) => (
              <Badge key={tool} className="bg-zinc-800 text-white">
                {tool}
              </Badge>
            ))}
          </div>
          <div className="pt-3 ">
            <Button className="p-3 cursor-pointer container font-bold text-lg bg-zinc-900 hover:bg-zinc-400 content-center items-center">
              MORE INFO
            </Button>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-zinc-950 text-white border-zinc-700">
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-zinc-400">{desc}</p>

          <div>
            <h3 className="font-semibold mb-1">Features:</h3>
            <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
              {features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Preview</h4>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  width={200}
                  height={150}
                  className="rounded shadow border border-zinc-800"
                />
              ))}
            </div>
            <h4 className="font-semibold mt-3 mb-1">Tools & Tech</h4>
            <div className="flex flex-wrap gap-1 mt-2 ">
              {tools.map((tool) => (
                <Badge key={tool} className="bg-zinc-800 text-white text-lg hover:bg-zinc-600">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// type ProjectcardProp = {
//   title: string;
//   img: string;
//   tools: string[];
// };
// export default function ProjectCardCard({
//   title,
//   img,
//   tools,
// }: ProjectcardProp) {
//   return (
//     <Card>
//       <CardHeader className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
//         <CardTitle className="card-title uppercase justify-center">
//           {title}
//         </CardTitle>
//         <CardDescription>Card Description</CardDescription>
//         <CardAction>{img}</CardAction>
//       </CardHeader>
//       <CardContent>
//         <p>Card Content</p>
//       </CardContent>
//       <CardFooter>{tools}</CardFooter>
//     </Card>
//   );
// }

// // import Image from "next/image";

// type ProjectcardProp = {
//   title: string;
//   img: string;
//   tools: string[];
// };
// export default function ProjectCardCard({ title, img, tools }: ProjectcardProp) {
//   return (
//     <div className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
//       <figure>{img}</figure>
//       <div className="card-body bg-zinc-800">
//         <h2 className="card-title uppercase justify-center">{title}</h2>
//         <div className="card-actions justify-center">
//           <div className="badge badge-outline">{tools}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
