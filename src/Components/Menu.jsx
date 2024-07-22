function Menu(props) {
    return <div className="flex ">
      <img className="sm:w-[150px] w-[200px] h-[150px] sm:h-[120px] rounded-[8px] " src={props.image} alt="" />
      <div className="ml-[10px]" >
      <p className="font-bold text-[20px]">{props.foodName} </p>
      <p className="font-semibold">{props.description} </p>
      <p className="font-bold sm:mt-[10px] mt-[30px]">${props.price} </p>
      <button className="w-[100px] mt-[10px] sm:mt-[0px] h-[30px] bg-orange-500 font-semibold rounded-[8px]"> Buy Now </button>
      </div>

    </div>
    
  }
  export default Menu