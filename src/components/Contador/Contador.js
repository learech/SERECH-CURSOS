import "./styles.css"

const Contador = ({setItem , items, stock, precio}) => {

    const sumar = () => {
        if(items < stock) {
            setItem(items + 1)
        }
    }
    const restar = () => {
        if(items > 0){
            setItem(items - 1)
        }
        return;
    }

    return (
        <>
            <div className="acomodadoContador">            
                <div>
                    <button className="contador" onClick={restar}>-</button>
                    <span className="spanDetalle">{items}</span>
                    <button className="contador" onClick={sumar}>+</button>                
                </div>
                <div className="precio">
                    <span className="spanTotal">
                        <b>Total: ${items * precio}</b>                
                    </span>        
                </div>
            </div>
        </>
    )
    

}

export default Contador

