import Button from '@material-ui/core/Button';

import { CartItemType } from 'src/pages/customoutfit';
import { ItemWrapper} from 'src/item/item.styles';

type props = {
    item: CartItemType;
    handleAddtoCart: (clickedItem: CartItemType) => void;
}

const Gloveitem: React.FC<props> = ({ item,handleAddtoCart }) => (


    <ItemWrapper onClick={()=> handleAddtoCart(item)} >
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            {/* <div>
                <input type="radio" value="Male" name="gender" /> Small
                <input type="radio" value="Female" name="gender" /> Large
                <input type="radio" value="Other" name="gender" /> XL
            </div> */}
        </div>
        {/* <Button onClick={() => handleAddtoCart(item)} >SELECT</Button> */}
        {/* <Button onClick={() => handleProductQuickView(item)} >Add to Cart</Button> */}
    </ItemWrapper>
)

export default Gloveitem;