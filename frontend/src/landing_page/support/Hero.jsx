function Hero() {
    return (

        <div style={{backgroundColor:"#F9F6F3"}}>
            <div className="container" >
            <div className="p-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", backgroundColor: "" }}>
                <a href="" className="fs-1  mt-5" style={{ textDecoration: "none", color: "#424242" }}>Support Portal</a>
                <button className="btn btn-primary px-5 me-3 mt-5 " style={{ backgroundColor: "#387ed1" }}>My Ticket</button>
            </div>
            <div className="row">
                <div class="input-group mb-3 mx-auto " >
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1" style={{lineHeight:"2.5rem"}}><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></span>
                </div>
                <input type="text" class="form-control" placeholder="Eg: How do I open my account, How do i activate F&O..." aria-label="Username" aria-describedby="basic-addon1" style={{lineHeight:"2.5rem"}}/>
            </div>
            </div>
        </div >
        </div>
    );
}

export default Hero;