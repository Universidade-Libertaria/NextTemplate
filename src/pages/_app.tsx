import '../styles/Global.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { PainelContent } from '../components/painel/PainelContent'


export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
    <Header />
    <PainelContent />
    <Component {...pageProps} />
    <PainelContent />
    <Footer/>
  </>
  ) 
}
