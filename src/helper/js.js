useEffect(()=>{
    const apiCaller = async()=>{
    try{
        let  res =await axios.get("https://fakestoreapi.com/products/category/women's clothing")
        setCarouselData(res.data)
        console.log(res.data);
    }catch(e){
        console.log(e)
    }
}
apiCaller()
},[])

 // j-1 https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg
    // e-5 https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg
    // m-1 https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg
    // w-2 https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg