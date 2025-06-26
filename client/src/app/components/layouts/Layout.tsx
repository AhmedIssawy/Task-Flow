
// layout to handle sidebar and navbar and accepts dynamic navigation and user roles
//wraps full website

type LayoutProps = {
  sidebar?: React.ReactNode;
  navbar?: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ sidebar, navbar, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {navbar}
      <div className="flex flex-1">
        {sidebar}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
