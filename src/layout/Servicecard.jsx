function Servicecard(props){
    console.log(props);
    
    return(
        <div className="card mt-4">
            <i className={props.images}></i>
            <div className="card-body">
                <h3>{props.title??"dummy title"}</h3>
                <p>{props.para??"dummy para"}</p>
            </div>  
        </div>
    )

}
export default Servicecard
