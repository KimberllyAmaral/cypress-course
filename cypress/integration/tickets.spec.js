describe("Tickets", () => {
    // visiting the following url;
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html")) 
    // .only can be added if you want to run just this specific test;
    it("fills all the text input fields", () =>{
        const firstName = "Kimberlly";
        const lastName = "Amaral";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("kimberllys.amaral@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    // testing the select field;
    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    // testing radio button;
    it("select 'vip' ticket type", () => {
        cy.get("#vip").check();
    })

    // Checking one checkbox option;
    it("selects 'social media' checkbox", () => {
        cy.get("#social-media").check();
    })

    // Checking and unchecking checkbox;
    it.only("selects 'friend', and 'publication', then uncheck 'friend'", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });
    
    // Checking if the header has the title 'TICKETBOX';
    it("has 'TICKETBOX' header's heading", () => {});
});