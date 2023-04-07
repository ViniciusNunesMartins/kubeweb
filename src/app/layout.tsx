import './globals.css'
import { ReactNode } from 'react';
import { firebaseApp } from "../firebase";
import { FirebaseAppProvider } from 'reactfire';
import { Footer } from '@/components/footer';
import Nav from '@/components/nav';

export const metadata = {
	title: 'KubeWeb',
	description: 'KubeWeb is a web app for managing Kubernetes clusters',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<FirebaseAppProvider firebaseApp={firebaseApp}>
					<Nav />
					{children}
					<Footer />
				</FirebaseAppProvider>
			</body>
		</html>
	)
}
