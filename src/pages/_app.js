import AppShell from '@/components/layouts/AppShell/AppShell';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
            <AppShell>
                <Component {...pageProps} />
            </AppShell>
);}
