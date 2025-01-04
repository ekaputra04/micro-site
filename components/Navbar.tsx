import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { EnvVarWarning } from "./env-var-warning";
import HeaderAuth from "@/components/header-auth";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center w-full h-16">
        <div className="flex justify-between items-center px-5 p-3 w-full max-w-5xl text-sm">
          <div className="flex items-center gap-5 font-semibold">
            <Link href={"/"}>Micro Site</Link>
          </div>
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
        </div>
      </nav>
      <div className="bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px] w-full" />
    </>
  );
}
