Meteor.methods({
  chargeCard: function(stripeToken) {
    check(stripeToken, String);
    var Stripe = StripeAPI(Meteor.settings.private.Stripe.private);

    Stripe.charges.create({
      source: stripeToken,
      amount: 5000, // this is equivalent to $50
      currency: 'usd'
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});