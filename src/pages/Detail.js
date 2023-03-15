import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
  background : ${props => props.bg};
  color : black;
  padding : 10px;
`;

function Detail(props) {
    let [count, setCount] = useState(0);
    let [isDiscount, setDiscount] = useState(true);
    let [number, setNumber] = useState(true);

    useEffect(() => {
        let timer1 = setTimeout(() => setDiscount(!isDiscount), 2000);

        return () => {
           clearTimeout(timer1);
        }
    }, []);

    let {id} = useParams();
    let el = props.shoesList.find(function(el){
        return el.id == id
    });

    return (
        <div className="container">
            {
                isDiscount
                    ? <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                    : null
            }
            <YellowBtn bg={'yellow'} onClick={() => setCount(count+1)}>버튼</YellowBtn>
            <YellowBtn bg={'orange'}>버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src={`/shoes${el.id+1}.jpg`} width="100%" alt=""/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{el.title}</h4>
                    <p>{el.content}</p>
                    <p>{el.price.toLocaleString('en')}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;