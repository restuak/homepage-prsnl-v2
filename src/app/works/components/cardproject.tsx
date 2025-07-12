"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectcardProp = {
  title: string;
  img: string;
  tools: string[];
};
export default function ProjectCardCard({
  title,
  img,
  tools,
}: ProjectcardProp) {
  return (
    <Card>
      <CardHeader className="bg-zinc-500 mt-2 items-center card w-70 md:w-95 shadow-sm">
        <CardTitle className="card-title uppercase justify-center">
          {title}
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>{img}</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>{tools}</CardFooter>
    </Card>
  );
}

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
