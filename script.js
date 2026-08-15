console.log("script.js loaded"); 
document.addEventListener("DOMContentLoaded", function () {
    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navLinks.classList.toggle("active");

            menuBtn.classList.toggle("open");

        });

    }

    /* ==========================
       CLOSE MENU AFTER CLICK
    ========================== */

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

    /* ==========================
       STICKY HEADER
    ========================== */

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.background="#ffffff";

            header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

        }

        else{

            header.style.background="rgba(255,255,255,.95)";

            header.style.boxShadow="none";

        }

    });

    /* ==========================
       ACTIVE NAV LINK
    ========================== */

    const current=window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link=>{

        if(link.getAttribute("href")==current){

            link.classList.add("active");

        }

    });

    /* ==========================
       SCROLL ANIMATION
    ========================== */

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    document.querySelectorAll(

        ".fade,.fade-up,.fade-in,.slide-left,.slide-right,.zoom"

    ).forEach(el=>{

        observer.observe(el);

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ==========================
       BACK TO TOP BUTTON
    ========================== */

    const topBtn=document.createElement("div");

    topBtn.id="topBtn";

    topBtn.innerHTML='<i class="fas fa-chevron-up"></i>';

    document.body.appendChild(topBtn);

    topBtn.style.display="none";

    window.addEventListener("scroll",()=>{

        if(window.pageYOffset>500){

            topBtn.style.display="flex";

        }

        else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ==========================
       EMAILJS
    ========================== */

    if(typeof emailjs!=="undefined"){

        emailjs.init({

            publicKey:"oIbCgjuVAFz-1ojKy"

        });

        document.querySelector(".newsletter-form").action

        const form=document.querySelector(".contact-form");

        if(form){

            form.addEventListener("submit",function(e){

                e.preventDefault();

                emailjs.sendForm(

                    "service_8i26nf2",

                    "template_g7236sl",

                    this

                )

                .then(()=>{

                    alert("Thank you! Your message has been sent.");

                    form.reset();

                })

                .catch((error)=>{

                    console.error(error);

                    alert("Something went wrong. Please try again.");

                });

            });

        }

    }





    /* ==========================
       PRELOADER (Optional)
    ========================== */

    window.addEventListener("load",()=>{

        document.body.classList.add("loaded");

    });

}); 