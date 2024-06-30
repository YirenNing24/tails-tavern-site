import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Coming Soon!</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.center}>
					<Image
						className={styles.logo}
						src="/logo/tails_tavern_icon1.png"
						alt="Next.js Logo"
						width={360}
						height={360}
						priority
					/>
				</div>
				<div className={styles.comingSoon}>
					<h1>Coming Soon!</h1>
				</div>
			</main>
		</>
	);
}
