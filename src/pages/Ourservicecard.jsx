import { useEffect } from "react";
import Card from "../layout/Card"
// import Data from "../layout/Data"
import Dataservice from "../layout/Dataservice"
import Servicecard from "../layout/Servicecard"
import AOS from 'aos';

function Ourservicecard() {
    useEffect(() => {
        AOS.init()
    })
    return (
        <>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <div className="container my-5">
                    <div className="row">
                        <h1 className="text-center text-primary fw-bold">Our Services</h1>

                        {
                            Dataservice.map((ele) => {
                                return (
                                    <div className="col-lg-4">
                                        <Servicecard title={ele.title} para={ele.para} icon={ele.icon}></Servicecard>
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
export default Ourservicecard