import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addCartCount, deleteCartList, setAge, setCartList, setName} from "../store/store";
import {memo, useEffect, useState} from "react";

function Cart() {
    let {cartList, user} = useSelector(state => state);
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log(cartList);
    }, [cartList]);

    return (
        <div>
            <Child/>
            <Button onClick={() => setCount(count+1)}>gg</Button>
            <h6>{user.name} {user.age}의 장바구니</h6>

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
                                <td>
                                    <Button className="btn btn-primary" onClick={() => dispatch(addCartCount(el.id))}>+</Button>
                                    <Button className="btn btn-danger" onClick={() => dispatch(deleteCartList(el.id))}>-</Button>
                                </td>
                            </tr>;
                        })
                        : null
                }
                </tbody>
            </Table>
        </div>
    );
}

const Child = memo(function () {
    console.log("재랜더링")
    return (
        <>자식임</>
    )
})

export default Cart;