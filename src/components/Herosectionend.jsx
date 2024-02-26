import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGraduate, faCalendarDays, faHome } from '@fortawesome/free-solid-svg-icons';

function Herosectionend() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    useEffect(() => {
        const startAnimation = () => {
            let interval1, interval2, interval3, interval4;
            const targetCount1 = 1000;
            const targetCount2 = 400;
            const targetCount3 = 800;
            const targetCount4 = 3000;

            interval1 = setInterval(() => {
                setCount1(prevCount => {
                    if (prevCount < targetCount1) {
                        return prevCount + 5;
                    } else {
                        clearInterval(interval1);
                        return targetCount1;
                    }
                });
            }, 10);

            interval2 = setInterval(() => {
                setCount2(prevCount => {
                    if (prevCount < targetCount2) {
                        return prevCount + 5;
                    } else {
                        clearInterval(interval2);
                        return targetCount2;
                    }
                });
            }, 10);

            interval3 = setInterval(() => {
                setCount3(prevCount => {
                    if (prevCount < targetCount3) {
                        return prevCount + 5;
                    } else {
                        clearInterval(interval3);
                        return targetCount3;
                    }
                });
            }, 10);

            interval4 = setInterval(() => {
                setCount4(prevCount => {
                    if (prevCount < targetCount4) {
                        return prevCount + 30;
                    } else {
                        clearInterval(interval4);
                        return targetCount4;
                    }
                });
            }, 10);
        };

        const handleScroll = () => {
            const element = document.getElementById('testimonials');
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight) {
                    startAnimation();
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="testimonials" className="relative bg-cover h-[350px] lg:h-[300px] bg-center" style={{ backgroundImage: "url('https://ik.imagekit.io/7ymcb1ihc/tripsweet/write-img-1.jpg?updatedAt=1708336411635')" , zIndex:"1"}}>
            <div className="h-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 absolute inset-0 backdrop-filter backdrop-blur-md text-[#302386] ">
                <div className='p-4 flex justify-start md:justify-center items-center gap-6'>
                    <div>
                        <FontAwesomeIcon icon={faUser} className=' lg:hidden ' size='2x' />
                        <FontAwesomeIcon icon={faUser} className=' hidden lg:block ' size='4x' />
                    </div>
                    <div>
                        <h1 className='text-2xl lg:text-3xl font-bold text-back'>{count1} ++</h1>
                        <p className='text-l lg:text-xl font-semibold black'>SUCCESS STORIES</p>
                    </div>
                </div>
                <div className='p-4 flex justify-start md:justify-center items-center gap-6'>
                    <div>
                        <FontAwesomeIcon icon={faUserGraduate} className=' lg:hidden ' size='2x' />
                        <FontAwesomeIcon icon={faUserGraduate} className=' hidden lg:block ' size='4x' />
                    </div>
                    <div>
                        <h1 className='text-2xl lg:text-3xl font-bold '>{count2} ++</h1>
                        <p className='text-l lg:text-xl font-semibold '>MAINTENANCE</p>
                    </div>
                </div>
                <div className='p-4 flex justify-start md:justify-center items-center gap-6'>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDays} className=' lg:hidden' size='2x' />
                        <FontAwesomeIcon icon={faCalendarDays} className=' hidden lg:block ' size='4x' />
                    </div>
                    <div>
                        <h1 className='text-2xl lg:text-3xl font-bold '>{count3} ++</h1>
                        <p className='text-l lg:text-xl font-semibold '>SCHEDULES</p>
                    </div>
                </div>
                <div className='p-4 flex justify-start md:justify-center items-center gap-6'>
                    <div>
                        <FontAwesomeIcon icon={faHome} className=' lg:hidden ' size='2x' />
                        <FontAwesomeIcon icon={faHome} className=' hidden lg:block' size='4x' />
                    </div>
                    <div>
                        <h1 className='text-2xl lg:text-3xl font-bold '>{count4} ++</h1>
                        <p className='text-l lg:text-xl font-semibold '>WEB HOSTING</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Herosectionend;
