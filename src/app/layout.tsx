import './globals.css';

export const metadata = {
  title: 'Kwan Sing - Portfolio',
  description: 'Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
