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
    it("selects 'friend', and 'publication', then uncheck 'friend'", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    //Verifying if the header h1 contains a specific value;
    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    //Verifying invalid email
    it.only("alerts on invalid email", () => {
        cy.get("#email")
          .as("email")
          .type("kimberllys.amaral-gmail.com");
        cy.get("#email.invalid").should("exist");
        
        //type the correct email;
        cy.get("@email")
          .clear()
          .type("kimberllys.amaral@gmail.com");

          cy.get("#email.invalid").should("not.exist");
    })
    // Checking if the header has the title 'TICKETBOX';
    it("has 'TICKETBOX' header's heading", () => {});
});