import Header from './components/Header';

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <main>
      {/* Header */}
      <Header name={params.slug} />

      {/* Header */}
      {/* Description part */}
      <section className="flex m-auto w-2/3 start-0 -mt-11">{children}</section>
    </main>
  );
}
