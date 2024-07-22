import Menu from "./Menu"
function Body (){
    return <div className="">
        <div className="sm:grid sm:grid-cols-[300px_300px] ml-[20px]  sm:gap-[30px] mb-[25px] mt-[20px] justify-center">

        <div className="mb-[20px] sm:mb-[0px]">
            <Menu foodName="Kenyan Food" description="Free Delivery" price="30"  image="https://img.freepik.com/free-photo/panini-sandwich-with-ham-cheese-tomato-arugula-wooden-table_123827-27059.jpg?t=st=1721644377~exp=1721647977~hmac=11dbc2bad3048764b6a698a0ebf2889267dca9c38a53ee3ded03407a014e65b9&w=900"/>
        </div>

        <div className="mb-[20px] sm:mb-[0px]">
            <Menu foodName="Mexican Food" description="Paid Delivery" price="100"  image="https://img.freepik.com/free-photo/fast-fashion-concept-with-materials-textiles-disguised-as-sandwich_23-2150771209.jpg?t=st=1721644385~exp=1721647985~hmac=295198c05768f729590ba67c96dc4896c7d429021d4f30d6d26c27ba31f2e191&w=900"/>
        </div>

        <div className="mb-[20px] sm:mb-[0px]">
            <Menu foodName="Mali Food" description="Free Shipping" price="10"  image="https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?t=st=1721644365~exp=1721647965~hmac=322fba1dc8ca42baefbcfe27fe8c3faecd12b22963bd8d1896b1c7734bf8fee1&w=900"/>
        </div>
        <div className="mb-[20px] sm:mb-[0px]">
            <Menu foodName="Arab Food" description="Paid Delivery" price="150"  image="https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?t=st=1721644365~exp=1721647965~hmac=322fba1dc8ca42baefbcfe27fe8c3faecd12b22963bd8d1896b1c7734bf8fee1&w=900"/>
        </div>
        <div className="mb-[20px] sm:mb-[0px]">
            <Menu foodName="Spanish Food" description="Free Delivery" price="60"  image="https://img.freepik.com/free-photo/vegetable-salad-with-tomatoes-black-board_114579-3429.jpg?t=st=1721644346~exp=1721647946~hmac=5eea97319886044b04a9996d536f7d6929b4e1770aa912a7640cc01f9cc21a5f&w=360"/>
        </div>
        <div className=" sm:mb-[0px]">
            <Menu foodName="Italian Food" description="Paid Delivery" price="90"  image="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1721643787~exp=1721647387~hmac=4b22db2c498bc1e83847756fbf98adc00646fb041703f0fa1707e2f007aadc19&w=740"/>
        </div>
        </div>
    </div>
}
export default Body