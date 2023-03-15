import {useState} from "react";
import data from "../data";
import {useNavigate} from "react-router-dom";

function Main(props) {
    return (
        <>
        <div className={'main-bg'}></div>

        <div className="container">
            <div className="row">
                {
                    props.shoesList.length !== 0
                        ? props.shoesList.map(function(el, idx) {
                            return <Card el={el} idx={idx}/>
                        })
                        :null
                }
            </div>
        </div>
        </>
    );
}

function Card(props) {
    let navigate = useNavigate();
    let el = props.el;
    let idx = props.idx;

    return (
        <div className="col-md-4" key={el.id} onClick={() => navigate(`/detail/${el.id}`)}>
            <img src={`/shoes${idx+1}.jpg`} width="80%" alt=""/>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
            <p>{el.price.toLocaleString('en')}원</p>
        </div>
    );
}

export default Main;