import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import "./scroll.scss"

const Scroll = () => {
    const refAboutUs = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const aboutUsEl = refAboutUs.current;
            const currentScrollPosition = window.scrollY;

            const elScrollPosition = aboutUsEl.offsetTop;
            const currentWindowHeight = window.innerHeight;
            const elCurrentHeight = aboutUsEl.offsetHeight;

            const targetScrollPosition =
                elScrollPosition - currentWindowHeight + elCurrentHeight;
            if (currentScrollPosition >= targetScrollPosition) {
                aboutUsEl.classList.add("active")
            }
        }
        
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])
    /* Burda doğrudan doma ulaştığım için bir yan etki oluşur ve useEffect kullanırım*/
    return (
        <Container className='mt-5' >
            {
                [...new Array(15)].map((item, index) => (<p key={index} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.

                </p>))

            }
            <p className="about-us" ref={refAboutUs}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.

            </p>

            {
                [...new Array(15)].map((item, index) => (<p key={index} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at temporibus cumque quaerat.

                </p>))

            }
        </Container>
    )
}

export default Scroll