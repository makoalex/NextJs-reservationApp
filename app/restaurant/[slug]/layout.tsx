import Header from './components/Header';

export default function RestaurantLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Header */}
      {/* Description part */}
      <section className="flex m-auto w-2/3 start-0 -mt-11">{children}</section>
    </main>
  );
}
