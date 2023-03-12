import styles from './page.module.css';


const Header = () => {
	//
	return (
		<head>
			<title>Json Doe</title>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="./images/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="./images/favicon-16x16.png"
			/>
			<link
				rel="stylesheet"
				href="./styles/index.css"
			/>
			<link
				rel="stylesheet"
				href="./styles/navbar.css"
			/>
		</head>
	);
};


export default function Home() {
	return (
		<>
			<Header />
			<body>
				<div id="scripted-page">
					<header id="main-navbar">
						<span id="navbar-title">
							<span id="mini-navbar-root">~/</span><span id="full-navbar-root">nick/portfolio/</span>
							<span id="current-location">nick</span>
						</span>
						<span
							id="navbar-command"
							className="navbar-start-hidden"
						>
							<span
								id="full-navbar-command"
								className="navbar-command-text"
							>&nbsp;navigate&nbsp;
							</span>
							<span
								id="mini-navbar-command"
								className="navbar-command-text"
							>&nbsp;nav&nbsp;
							</span>
						</span>
						<nav
							id="navbar-links"
							className="navbar-start-hidden"
						>
							<ul>
								<li id="home-link">
									<a href="#home">home</a>
								</li>
								<li id="about-link">
									<a href="#about">about</a>
								</li>
								<li id="projects-link">
									<a href="#projects">projects</a>
								</li>
								<li id="contact-link">
									<a href="#contact">contact</a>
								</li>
							</ul>
						</nav>
						<span id="blinking-cursor">▯</span>
					</header>
					<script src="./scripts/navbar.js"></script>

					<div id="page-content">
						<section
							id="home"
							className="active-section"
						>
							<span className="wordart-header type-contents">
								hello
							</span>
							<span
								id="name-header"
								className="wordart-header type-contents"
							>
								nametext
							</span>
							<p className="type-contents">(fullstack node.js developer)</p>
							<nav className="link-list">
								<a className="type-contents" href="#about">[learn about me]</a>
								<a
									className="type-contents"
									href="#projects"
								>[cool projects]
								</a>
								<a
									className="type-contents"
									href="#contact"
								>[chat with me]
								</a>
							</nav>
							<noscript>
								<br />
								<p style={{ fontSize: '0.7rem' }}>pssst.. this page is better with javascript enabled</p>
							</noscript>
						</section>
						<section
							id="about"
							className="active-section"
						>
							<h1 className="wordart-header type-contents">about</h1>
							<br />
							<h2><span className="type-contents">hi, im</span> <span className="type-contents name">nick</span></h2>
							<p className="about-paragraph type-contents">description stuff</p>
							<p className="about-paragraph type-contents">description stuff</p>
							<p className="about-paragraph type-contents">description stuff</p>
						</section>
						<section
							id="projects"
							className="active-section"
						>
							<h1 className="wordart-header type-contents">projects</h1>
							<br />
							<table id="projects-table">
								<tr>
									<td className="type-contents">proj name</td>
									<td className="type-contents">proj desc</td>
									<td><a
										className="github-link type-contents"
										href="https://github.com/NicholasFields/proj-name"
										target="_blank"
										rel="noreferrer"
									>[github]
									</a>
									</td>
								</tr>
							</table>
						</section>
						<section
							id="contact"
							className="active-section"
						>
							<h1 className="wordart-header type-contents">contact-ascii</h1>
							<nav>
								<br />
								<table id="contact-info">
									<tr>
										<td>
											<a
												className="type-contents bracket-link"
												href="mailto:nick@jsondoe.com"
												target="_blank"
												style={{ color: '#6D4AFF' }}
												rel="noreferrer"
											>[email]
											</a>
										</td>
										<td className="type-contents">nick@jsondoe.com</td>
									</tr>
									<tr>
										<td><a
											className="type-contents"
											href="https://twitter.com/twitterhandle"
											target="_blank"
											style={{ color: '#1D9BF0' }}
											rel="noreferrer"
										>[twitter]
										</a>
										</td>
										<td className="type-contents">@twitterhandle</td>
									</tr>
									<tr>
										<td
											className="type-contents"
											style={{ color: '#454FBF ' }}
										>[discord]
										</td>
										<td className="type-contents">discordhandle</td>
									</tr>
									<tr>
										<td><a
											className="type-contents github-link"
											href="https://github.com/NicholasFields"
											target="_blank"
											rel="noreferrer"
										>[github]
										</a>
										</td>
										<td className="type-contents">@githubhandle</td>
									</tr>
								</table>
							</nav>
						</section>
						<section id="404">
							<h1 className="wordart-header type-contents">
								404
							</h1>
							<p className="type-contents">Huh, this isn&apos;t an official page on this site, why aren&apos;t you using the navbar?</p>
						</section>
					</div>
					<script src="./scripts/index.js"></script>
				</div>
			</body>
		</>
	);
}
