function Card(props) {
    console.log(props);

    return (
        <div className="card mt-4 position-relative " style={{ border: "none" }}>
            <img src={props.images} />
            <div className="position-absolute top-0 start-0 ">
                <p>
                    <ul className="list-unstyled">
                        <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                </p>
            </div>
            <div className="card-body">
                <h3>{props.title ?? "dummy title"}</h3>
                <p>{props.para ?? "dummy para"}</p>
            </div>
        </div>
    )

}
export default Card