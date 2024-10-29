import { buttonVariants } from "@/components/ui/button";

export default function LinkButton({ text, variant }) {
  return (
    <Link className={buttonVariants({ variant: { variant } })}>{text}</Link>
  );
}
