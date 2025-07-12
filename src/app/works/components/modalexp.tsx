// "use client";

// import Image from "next/image";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// type ProjectDialogProps = {
//   id: string;
//   title: string;
//   img: string;
//   tools: string[];
//   desc: string;
//   features: string[];
//   images: string[];
// };

// export default function ModalExp({
//   id,
//   title,
//   img,
//   tools,
//   desc,
//   features,
//   images,
// }: ProjectDialogProps) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         {trigger ?? <Button variant="outline">View Project</Button>}
//       </DialogTrigger>

//       <DialogContent className="max-w-4xl max-h-full0vh] bg-zinc-950 text-white border-zinc-700 overflow-y-auto ">
//         <div className="p-6 space-y-4">
//           <h2 className="text-2xl font-bold">{title}</h2>
//           <p className="text-sm text-zinc-400">{desc}</p>

//           <div>
//             <h3 className="font-semibold mb-1">Features I Worked On:</h3>
//             <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
//               {features.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-1">Screenshots</h4>
//             <div className="flex gap-2 overflow-x-auto pb-2">
//               {img.map((src, i) => (
//                 <Image
//                   key={i}
//                   src={src}
//                   alt={`Screenshot ${i + 1}`}
//                   width={200}
//                   height={150}
//                   className="rounded shadow border border-zinc-800"
//                 />
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-1">Language and Tools</h4>
//             <div className="flex gap-2 flex-wrap">
//               {tools.map((tool) => (
//                 <Badge
//                   key={tool}
//                   className="bg-zinc-800 text-white border border-zinc-600"
//                 >
//                   {tool}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
