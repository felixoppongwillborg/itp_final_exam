

describe('user can see images', () => {
	it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#h1'),('Racism is a learnd behavior')
	})
})