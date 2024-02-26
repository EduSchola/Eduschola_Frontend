"use client";
import React, { useState, useEffect } from "react";
import { countries } from 'countries-list';
import Link from "next/link";

interface FormData {
    sch_name: string;
    sch_phone: string;
    sch_email: string;
    sch_address: string;
    sch_country:string;
    sch_state:string;
    sch_city:string;
    sch_lga:string;
    staff_name:string;
    userName: string;
    staff_phone: string;
    staff_email: string;
    staff_address: string;
    subjects: string[];
    staff_role: string;
    staffDOB: { day: string; month: string; year: string };
    staffPword: string;
}

const GetStarted = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        sch_name: '',
        sch_phone:'',
        sch_email:'',
        sch_address:'',
        sch_country:'',
        sch_state:'',
        sch_city:'',
        sch_lga:'',
        staff_name: '',
        userName: '',
        staff_phone: '',
        staff_address: '',
        staff_email: '',
        staff_role: 'admin',
        subjects: [],
        staffDOB: { day: '', month: '', year: '' },
        staffPword: "",
        // Initialize form data with default values
    });
    const [supportedCountries, setSupportedCountries] = useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const [selectedState, setSelectedState] = useState('');
    const [supportedStates, setSupportedStates] = useState<string[]>([]);

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    useEffect(() => {
        // Fetch supported countries with correct typing
        const fetchedCountries = Object.values(countries).map(country => country.name) as string[];
        setSupportedCountries(fetchedCountries);
    }, []);

    // useEffect(() => {
    //     // Fetch states based on the selected country
    //     if (selectedCountry) {
    //         const fetchedStates = states[selectedCountry] || [];
    //         setSupportedStates(fetchedStates);
    //     } else {
    //         setSupportedStates([]);
    //     }
    // }, [selectedCountry]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
        setSelectedState(''); // Reset the selected state when the country changes
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(e.target.value);
    };

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleDateChange = (field: string, value: string) => {
        setFormData((prevData) => ({
          ...prevData,
          staffDOB: {
            ...prevData.staffDOB,
            [field]: value,
          },
        }));
      };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value);
    };

    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
    setIsMonthly((prev) => !prev);
    };

    useEffect(() => {
    if (password === confirmPassword) {
        setFormData((prevData) => ({
        ...prevData,
        staffPword: password,
        }));
    }
    }, [password, confirmPassword]);

    
      
    return (
        <section className="w-full flex flex-col items-center justify-center my-10">
            <form className="w-full flex flex-col items-center justify-center">
                {currentStep === 1 && (
                    <section className="flex flex-col text-white bg-formbg items-center justify-center w-full relative">
                        <section className="flex mt-24 items-center justify-center w-full h-fit text-l"><h3 className="lg:text-2xl">Let's get started</h3></section>
                        <section className="flex flex-row mt-4 w-full items-center justify-center">
                            <section className="border border-cta rounded-full px-6 py-4 items-center justify-center">1</section>
                            <span className="inset-x-0 bottom-0 h-0.5 bg-cta w-10 lg:w-40"></span> 
                            <section className="border border-white rounded-full px-6 py-4 items-center justify-center">2</section>
                            <span className="inset-x-0 bottom-0 h-0.5 bg-white w-10 lg:w-40"></span> 
                            <section className="border border-white rounded-full px-6 py-4 items-center justify-center">3</section>
                        </section>
                        <section className="flex w-[90%] text-sm mt-4 items-center justify-center lg:text-l lg:mt-8">
                            <p>Welcome to Eduschola, your partner in educational management. To get started, please tell us a bit about your organization. </p>
                        </section>

                        <section className="flex my-4 items-center justify-center w-full h-fit font-bold text-l"><h3 className="lg:text-2xl">School Registration</h3></section>
                            
                    <section className="flex justify-center items-center relative my-4 w-full">
                        <label htmlFor="schoolName" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                        Name of School
                        </label>
                        <input
                            type="text"
                            id="schoolName"
                            name="schoolName"
                            className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10"
                            value={formData.sch_name}
                            onChange={(e) => setFormData({ ...formData, sch_name: e.target.value })}
                        />
                    </section>

                    <section className="flex justify-center items-center relative my-4 w-full">
                        <label htmlFor="schoolAddress" className="block absolute top-2.5 left-10 lg:left-40  -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                        School's Address
                        </label>
                        <input
                            type="text"
                            id="schoolAddress"
                            name="schoolAddress"
                            className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10"
                            value={formData.sch_address}
                            onChange={(e) => setFormData({ ...formData, sch_address: e.target.value })}
                        />
                    </section>
                    
                    <section className="flex flex-col w-full relative items-center justify-center lg:flex lg:flex-row">
                        <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                            <label htmlFor="schoolEmail" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            Email
                            </label>
                            <input
                                type="text"
                                id="schoolEmail"
                                name="schoolEmail"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                                value={formData.sch_email}
                                onChange={(e) => setFormData({ ...formData, sch_email: e.target.value })}
                            />
                        </section>

                        <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                            <label htmlFor="schoolPhoneNumber" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            Phone Number
                            </label>
                            <input
                                type="text"
                                id="schoolPhone"
                                name="schoolPhone"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                                value={formData.sch_phone}
                                onChange={(e) => setFormData({ ...formData, sch_phone: e.target.value })}
                            />
                        </section>
                    </section>

                    <section className="flex flex-col w-full relative items-center justify-center lg:flex lg:flex-row">
                        <section className="flex justify-center items-center relative my-4 w-full">
                            <label
                            htmlFor="country"
                            className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-0.5 text-white transform duration-300 origin-top-left transition-all"
                            >
                            Country
                            </label>
                            <select
                                id="country"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                className="rounded-full text-white bg-formbg border border-white p-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                            >
                                <option value="">Select Country</option>
                                {supportedCountries.map((country: string) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>

                        </section>

                        {/* State Select Box */}
                    {/* <section className="relative my-4 w-full">
                        <label
                            htmlFor="state"
                            className="block absolute top-2.5 left-2 -translate-y-3/4 bg-formbg px-3 py-2 text-white transform duration-300 origin-top-left transition-all"
                        >
                            State
                        </label>
                        <select
                            id="state"
                            value={selectedState}
                            onChange={handleStateChange}
                            className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10"
                        >
                            <option value="">Select State</option>
                            {supportedStates.map((state: string) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </section> */}

                        <section className="flex justify-center items-center relative my-4 w-full">
                            <label htmlFor="schoolState" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            State
                            </label>
                            <input
                                type="text"
                                id="schoolState"
                                name="schoolState"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10  lg:w-[80%]"
                                value={formData.sch_state}
                                onChange={(e) => setFormData({ ...formData, sch_state: e.target.value })}
                            />
                        </section>

                    </section>

                    <section className="flex flex-col w-full relative items-center justify-center lg:flex lg:flex-row">
                        <section className="flex justify-center items-center relative my-4 w-full">
                            <label htmlFor="schoolCity" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            City (Optional)
                            </label>
                            <input
                                type="text"
                                id="schoolCity"
                                name="schoolCity"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                                value={formData.sch_city}
                                onChange={(e) => setFormData({ ...formData, sch_city: e.target.value })}
                            />
                        </section>

                        <section className="flex justify-center items-center relative my-4 w-full">
                            <label htmlFor="schoolCity" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            L.G.A.
                            </label>
                            <input
                                type="text"
                                id="schoolCity"
                                name="schoolCity"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10  lg:w-[80%]"
                                value={formData.sch_lga}
                                onChange={(e) => setFormData({ ...formData, sch_lga: e.target.value })}
                            />
                        </section>
                    </section>

                    {/* Form fields for step 1, using formData properties and updating them as needed */}
                    <section className="flex p-4 ml-auto mb-4">
                        <button className="border border-cta bg-transparent rounded-full text-cta px-8 py-4 text-l lg:text-2xl hover:bg-cta hover:text-white" onClick={handleNext}>
                            Next
                        </button>
                    </section>
                </section>

                    )}
                    {currentStep === 2 && (
                        <section className="flex flex-col text-white bg-formbg items-center justify-center w-full relative">
                        <section className="flex mt-24 items-center justify-center w-full h-fit text-l"><h3 className="lg:text-2xl">Almost there</h3></section>
                        <section className="flex flex-row mt-4 w-full items-center justify-center">
                            <section className="border border-cta rounded-full px-6 py-4 items-center justify-center">1</section>
                            <span className="inset-x-0 bottom-0 h-0.5 bg-cta w-10 lg:w-40"></span> 
                            <section className="border border-cta rounded-full px-6 py-4 items-center justify-center">2</section>
                            <span className="inset-x-0 bottom-0 h-0.5 bg-cta w-10 lg:w-40"></span> 
                            <section className="border border-white rounded-full px-6 py-4 items-center justify-center">3</section>
                        </section>
                        <section className="flex w-[90%] text-sm mt-4 items-center justify-center lg:text-l lg:mt-8">
                            <p>Offer an insight, please tell us a bit about yourself.</p>
                        </section>

                        <section className="flex my-4 items-center justify-center w-full h-fit font-bold text-l"><h3 className="lg:text-2xl">Staff Admin Registration</h3></section>
                            
                    <section className="flex justify-center items-center relative my-4 w-full">
                        <label htmlFor="staffName" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                        Full Name
                        </label>
                        <input
                            type="text"
                            id="staffName"
                            name="staffName"
                            className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10"
                            value={formData.staff_name}
                            onChange={(e) => setFormData({ ...formData, staff_name: e.target.value })}
                        />
                    </section>

                    
                    <section className="flex flex-col w-full relative items-center justify-center lg:flex lg:flex-row">
                        <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                            <label htmlFor="staffUsername" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            Username
                            </label>
                            <input
                                type="text"
                                id="staffUsername"
                                name="staffUsername"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                                value={formData.userName}
                                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                            />
                        </section>

                        <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                            <label htmlFor="staffPhoneNumber" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            Phone Number
                            </label>
                            <input
                                type="tel"
                                id="staffPhoneNumber"
                                name="staffPhoneNumber"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                                value={formData.staff_phone}
                                onChange={(e) => setFormData({ ...formData, staff_phone: e.target.value })}
                            />
                        </section>
                    </section>

                    <section className="flex flex-col w-full relative items-center justify-center lg:flex lg:flex-row">
                        <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                            <label htmlFor="staffEmail" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                            Email
                            </label>
                            <input
                                type="email"
                                id="staffEmail"
                                name="staffEmail"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10  lg:w-[80%]"
                                value={formData.staff_email}
                                onChange={(e) => setFormData({ ...formData, staff_email: e.target.value })}
                            />
                        </section>

                        <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                            <section className="flex justify-center items-center relative my-4 w-[90%] border border-white rounded-full lg:w-[80%]">
                                <label
                                    htmlFor="dob"
                                    className="block absolute top-1.5 left-10 lg:left-20 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all"
                                >
                                    Date of Birth
                                </label>
                                <section className="flex items-center">
                                    {/* Day */}
                                    <select
                                    id="day"
                                    value={formData.staffDOB.day}
                                    onChange={(e) => handleDateChange("day", e.target.value)}
                                    className="rounded-full bg-formbg p-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 mx-2"
                                    >
                                        <option value="" disabled>
                                            DD
                                        </option>
                                    {/* Options for day */}
                                    {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
                                        <option key={day} value={day}>
                                        {day}
                                        </option>
                                    ))}
                                    </select>

                                    {/* Month */}
                                    <select
                                    id="month"
                                    value={formData.staffDOB.month}
                                    onChange={(e) => handleDateChange("month", e.target.value)}
                                    className="rounded-full bg-formbg p-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 mx-2"
                                    >
                                        <option value="" disabled>
                                            MM
                                        </option>
                                    {/* Options for month */}
                                    {[
                                        "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June",
                                        "July",
                                        "August",
                                        "September",
                                        "October",
                                        "November",
                                        "December",
                                    ].map((month, index) => (
                                        <option key={index} value={month}>
                                        {month}
                                        </option>
                                    ))}
                                    </select>

                                    {/* Year */}
                                    <select
                                    id="year"
                                    value={formData.staffDOB.year}
                                    onChange={(e) => handleDateChange("year", e.target.value)}
                                    className="rounded-full bg-formbg p-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 mx-2"
                                    >
                                        <option value="" disabled>
                                            YYYY
                                        </option>
                                    {/* Options for year */}
                                    {Array.from({ length: 50 }, (_, index) => 1970 + index).map((year) => (
                                        <option key={year} value={year}>
                                        {year}
                                        </option>
                                    ))}
                                    </select>
                                </section>
                            </section>
                        </section>
                    </section>

                    <section className="flex flex-col w-full relative items-center justify-center lg:flex lg:flex-row">              
                        <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                            <label htmlFor="staffPassword" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                                Password
                            </label>
                            <input
                                type="password"
                                id="staffPassword"
                                name="staffPassword"
                                className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                                value={password}
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />
                            </section>

                            <section className="flex justify-center items-center relative my-4 w-full lg:w-[50%]">
                                <label htmlFor="confirmPassword" className="block absolute top-2.5 left-10 lg:left-40 -translate-y-3/4 bg-formbg px-3 py-1 text-white transform duration-300 origin-top-left transition-all">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="rounded-full bg-transparent p-3 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 w-[90%] pl-10 lg:w-[80%]"
                                    value={confirmPassword}
                                    onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                                />
                            </section>
                        </section>

                    

                    {/* Form fields for step 1, using formData properties and updating them as needed */}
                    <section className="flex p-4 ml-auto mb-4">
                            {/* Form fields for step 2 */}
                            <button className="border border-cta bg-transparent rounded-full text-cta px-8 py-4 text-l lg:text-2xl hover:bg-cta hover:text-white" onClick={handleBack}>Back</button>
                            <button className="border border-cta bg-transparent rounded-full text-cta px-8 py-4 text-l lg:text-2xl hover:bg-cta hover:text-white" onClick={handleNext}>Next</button>
                    </section>
                </section>
                        
                    )}
                    {currentStep === 3 &&(
                        <section  className="flex flex-col text-white bg-formbg items-center justify-center w-full relative">
                            <section className="flex mt-24 items-center justify-center w-full h-fit text-l"><h3 className="lg:text-2xl">Final step!!</h3></section>
                            <section className="flex flex-row mt-4 w-full items-center justify-center">
                                <section className="border border-cta rounded-full px-6 py-4 items-center justify-center">1</section>
                                <span className="inset-x-0 bottom-0 h-0.5 bg-cta w-10 lg:w-40"></span> 
                                <section className="border border-cta rounded-full px-6 py-4 items-center justify-center">2</section>
                                <span className="inset-x-0 bottom-0 h-0.5 bg-cta w-10 lg:w-40"></span> 
                                <section className="border border-cta rounded-full px-6 py-4 items-center justify-center">3</section>
                            </section>
                            <section className="flex my-4 items-center justify-center w-full h-fit font-bold text-l">
                                <h3 className="lg:text-2xl">Payment</h3>
                            </section>
                            <section className="flex flex-col w-full h-100 items-center justify-center my-8">
                            <section className="flex relative w-80 justify-center items-center">
                                <section
                                className={`absolute flex items-center rounded-full border border-white h-10 w-64 cursor-pointer overflow-hidden`}
                                onClick={handleToggle}
                                >
                                
                                <section className="flex flex-row text-white bg-formbg w-full h-full p-2 items-center justify-center">
                                    <span className="mr-10">Monthly</span>
                                    <span>Annually</span>
                                </section>
                                <input
                                    type="checkbox"
                                    id="subscription-mode-toggle"
                                    className="hidden peer focus:outline-none"
                                    checked={isMonthly}
                                    onChange={() => setIsMonthly(!isMonthly)}
                                />
                                <label
                                    htmlFor="dark-mode-toggle"
                                    className={`absolute inset-0 w-1/2 h-full rounded-full transition-transform duration-300 ease-in-out bg-white ${
                                    isMonthly ? "transform translate-x-0" : "transform translate-x-full"
                                    }`}
                                >
                                    <span className={`absolute inset-0 flex items-center justify-center text-${isMonthly ? "formbg" : isMonthly === false ? "formbg" : "white"}`}>
                                    {isMonthly ? "Monthly" : "Annually"}
                                    </span>
                                </label>
                                
                                </section>
                                <section className="flex absolute rounded-full w-16 h-5 left-64 bg-cta text-white items-center justify-center text-xs">
                                    <span>save 17%</span>
                                </section>
                            </section>
                            <section className="flex items-center justify-center text-formbg text-lg mt-10 relative">Get started with one of our subscription plans</section>
                                    
                            <section className="flex flex-col w-full justify-center items-center text-white relative my-8 lg:flex lg:flex-row">
                                {/* payment cards container*/}

                                <section className="flex flex-col rounded-2xl w-[80%] h-90 bg-white text-formbg justify-center items-center my-2 py-8 lg:w-80 lg:order-1">
                                    <h1 className="font-extrabold text-4xl mb-4">Bronze</h1>
                                    <span className="text-l mb-4">Features</span>
                                    <h1 className="font-extrabold text-4xl">$29.75 </h1>
                                    <span className="text-l mb-4"> /per Month</span>
                                    <span className="font-semibold">What is included</span>
                                    <ul className="list-disc list-inside text-formbg p-4">
                                        <li className="list-item">1 active chatbot</li>
                                        <li className="list-item">Send up to 500 mails</li>
                                    </ul>

                                    <button className="bg-formbg text-white font-bold items-center justify-center rounded-xl w-[60%] py-2 px-8 mt-4 mb-2">Start Free Trial</button>
                                    <span>Learn more</span>
                                </section>

                                <section className="flex flex-col rounded-2xl w-[80%] bg-formbg justify-center items-center border border-white my-2 py-8 lg:w-80 lg:order-3 lg:bg-white lg:text-formbg">
                                <h1 className="font-extrabold text-4xl mb-4">Silver</h1>
                                <span className="text-l mb-4">Basic Features</span>
                                <h1 className="font-extrabold text-4xl">$39.75 </h1>
                                <span className="text-l mb-4"> /per Month</span>
                                <span className="font-semibold">What is included</span>
                                <ul className="list-disc list-inside text-white p-4 lg:text-formbg">
                                    <li className="list-item">All standard features</li>
                                    <li className="list-item">3 active chatbots</li>
                                    <li className="list-item">Send up to 40k mails</li>
                                </ul>

                                <button className="bg-white text-formbg font-bold items-center justify-center rounded-xl w-[60%] py-2 px-8 mt-4 mb-2 lg:bg-formbg lg:text-white">Start Free Trial</button>
                                <span>Learn more</span>
                                </section>

                                <section className="flex flex-col rounded-2xl w-[85%] h-90 bg-white text-formbg justify-center items-center my-2 py-8 lg:w-80 lg:order-2 lg:z-10 lg:bg-goldbg lg:text-white">
                                <h1 className="font-extrabold text-4xl mb-4">Gold</h1>
                                <span className="text-l mb-4">Features</span>
                                <h1 className="font-extrabold text-4xl">$49.75 </h1>
                                <span className="text-l mb-4"> /per Month</span>
                                <span className="font-semibold">What is included</span>
                                <section className="flex w-[80%] items-center justify-center">
                                    <ul className="list-disc list-inside text-formbg p-4 lg:text-white">
                                    <li className="list-item w-full">All standard and advanced features</li>
                                    <li className="list-item">5 active chatbots</li>
                                    <li className="list-item">Send up to 40k mails</li>
                                    </ul>
                                </section>
                                <button className="bg-formbg text-white font-bold items-center justify-center rounded-xl w-[60%] py-2 px-8 mt-4 mb-2 lg:bg-white lg:text-formbg">Start Free Trial</button>
                                <span>Learn more</span>
                                </section>
                            </section>
                                    
                            </section>
                            <section className="flex p-4 ml-auto mb-4">
                                {/* Form fields for step 2 */}
                                <button className="border border-cta bg-transparent rounded-full text-cta px-8 py-4 text-l lg:text-2xl hover:bg-cta hover:text-white" onClick={handleBack}>Back</button>
                                <button className="border border-cta bg-transparent rounded-full text-cta px-8 py-4 text-l lg:text-2xl hover:bg-cta hover:text-white" onClick={handleNext}>Next</button>
                            </section>
                        </section>
                    )}
                    {/* ...and so on for other steps */}
                    <section className="flex justify-between w-full text-white bg-formbg hidden md:block">
                        <span className="mr-8">@Eduschola</span>
                        <span className="mr-8">Privacy</span>
                        <span className="mr-8">Security</span>
                        <span className="mr-8">Disclaimer</span>
                        <span className="mr-8">Legal & Compliance</span>
                        <span className="mr-2">Terms and use</span>
                    </section>
                
            </form>
            
        </section>

        
        
    )
}

export default GetStarted;