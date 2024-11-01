import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectOption({array, placeholder, onChange, all}) {
  return (
    <Select>
      <SelectTrigger className="w-full h-16">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value={"All"}>
           All
          </SelectItem>
        {array.map((data) => (
          <SelectItem key={data.id} value={data.name} onChange={onChange}>
            {data.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
