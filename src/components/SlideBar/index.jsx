import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import "./slidebar.css"

import { IoStar } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logoUFPI from '../../assets/Brasao_UFPI.png'


export default function SlideBar(){
    return <>

        <div className="container-area-faculdades">
            <div className="introducao">
                <h1>Faculdades mais bem pontuadas (MEC)</h1>
                <p>Mostrando 12 perto de <strong>Teresina-PI</strong></p>
            </div>
            <div className="area-swiper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    pagination={{ clickable: true}}
                    navigation
                    >
                    <div className="dentro-do-swiper">
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
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
                                    <p><IoStar /> <IoStar /><IoStar /><IoStar /><IoStar /></p>
                                    <p>(Nota 5 no MEC)</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </div>
                    

                </Swiper>
            </div>
        </div>

        
    </>
}