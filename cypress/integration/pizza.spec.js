describe('Pizza App', () => {
    describe('inputs and submission', () => {
        it('can input text', () => {
            cy.visit('http://localhost:3000/pizza')
            cy.get('input[data-cy="name"]')
                .type("Josh")
                .should("have.value", "Josh")
        })

        it('can select multiple toppings', () => {
            cy.visit('http://localhost:3000/pizza')
            cy.get('input[data-cy="cheese"]')
                .check().should('be.checked')
            cy.get('input[data-cy="anchovies"]')
                .check().should('be.checked')
        })

        it('can submit the form', () => {
            cy.visit('http://localhost:3000/pizza')
            cy.get('input[data-cy="name"]').type("Josh")
            cy.get('select[data-cy="size"]').select('Large: 12" to share. Or 1 hungry teen.')
            cy.get('button[data-cy="submit"]').click()
            //need one more test once the data validation is working to show that it's successfully posting.

        })
    })
})