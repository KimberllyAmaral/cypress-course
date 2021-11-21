describe("Tickets", () => {
    // visiting the following url
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html")) 
    // .only can be added if you want to run just this specific test;
    it.only("fills all the text input fields", () =>{
        const firstName = "Kimberlly";
        const lastName = "Amaral";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("kimberllys.amaral@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });
    // Checking if the header has the title 'TICKETBOX'
    it("has 'TICKETBOX' header's heading", () => {});
});