import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app"
import Head from "next/head"
import "@app/styles/font.css"
import "@app/styles/global.css"
import "@app/styles/reset.css"

const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
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
