import { ThemeSwitcher } from "./theme-switcher";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center gap-8 mx-auto py-16 border-t w-full text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
        <ThemeSwitcher />
      </footer>
    </>
  );
}
