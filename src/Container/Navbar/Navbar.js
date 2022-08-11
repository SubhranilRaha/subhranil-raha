import React from 'react'

function Navbar() {
  return (
    <div>
        <div class="menu-wrap">
		<input type="checkbox" class="toggler"></input>
		<div class="hamburger">
			<div></div>
		</div>
		<div class="menu">
			<div>  
				<div>
					<ul>
						<li><a className='txt-f-clr' href="#">Home</a></li>
						<li><a className='' href="#">About Me</a></li>
						<li><a className='' href="#">Skills</a></li>
                        <li><a className='' href="#">Qualification</a></li>
                        <li><a className='' href="#">Projects</a></li>
						<li><a className='' href="#">Contact Me</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Navbar