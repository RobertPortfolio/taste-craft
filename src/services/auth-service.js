
export const mockLogin = (credentials) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(credentials.username === 'test' && 
				credentials.password === '123'){
				resolve({ user: { username: 'test', name: 'Test User' } });
			} else {
				reject(new Error('Неверное имя пользователя или пароль'));
			}
		}, 1000);
	});
}; 