$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'K4KFH',

		// Tagline for your site
		siteTagline: 'The FTP actually works this time.',

		// Email address
		siteEmail: 'your_email@example.com',

		// Name
		siteAuthor: 'Your Name',

		// Navigation items
		siteNavItems: [
			{ name: '<i class="material-icons">home</i>', href: "#", newWindow: false},
			{ name: 'About'},
			{ name: 'Github', href: 'https://github.com/yourname', newWindow: true},
		],

		// Posts folder name
		postsFolder: 'posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'pages',

		// Site fade speed
		fadeSpeed: 350,

		sortDateOrder: true,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' K4KFH - All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'GitHub',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'k4kfh',
			repo: 'k4kfh.github.io',
			branch: 'master'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: false
	});

});
