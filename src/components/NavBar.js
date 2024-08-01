import React from "react";

function NavBar() {
	const links = ["home", "about", "projects"];

	return (
		<nav>
			<a href="#home" id="home">
				home
			</a>
			<a href="#about" id="about">
				about
			</a>
			<a href="#projects" id="projects">
				projects
			</a>
		</nav>
	);
}

export default NavBar;
