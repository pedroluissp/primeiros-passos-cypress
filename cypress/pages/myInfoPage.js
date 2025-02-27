class MyInfoPage {

    selectorsList() {
        const selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: "[placeholder-'yyy-mm-dd']",
        genericCombobox: ".oxd-select-text--arrow",
        secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
        thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
        dateCloseButton: ".--close",
        submitButton: "[type='submit']",
        }

        return selectors
    }
    
fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    // cy.get((selectorsList).genericField).eq(3).clear().type('NicknameTest')

}

fillEmployeeDetails(employeeId,otherId,driversLicenseNumber, expiryDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
    cy.get(this.selectorsList().dateCloseButton).click()
    // cy.get((selectorsList).genericField).eq(8).clear().type('ssnNumberTest')
    // cy.get((selectorsList).genericField).eq(9).clear().type('sinNumberTest')
}

saveform() {
    cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
}

fillStatus(){
    cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
    cy.get(this.selectorsList().secondItemCombobox).click()
    cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
    cy.get(this.selectorsList().thirdItemCombobox).click()
}

}

export default MyInfoPage