import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export default function MyCard({array}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {array.map((data) => (
        <Card
          key={data.id}
          className="relative shadow-md hover:shadow-blue-300 hover:bg-yellow-50 active:bg-yellow-100 "
        >        
          <CardHeader className="mb-0 pb-2">
            <CardTitle>{data.name}</CardTitle>
            <CardDescription>{data.degree}</CardDescription>
          </CardHeader>
          <CardContent className="py-2">
            <p>{data.city}</p>
            <p>{data.experience} of Experience</p>
          </CardContent>
          <CardFooter className="grid grid-rows-2">
            <p>{data.hospital}</p>
            <p>{data.contact}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
