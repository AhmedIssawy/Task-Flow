type FormWrapperProps = {
  title: string;
  description?: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

export default function FormWrapper({ title, description, onSubmit, children }: FormWrapperProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-card p-6 rounded-xl shadow">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        {description && <p className="">{description}</p>}
      </div>
      {children}
    </form>
  );
}
