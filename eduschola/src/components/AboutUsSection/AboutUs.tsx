import React from "react";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="flex flex-col my-10 w-full relative items-center justify-center lg:flex-row">
            <section className="flex relative items-center justify-center w-full my-4 lg:w-[40%] lg:mr-8">
                <section className="flex relative w-[80%] items-center justify-center lg:w-full">
                    <Image
                        src="/abtUs.png"
                        alt="image elipse background for About Us header"
                        width={500}
                        height={371}
                        style={{ objectFit: "fill", width: "100%", height: "100%" }}
                    />
                </section>
                <section className="flex flex-col text-cta absolute items-center justify-center">
                    <h1 className="text-4xl font-semibold">About Us </h1>
                    <h3 className="text-xs">Why Choose EduSchola?</h3>
                </section>
            </section>
            
            <section className="flex w-full items-center justify-center mb-8 relative lg-w-[50%]  lg:ml-8">
                <section className="flex relative w-full items-center justify-center opacity-50">
                    <Image
                        src="/abtUsbckgrnd.png"
                        alt="image elipse background for About Us header"
                        width={845}
                        height={855}
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                    />
                </section>
                <section className="flex flex-col items-left absolute justify-center bg-formbg text-left text-sm text-white rounded-tr-3xl rounded-bl-3xl rounded-br-md rounded-tl-md w-[90%] p-4 lg:w-[90%] lg:text-4xl lg:p-8 lg-p-8">

                    <h2 className="font-semibold text-sm lg:text-4xl lg:mb-8"><span className="font-bold text-cta">EduSchola &gt;</span> Where Education Flourishes, Unburdened</h2>

                    <h3 className="font-bold mb-2 lg:my-8">Imagine a school:</h3>
                    <ul className="list-disc list-outside text-white ml-2">
                        <li className="list-item">Where teachers spend less time on paperwork and more time inspiring young minds.</li>
                        <li className="list-item">Where schedules run smoothly, resources are optimized, and everyone has the tools 
                            they need to thrive.</li>
                        <li className="list-item">Where data empowers strategic decisions, leading to personalized learning and 
                            academic success.</li>
                    </ul>
                    {/* <br/>    */}

                    <p className="mt-2 lg:mt-8">This is the vision that drives EduSchola. We're not just an education management system; 
                        we're a catalyst for transformation.</p>
{/* 
                    <h3 className="font-bold">At our core, we believe in:</h3>

                    <ul className="list-disc list-inside text-white p-4">
                        <li className="list-item"><span className="font-bold">Empowering educators:</span> We liberate teachers from administrative burdens, giving them 
                            back the time and energy to unleash their passion for teaching.</li>
                        <li className="list-item"><span className="font-bold">Streamlining workflows:</span> We replace chaos with clarity, automating tasks and 
                            simplifying processes, so teams can focus on what matters most.</li>
                        <li className="list-item"><span className="font-bold">Data-driven insights:</span> We convert information into actionable knowledge, guiding 
                            educators and administrators towards informed decisions that optimize learning and outcomes.</li>
                    </ul>

                    <h3 className="font-bold">EduSchola is more than just software; it's a community:</h3>

                    <ul className="list-disc list-inside text-white p-4">
                        <li className="list-item"><span className="font-bold">Educators:</span> Connect, share best practices, and tap into a network of support within our vibrant online community.</li>
                        <li className="list-item"><span className="font-bold">Administrators:</span> Gain a bird's-eye view of your institution, make data-driven decisions, and empower your team to excel.</li>
                        <li className="list-item"><span className="font-bold">Students:</span> Benefit from personalized learning experiences, real-time feedback, and a system that supports their unique needs and aspirations.</li>

                    </ul>

                    <h3 className="font-bold">Ready to join the EduSchola revolution?</h3> */}

                    <button className="text-1.5x bg-cta hover-cta_hover text-white w-[45%] lg:w-[30%] py-2 mt-2 lg:mt-8 lg:py-4">
                            READ MORE
                    </button>

                </section>
            </section>
            
        </section>
    )
}

export default AboutUs;