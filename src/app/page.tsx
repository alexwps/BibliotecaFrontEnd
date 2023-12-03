import Image from 'next/image'

export default function Home() {
  return (
      <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-bl from-orange-900 via-orange-400 to-orange-900
      text-white`}>
        <h2><strong>PAGINA INICIAL - TRABALHO BIBLIOTECAS</strong></h2>
      </div>
  )
}
