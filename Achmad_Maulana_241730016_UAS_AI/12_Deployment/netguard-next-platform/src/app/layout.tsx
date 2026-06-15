import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NetGuard AI Dashboard',
  description: 'Predictive Network Failure and Anomaly Monitoring by Achmad Maulana',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
