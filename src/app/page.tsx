import About from '@/Components/About/About'
import FAQs from '@/Components/FAQs/FAQs'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import HowItWork from '@/Components/HowItWork/HowItWork'

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <HowItWork />
      <FAQs />
      <Footer />
    </>
  )
}
