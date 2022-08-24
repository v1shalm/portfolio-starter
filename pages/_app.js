import Navigation from "../components/Navigation";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider attribute="class" enableSystem={false}>
				<Navigation />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
