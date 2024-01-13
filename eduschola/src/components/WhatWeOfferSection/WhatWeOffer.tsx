import React from "react";
import Link from "next/link";
import Image from "next/image";

const whatWeOffer =()=> {
    return ( 
        <section className="flex flex-col mt-10 w-full items-center justify-center ">
            <h1 className="text-cta text-xl my-10 font-Convergence lg:text-4xl"> What we offer</h1>
            <section className="flex flex-col w-full items-center justify-center">
                <section className="flex flex-col w-full relative items-center justify-center my-4 lg:flex lg:flex-row lg:w-[90%]">
                    <section className="flex relative w-[90%] h-fit rounded-xl mb-2 lg:order-1 lg:w-[50%]">
                        <Image
                            src="/wwo1.png"
                            alt="image depicting comprehensive student insights"
                            width={677}
                            height={303}
                            style={{ objectFit: "fill", width: "100%", height: "100%" }}
                        />
                    </section>                    
                    <section className="flex flex-col srelative w-[90%] h-fit rounded-xl mb-2 mb-2 text-white bg-black lg:order-2 lg:w-[40%] lg:ml-10 lg:text-2xl text-justify">
                        <span className="font-bold">Comprehensive Student Insights</span>
                        <article>                            
                            Edushola enhance students management by equipping administrators 
                            and teachers with a holistic view of student progress. manage 
                            personal details, academic records, attendance and discipline 
                            records in one centralized system, fostering a comprehensive 
                            understanding of each student’s journey. 
                        </article>
                    </section>
                </section>

                <section className="flex flex-col w-full relative items-center justify-center my-4 lg:flex lg:flex-row lg:w-[90%]">
                    <section className="flex relative w-[90%] h-fit rounded-xl mb-2 lg:order-2 lg:w-[50%]">
                        <Image
                            src="/wwo2.png"
                            alt="image depicting Streamlined Course Administration"
                            width={677}
                            height={303}
                            style={{ objectFit: "fill", width: "100%", height: "100%" }}
                        />
                    </section>                    
                    <section className="flex flex-col srelative w-[90%] h-fit rounded-xl mb-2 mb-2 text-white bg-black lg:order-1 lg:w-[40%] lg:mr-10 lg:text-2xl text-justify">
                        <span className="font-bold">Streamlined Course Administration</span>
                        <article>                            
                            With subject management, Edushola simplifies course administration. 
                            Administrators and teachers can effortlessly create, edit 
                            and manage courses. This includes scheduling, assignment 
                            distribution, and assessments, enabling educators to focus 
                            on delivering a rich learning experience.
                        </article>
                    </section>
                </section>

                <section className="flex flex-col w-full relative items-center justify-center my-4 lg:flex lg:flex-row lg:w-[90%]">
                    <section className="flex relative w-[90%] h-fit rounded-xl mb-2 lg:order-1 lg:w-[50%]">
                        <Image
                            src="/wwo3.png"
                            alt="image depicting Insightful Grading and Feedback"
                            width={677}
                            height={303}
                            style={{ objectFit: "fill", width: "100%", height: "100%" }}
                        />
                    </section>                    
                    <section className="flex flex-col srelative w-[90%] h-fit rounded-xl mb-2 mb-2 text-white bg-black lg:order-2 lg:w-[40%] lg:ml-10 lg:text-2xl text-justify">
                        <span className="font-bold">Insightful Grading and Feedback</span>
                        <article>                            
                        Eduschola’s grade-sheet feature facilities effective grading and feedback processes. 
                        Teachers can effortlessly record and manage student grades, calculate final  grades 
                        using diverse grading scales, and provide valuable feedback to both students and 
                        parents, fostering a collaborative learning environment. 
                        </article>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default whatWeOffer;