describe('user can check greeting', () => {
	it('test', () => {
		cy.visit('http://localhost:3001')
		cy.get('#quote').click()
	})
})