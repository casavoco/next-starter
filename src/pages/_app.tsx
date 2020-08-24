import { AppProps } from "next/app"
import Head from "next/head"
import "styles/font.css"
import "styles/global.css"
import "styles/reset.css"

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>next-starter</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default CustomApp
