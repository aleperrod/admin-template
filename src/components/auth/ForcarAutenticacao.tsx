import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import Script from 'next/script'
import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function ForcarAutenticacao(props){
    const {carregando, usuario} = useAuth()

    function renderizarConteudo(){
        return (
            <>
                {/*A estratégia dada abaixo pelo professor, não é a recomendada pelo Next em 2022.*/}
                {/* <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")){
                                    window.location.href = "/autenticacao"
                                }
                            `
                        }}
                    />
                </Head> */}
                {/*A estratégia recomendada é:*/}
                <Script id='forca-aut-adicional'>
                    {`
                        if(!document.cookie?.includes("admin-template-cod3r-auth")){
                            window.location.href = "/autenticacao"
                        }
                    `}
                </Script>
                {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading}/>
            </div>
        )
    }
    
    if(!carregando && usuario?.email){
        return renderizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }
}