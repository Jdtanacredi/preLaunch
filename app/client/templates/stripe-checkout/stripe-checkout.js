  Template.stripeCheckoutButton.events({
    'click button': function(e) {
      e.preventDefault();
      console.log("publicStripeKey: " + Meteor.settings.public.Stripe.public);

      StripeCheckout.open({
        key: Meteor.settings.public.Stripe.public,
        amount: 5000, // this is equivalent to $50
        name: 'Meteor Tutorial',
        description: 'On how to use Stripe ($50.00)',
        billingAddress: "true",
        panelLabel: 'Pay Now',
        token: function(res) {
          stripeToken = res.id;
          console.info(res);
          // Meteor.call('testingMethod');
          Meteor.call('chargeCard', stripeToken);
        }
      });
    }
  });