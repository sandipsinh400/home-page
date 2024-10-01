import { useEffect } from "react";
import Card from "../layout/Card"
import Data from "../layout/Data"
import AOS from 'aos';

function Cardabout() {
    useEffect(() => {
        AOS.init()
    })
    return (
        <>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="container my-5 team">
                    <div className="row">
                        <h1 className="text-center text-primary fw-bold">Our Team</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima <br /> neque tempora reiciendis.</p>
                        {
                            Data.map((ele) => {
                                return (
                                    <div className="col-lg-3 ">
                                        <Card title={ele.title} para={ele.para} images={ele.images}></Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cardabout