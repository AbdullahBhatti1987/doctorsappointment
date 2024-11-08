// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function SelectOption({ array, placeholder, onChange, datavalue, datatitle }) {
//   return (
//     <Select onValueChange={onChange} >
//       <SelectTrigger className="w-full h-16">
//         <SelectValue placeholder={placeholder} />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value={"All"}>All</SelectItem>
//         {array.map((data) => (
//           <SelectItem key={data.id} value={data[datavalue]}>
//             {data[datatitle]}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// }

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectOption({ array, placeholder, onChange, value }) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full h-16">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"All"}>All</SelectItem>
        {Array.from(new Set(array.map((data) => data[value]))) 
          .map((uniqueValue, index) => (
            <SelectItem key={index} value={uniqueValue}>
              {uniqueValue}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
