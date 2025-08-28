function RightSection({imageUrl,productName,productDescription,tryDemo}) {
    console.log("width",innerWidth)
    if(innerWidth>768){
        return(
        <div className="container-lg"> 
          <div className="row ">
                <div className="col-md-1"></div>
               <div className="col-md-4 p-3 p-md-5 mt-md-5 productL">
                    <h2 className="fs-3 mt-5 pt-5">{productName}</h2>
                    <p className="mt-3 " style={{lineHeight:"1.75rem"}}>{productDescription}</p>
                    <div className="mb-4 productL ">
                         {tryDemo && <a href="">{tryDemo}<i class="fa-solid fa-arrow-right"></i></a> }     
                    </div>
                    
               </div>
               <div className="col-md-6 mt-md-5">
                    <img src={imageUrl} alt="productImage" style={{width:"100%"}} />
               </div>
          </div>
       </div>
        );
    }
    else if(innerWidth<=768){
    return ( 
         <div className="container-lg"> 
          <div className="row ">
                <div className="col-md-6 mt-md-5">
                    <img src={imageUrl} alt="productImage" style={{width:"100%"}} />
               </div>
               <div className="col-md-1"></div>
               <div className="col-md-4 p-3 p-md-5 mt-md-5 productL">
                    <h2 className="fs-3 mt-5 pt-5">{productName}</h2>
                    <p className="mt-3 " style={{lineHeight:"1.75rem"}}>{productDescription}</p>
                    <div className="mb-4 productL ">
                         {tryDemo && <a href="">{tryDemo}<i class="fa-solid fa-arrow-right"></i></a> }     
                    </div>
                    
               </div>
               
          </div>
       </div>
     );
    }
}

export default RightSection;