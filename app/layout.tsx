import '../styles/globals.css';

export const metadata = {
  title: 'Connexta Stable',
  description: 'Social network',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
