import {useState} from "react";
import data from "../data";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Main(props) {
    return (
        <>
            <div className={'main-bg'}></div>

            <div className="container">
                <div className="row">
                    {
                        props.shoesList.length !== 0
                            ? props.shoesList.map(function(el, idx) {
                                return <Card el={el} idx={idx} key={idx}/>
                            })
                            :null
                    }
                </div>
            </div>
            <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then(res => {
                        let copy = [...props.shoesList, ...res.data];
                        props.setShoesList(copy);
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }}>더보기</button>
        </>
    );
}

function Card(props) {
    let navigate = useNavigate();
    let el = props.el;
    let idx = props.idx;

    return (
        <div className="col-md-4" key={el.id} onClick={() => navigate(`/detail/${el.id}`)}>
            <img src={`https://codingapple1.github.io/shop/shoes${el.id+1}.jpg`} width="80%" alt=""/>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
            <p>{el.price.toLocaleString('en')}원</p>
        </div>
    );
}

export default Main;