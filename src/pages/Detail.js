import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {FormText, Nav} from "react-bootstrap";

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
    let [tab, setTab] = useState(0);
    let [fade, setFade] = useState(0);

    useEffect(() => {
        let timer1 = setTimeout(() => setDiscount(!isDiscount), 2000);
        setFade('on');

        return () => {
           clearTimeout(timer1);
        }
    }, []);

    let {id} = useParams();
    let el = props.shoesList.find(function(el){
        return el.id == id
    });

    return (
        <div className={`container off ${fade}`}>
            {
                isDiscount
                    ? <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                    : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={`/shoes${el.id+1}.jpg`} width="100%" alt=""/>
                </div>
                <div className="col-md-6">
                    <input className="form-control" onChange={e => setNumber(e.target.value)}/>
                    <h4 className="pt-5">{el.title}</h4>
                    <p>{el.content}</p>
                    <p>{el.price.toLocaleString('en')}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => setTab(0)}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => setTab(1)}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => setTab(2)}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}></TabContent>
        </div>
    );
}
function TabContent({tab}) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setFade('on');
        }, 100);

        return () => {
            setFade('');
        }
    }, [tab]);
    return (<div className={`off ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>);
}

export default Detail;