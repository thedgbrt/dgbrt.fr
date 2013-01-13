<?php
require "lessc.inc.php";
$less = new lessc;
try {
	$less->checkedCompile("style.less", "style.css");
} catch (exception $e) {
  echo "fatal error: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html>
<head><!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<link href="style.css" rel="stylesheet"/>
	<!-- Miller Headline Roman Font -->
	<link href="//cloud.webtype.com/css/930cf8c1-b12f-4efd-8606-07ad1d4509ef.css" rel="stylesheet" type="text/css" />
	<!-- Open Sans Font Family -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,700' rel='stylesheet' type='text/css'>
	<!-- Fontello (icons as fonts) -->
	<link rel="stylesheet" href="css/fontello.css">
    <link rel="stylesheet" href="css/animation.css"><!--[if IE 7]>
    <link rel="stylesheet" href="css/fontello-ie7.css"><![endif]-->
	<title>Portfolio de Webdesigner</title>
</head>
<body>
	<div id="header">
	</div>
	<section>
		<header>
			<h1>Portfolio de Webdesigner</h1>
			<p>Voici une s&eacute;lection des projets de conception web les plus marquants auxquels j&rsquo;ai particip&eacute; au cours des derni&egrave;res ann&eacute;es.</p>
		</header>
		<article>
			<span class="dot">.</span>
			<h2>Model Society</h2>
			<div class="when"><time datetime="2011">2011</time> - <time datetime="2012">2012</time></div>
			<blockquote>&ldquo;Dagobert a fait un travail somptueux sur ModelSociety. Il m&rsquo;a permis de r&eacute;aliser la vision que j&rsquo;avais de cr&eacute;er un r&eacute;seau social pour mettre photographes, mannequins et artistes en relation directe et bas&eacute;e sur leur styles respectifs.&rdquo;</blockquote>
			<small class="author">David Bollt</small>
			<small class="author_website"><a href="http://www.modelsociety.com">modelsociety.com<i class="icon-link-ext"></i></a></small>
			<img src="img/modelsociety-1.jpg" alt="Design site internet Model Society"/>
		</article>
	</section>
</body>
</html>
