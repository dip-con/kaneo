import { Link } from "@tanstack/react-router";
import useProjectStore from "@/store/project";

type LogoProps = {
  className?: string;
};

// bizcorelab.com HTML/CSS logo, adapted for light/dark themes ("LAB" -> "FLOW")
export function Logo({ className = "" }: LogoProps) {
  const { setProject } = useProjectStore();

  return (
    <Link
      onClick={() => {
        setProject(undefined);
      }}
      to="/dashboard"
      className={`w-auto ${className}`}
    >
      <span className="flex items-center font-extrabold text-xl tracking-tighter select-none">
        <span className="text-zinc-900 dark:text-white">bizc</span>
        <span className="relative mx-[1px] w-[0.8em] h-[0.8em] flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border-[3px] border-zinc-900 box-border dark:border-white" />
          <span className="w-[0.25em] h-[0.25em] bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
        </span>
        <span className="text-zinc-900 dark:text-white">re</span>
        <span className="ml-1.5 text-green-400">FLOW</span>
      </span>
    </Link>
  );
}
