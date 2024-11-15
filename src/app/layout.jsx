import "@fontsource/work-sans"; // Defaults to weight 400
import "./globals.css";

export const metadata = {
    title: "Landing page - Criação de Sites Modernos",
    description: "Transforme sua presença online com sites modernos, funcionais e otimizados para destacar seu negócio digital.",
    keywords: ["criação de sites", "sites modernos", "landing page", "desenvolvimento web", "SEO", "Rafael Rizzo dev"],
    author: "Rafael Rizzo Breschi",
};

// Créditos ao Design da página
// Apenas apliquei para web usando Nextjs
// https://www.figma.com/community/file/1127302394641561751

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                {/* Tag viewport para responsividade */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Tags Open Graph para redes sociais */}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="pt_BR" />

                {/* Adicione favicon */}
                <link rel="icon" href="favicon.ico" />
            </head>
            <body className={`antialiased`}>
                {children}
            </body>
        </html>
    );
}
