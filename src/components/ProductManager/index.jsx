import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../states/slices/productSlice';

const ProductManager = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])

    // render a loading modal , 
    return null;
}

export default ProductManager