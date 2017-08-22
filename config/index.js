module.exports = {
	loginPage: {
		url: 'http://pceggs.com/nologin.aspx',
		form: {
			username: '#txt_UserName',
			password: '#txt_PWD',
			valiCode: '#valiCode',
			submit:   '#Login_Submit'
		}
	},
	homePage: {
		url: 'http://pceggs.com',
		form: {
			signin: '.index_4beta_wdyxjl>.jrqd>a'
		}
	},
	signinPage: {
		form: {
			signin: '#ButSignIn',
			number: '.qd_main01_all_top'
		}
	}
}