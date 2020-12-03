class IPaymentStrategy {
    Pay(amount) {};
}

class CreditCard extends IPaymentStrategy {
    Pay(amount) {
        console.log('Use Credit Card to pay:', amount);
    }
}

class DebitCard extends IPaymentStrategy {
    Pay(amount) {
        console.log('Use Debit Card to pay:', amount);
    }
}