import React from 'react'
import '../styles/ErrorPage.css'
import { useNavigate } from 'react-router-dom'


// Parallax Code
// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);
const ErrorPage = () => {
    const navigate = useNavigate()
    const changePage = (path) => {
        navigate(path)
    }
  return (
    <div className='error-body'>
        {/* <!-- about --> */}
        <div className="about">
            <a className="bg_links social portfolio" href="https://github.com/arazgeldi-durdyyev" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links social linkedin" href="https://www.linkedin.com/in/arazgeldi-durdyyev-8721bb26a/" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links logo"></a>
        </div>
        {/* <!-- end about --> */}

        <nav>
            <div className="menu">
                <div className="website_name">
                    <img 
                    width={53} 
                    height={43} 
                    src="/Images/yone-icon.png" 
                    alt="logo"
                    onClick={() => changePage('/')} />
                </div>
                <div className="menu_links">
                    <a href="" className="link">about</a>
                    <a href="" className="link">projects</a>
                    <a href="" className="link">contacts</a>
                </div>
                <div className="menu_icon">
                    <span className="icon"></span>
                </div>
            </div>
        </nav>

        <section className="wrapper-error">

            <div className="container">

                <div id="scene" className="scene" data-hover-only="false">


                    <div className="circle" data-depth="1.2"></div>

                    <div className="one" data-depth="0.9">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>

                    <div className="two" data-depth="0.60">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>

                    <div className="three" data-depth="0.40">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>

                    <p className="p404" data-depth="0.50">404</p>
                    <p className="p404" data-depth="0.10">404</p>

                </div>

                <div className="text">
                    <article>
                        <p>Uh oh! Looks like you got lost. <br/>Go back to the homepage if you dare!</p>
                        <button onClick={()=> {changePage('/'), window.location.reload()}}>i dare!</button>
                    </article>
                </div>

            </div>
        </section>
    </div>
  )
}

export default ErrorPage