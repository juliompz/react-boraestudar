import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper/modules';
import { useState, useEffect } from "react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import "./slidebar.css"

import { IoStar } from "react-icons/io5";
import logoUFPI from '../../assets/Brasao_UFPI.png'
import logoUNINASSAU from "../../assets/logo-uninassau.png"
import logoICEV from "../../assets/ICEV.png"

export default function SlideBar(){

    const [slidePerView, setSlidePerView ] = useState(4);

    
    useEffect(() => {
        
        function handleResize(){
            if(window.innerWidth < 1312 && window.innerWidth > 1031){
                setSlidePerView(3)
            }else if(window.innerWidth < 1030 && window.innerWidth > 815){
                setSlidePerView(2)
            }else if(window.innerWidth < 815){
                setSlidePerView(1)
            }else if(window.innerWidth < 1337){
                setSlidePerView(3)
            }else{
                setSlidePerView(4)
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return <>

        <div className="container-area-faculdades">
            <div className="introducao">
                <h1>Faculdades mais bem pontuadas (MEC)</h1>
                <p>Mostrando 6 perto de <strong>Teresina-PI</strong></p>
            </div>
            <div className="area-swiper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={slidePerView}
                    pagination={{ clickable: true}}
                    navigation
                    >
                    
                    <SwiperSlide>
                        <div className="faculdade-ranqueada">
                            <div className="content-faculdade-ranqueada">
                                <div className="img-e-detalhe">
                                    <div className="img-faculdade">
                                        <img src={logoUFPI} alt="Foto" />
                                    </div>
                                    <div className="area-do-detalhe">
                                        <div className="nota-max-mec">
                                            <p>Nota máxima no MEC</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="info-faculdade">
                                    <h1>Universidade Federal do Piauí</h1>
                                    <p>Av. Universitária, Bairro Ininga - THE</p>
                                    <div className="nota-mec">
                                        <div className="stars">
                                            <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                                        </div>
                                        <p>(Nota 5 no MEC)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="faculdade-ranqueada">
                            <div className="content-faculdade-ranqueada">
                                <div className="img-e-detalhe">
                                    <div className="img-faculdade">
                                        <img src={logoUNINASSAU} alt="Foto" />
                                    </div>
                                    <div className="area-do-detalhe">
                                        <div className="nota-max-mec">
                                            <p>Nota máxima no MEC</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="info-faculdade">
                                    <h1>Universidade Maurício de Nassau</h1>
                                    <p>Av. Joquei Clube, Joquei - THE</p>
                                    <div className="nota-mec">
                                        <div className="stars">
                                            <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                                        </div>
                                        <p>(Nota 5 no MEC)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="faculdade-ranqueada">
                            <div className="content-faculdade-ranqueada">
                                <div className="img-e-detalhe">
                                    <div className="img-faculdade">
                                        <img src={logoICEV} alt="Foto" />
                                    </div>
                                    <div className="area-do-detalhe">
                                        <div className="nota-max-mec">
                                            <p>Nota máxima no MEC</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="info-faculdade">
                                    <h1>ICEV</h1>
                                    <p>Av. Kennedy, Fátima - THE</p>
                                    <div className="nota-mec">
                                        <div className="stars">
                                            <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                                        </div>
                                        <p>(Nota 5 no MEC)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="faculdade-ranqueada">
                            <div className="content-faculdade-ranqueada">
                                <div className="img-e-detalhe">
                                    <div className="img-faculdade">
                                        <img src={logoUFPI} alt="Foto" />
                                    </div>
                                    <div className="area-do-detalhe">
                                        <div className="nota-max-mec">
                                            <p>Nota máxima no MEC</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="info-faculdade">
                                    <h1>Universidade Federal do Piauí</h1>
                                    <p>Av. Universitária, Bairro Ininga - THE</p>
                                    <div className="nota-mec">
                                        <div className="stars">
                                            <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                                        </div>
                                        <p>(Nota 5 no MEC)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="faculdade-ranqueada">
                            <div className="content-faculdade-ranqueada">
                                <div className="img-e-detalhe">
                                    <div className="img-faculdade">
                                        <img src={logoUFPI} alt="Foto" />
                                    </div>
                                    <div className="area-do-detalhe">
                                        <div className="nota-max-mec">
                                            <p>Nota máxima no MEC</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="info-faculdade">
                                    <h1>Universidade Federal do Piauí</h1>
                                    <p>Av. Universitária, Bairro Ininga - THE</p>
                                    <div className="nota-mec">
                                        <div className="stars">
                                            <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                                        </div>
                                        <p>(Nota 5 no MEC)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="faculdade-ranqueada">
                            <div className="content-faculdade-ranqueada">
                                <div className="img-e-detalhe">
                                    <div className="img-faculdade">
                                        <img src={logoUFPI} alt="Foto" />
                                    </div>
                                    <div className="area-do-detalhe">
                                        <div className="nota-max-mec">
                                            <p>Nota máxima no MEC</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="info-faculdade">
                                    <h1>Universidade Federal do Piauí</h1>
                                    <p>Av. Universitária, Bairro Ininga - THE</p>
                                    <div className="nota-mec">
                                        <div className="stars">
                                            <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                                        </div>
                                        <p>(Nota 5 no MEC)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>

        
    </>
}