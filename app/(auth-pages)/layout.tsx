export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-start gap-12 h-screen">
      {children}
    </div>
  );
}
