interface StudentPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function StudentPage({ params }: StudentPageProps) {
  const { id, locale } = await params;
  
  return (
    <div>
      <h1>Student Page {id} - Locale: {locale}</h1>
    </div>
  );
}
