export default function ForcarAutenticacao(props){
    function renderizarConteudo(){
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return (
            <div className={`
                flex justify-center itmes-center h-screen
            `}>

            </div>
        )
    }
    
    return (

    )
}