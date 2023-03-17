import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setCartList, setName} from "../store";
import {useEffect} from "react";

function Cart() {
    let {cartList, user} = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        console.log(cartList);
    }, [cartList]);

    return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
            </tr>
            </thead>
            <tbody>
            {
                cartList
                ? cartList.map(el => {
                    return <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.count}</td>
                        <td><Button onClick={() => dispatch(setCartList())}>+</Button></td>
                    </tr>;
                })
                : null
            }
            </tbody>
        </Table>
    )
}

export default Cart;