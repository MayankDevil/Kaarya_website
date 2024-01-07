/*
-	website-3 "Kaarya_website"
-	Developed by Mayank
-	CopyRight by https://github.com/MayankDevil/
-	JavaScript : ./js/script.js
*/
try
{
    /*
        [ function return header layout ]----------------------------------------
    */ 

    function header_layout()
    {
        return (`
            <!-- ( nav links ) -->
			<nav id="nav">
				
				<a href="about.html" class="nav-link"> About </a>
				<a href="index.html" class="nav-link"> Service </a>
				<a href="kaarya.html" class="nav-link"> Work </a>
				
			</nav>
			<!-- ( brand name )
				<div id="brandname"> Service </div>
			-->
			
			<!-- ( social icon ) -->
			<div id="social">
				
				<a href="https://github.com/MayankDevil" title="github" target="_blank" class="media">
					<img src="data/logo/github.png" alt="github">
				</a>
				<a href="https://www.linkedin.com/in/MasterMayank" title="linkedin" target="_blank" class="media">
					<img src="data/logo/linkedin.png" alt="linkedin">
				</a>
				<a href="https://mayankdevil.github.io/MayankDevil/" title="developer" target="_blank" class="media">
					<img src="data/logo/user.png" alt="developer">
				</a>

			</div>
        `)
    }

    /*
        [ function return footer layout ]----------------------------------------
    */ 

    function footer_layout()
    {
        return (`
            <!-- ( copyright ) -->
            <div class="copy"> MayankDevil &copy; All Right Reserved </div>
            <!-- ( developed ) -->
            <div class="developer"> Developed by <a href="https://mastermayank.w3space.com" target="_blank" title="developer"> Mayank </a> </div>
        `)
    }

    /* target element set layout */

    document.getElementById('header').innerHTML = header_layout()

    document.getElementById('footer').innerHTML = footer_layout()

    // set title

    document.title =   'Mayank'
}
catch(error)
{
    console.log(` ERROR : ${error}`)
}