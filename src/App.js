import './App.css';

function App() {
    return (
       <div className="App">
        <body>
            <div className="fixed">
                <nav className="navbar">
                    <img src="./colorful-set-cartoon-avatars_23-2147675277-50.jpg" alt="Avatar Icon"></img>
                    <p>NKS</p>
                    <label for="hamburger">&#9776;</label>
                    <input type="checkbox" id="hamburger"/>

                    <div className="hamitems">
                        <a href="index.html">Home</a>
                        <a href="#about">About</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contactMe">Contact Me</a>
                    </div>
                </nav>
            </div>

            <div className="tangerine"></div>

            <div className="header">
                <header>
                    <img src="./plans-1867745_1280-2.jpg" alt="A notebook, pen, and phone."></img>
                    <h1 class="banner">Nadia Stepnowski</h1>
                    <h3 class="banner2">Aspiring UI/UX Designer & Developer</h3>
                </header>
            </div>

            <div classNameName="content">
                <main>
                <div className="aboutMe">
                    <a id="about"><h1>About Me</h1></a>
                        <p>I'm an aspiring UX/UI Developer in the making and I am currently studying Web Design and UX/UI design through Wake Technical Community College. Figuring out my career path was no easy task. What brought me to web development was the combination of creativity and language that comes with it. I enjoy learning how to incorporate my creativity into solving problems and I intend to continue learning and expanding my knowledge after college.</p>

                    <div className="card c1">
                        <div className="wrapper">
                            <h3>Languages I speak:</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>PHP</li>
                                <li>SQL</li>
                            </ul> 
                        </div>
                    </div>

                    <div className="card">
                        <div className="wrapper">
                            <h3>My current toolbox:</h3>
                            <ul>
                                <li>Visual Studio Code</li>
                                <li>Abode XD</li>
                                <li>FileZilla</li>
                                <li>Git</li>
                                <li>MERN Stack</li>
                                <li>Node Package Manager</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="work">
                <a id="portfolio"><h1>My Recent Work</h1></a>
                    <div className="card c2">
                        <div className="wrapper">
                            <a href="">
                                <img src="./biltmore.PNG" alt="The Bilmore website"></img>
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="wrapper">
                            <a href="">
                                <img src="./island.PNG" alt="Pleasure Island website"></img>
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="wrapper">
                            <a href="">
                                <img src="./betta.PNG" alt="Betta Blog Website"></img>
                            </a>
                        </div>
                    </div>
                </div>

                <a id="contactMe"><h1 className="contact">Contact Me</h1></a>
                <form>
                    <p>
                        <label for="fullName">Name: </label><br></br>
                        <input type="text" name="fullName" id="fullName" placeholder="Name"></input>
                    </p>
                    <p>
                        <label for="email">Email: </label><br></br>
                        <input type="text" name="email" id="email" placeholder="Email" required></input>
                    </p>
                    <p>
                        <label for="message">Message: </label><br></br>
                        <textarea name="message" id="message" placeholder="Message..."></textarea>
                    </p>
                    <button id="button">Submit</button>
                </form>
                </main>
            </div>

            <div className="foot">
            <div className="tangerine"></div>
                <footer>
                <p>
                <a href="https://www.freepik.com/vectors/business">Business vector created by freepik - www.freepik.com</a><br></br>
                Copyright &copy; 2023 by Nadia Stepnowski
                </p> 
                </footer>
            </div>

        </body>
       </div>
    );
}

export default App;