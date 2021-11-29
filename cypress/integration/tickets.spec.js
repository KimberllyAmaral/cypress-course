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
    it("alerts on invalid email", () => {
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
    
    //End-to-end test
    it("fills and reset the form", () => {
        const firstName = "Kimberlly";
        const lastName = "Amaral";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("kimberllys.amaral@gmail.com");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type("Wine");

        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        );

        cy.get("#agree").click();
        cy.get("#signature").type(fullName);

        cy.get("button[type='submit']")
          .as("submitButton")
          .should("not.be.disabled");

        cy.get("button[type='reset']").click();
        cy.get("@submitButton").should("be.disabled");

    });

    it.only("fills mandatory fields using support command", () => {
        const customer = {
            firstName: "João",
            lastName: "Silva",
            email: "joaosilva@example.com"
        };

        cy.fillMandatoryFields(customer);

        cy.get("button[type='submit']")
          .as("submitButton")
          .should("not.be.disabled");
        
        cy.get("#agree").uncheck();

        cy.get("@submitButton").should("be.disabled");
    })
});