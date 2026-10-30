import './globals.css';

export const metadata = {
  title: 'IPTV Starter',
  description: 'Starter IPTV project with Next.js + NestJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
