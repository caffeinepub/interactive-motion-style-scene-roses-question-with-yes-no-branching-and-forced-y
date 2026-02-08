import { ThemeProvider } from 'next-themes';
import ValentinePage from './pages/ValentinePage';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ValentinePage />
    </ThemeProvider>
  );
}
