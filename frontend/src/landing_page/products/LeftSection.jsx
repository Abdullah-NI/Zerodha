function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
console.log(tryDemo.icon)
    return (  
       <div className="container-lg">
          <div className="row">
               <div className="col-md-7 p-5 imageStyle">
                    <img src={imageUrl}  alt="productImage" />
               </div>
               <div className="col-md-5 col-lg-4 p-3 p-md-5 mt-md-5 productL">
                    <h2 className="fs-3">{productName}</h2>
                    <p className="mt-3 " style={{lineHeight:"1.75rem"}}>{productDescription}</p>
                    <div className="mb-4 productL ">
                         {tryDemo && <a href="">{tryDemo}<i class="fa-solid fa-arrow-right"></i></a> }
                         {learnMore && <a className="ms-4" href="">{learnMore}<i class="fa-solid fa-arrow-right"></i></a> }
                         
                    </div>
                    <div >
                         <a href="">
                              <img src="/media/images/googlePlayBadge.svg"  alt="" />
                         </a>
                         <a href="">
                              <img className="ms-4" src="/media/images/appstoreBadge.svg"  alt="" />
                         </a>
                    </div>
               </div>
          </div>
       </div>
     );
}

export default LeftSection;