import { useState, useEffect } from "react";
import { Button } from "./NavBar";

const blank= "../assets/blank.svg";


export function Card({ imgSrc, name }) {
    const [img, setImg] = useState();
    useEffect(()=>{
        imgSrc?setImg(imgSrc):setImg(blank)



    })
    return <>
        <div className="card">
            <img src={img} className="cardImg"></img>
            <div className="cardDetails">
                {name}
            </div>
        </div>
    </>
}
export default function Carousel({ children, title ,crName}) {
    const [TitleName, setTitleName] = useState(null);
    const [carasouleName, setCarasouleName] = useState("");

    useEffect(() => {
        if (title) {
            setTitleName(<div className="titleName">{title}</div>);
        };
        setCarasouleName(crName + " Carasoule")
    }, [title, carasouleName, crName]);

    return (
        <div className={carasouleName}>
            <div className="title">
                {TitleName}
            <Button btName={"prev"} />
            <Button btName={"next"}/>
            </div>
            <div className="Panel">{children}</div>
        </div>
    );
}
