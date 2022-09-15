import React from "react";
import Navbar from "../Navbar";
import './index.css'

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className={'container'}>
                <div className={'study box'}>
                    <img src={"school.png"}/>
                    <h2>
                        Here is a text for my studies. Here is a text for my studies.
                        Here is a text for my studies. Here is a text for my studies. Here is a text for my studies.
                    </h2>
                </div>
                <div className={'experience box'}>
                    <img src={"buildings.png"}/>
                    <h2>
                        Here is a text for my studies. Here is a text for my studies.
                        Here is a text for my studies. Here is a text for my studies. Here is a text for my studies.
                    </h2>
                </div>
                <div className={'skills box'}>
                    <img src={"programming.png"}/>
                    <h2>
                        Here is a text for my studies. Here is a text for my studies.
                        Here is a text for my studies. Here is a text for my studies. Here is a text for my studies.
                    </h2>
                </div>
            </div>

        </div>
    )
}
export default About