import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Full-Stack Developer specializing in MERN Stack, Next.js, React, and modern web technologies. Building scalable solutions with JavaScript, Node.js, MongoDB, Firebase, and Tailwind CSS." />
        <meta name="keywords" content="Full-Stack Developer, MERN Stack, Next.js, React, JavaScript, Node.js, MongoDB, Firebase, Tailwind CSS, Web Development" />
        <meta name="author" content="Tushar Mamun" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-black text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}