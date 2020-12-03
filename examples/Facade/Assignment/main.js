class CIBBankSystem1 {

    CheckIsAmountAvaliable(accountId, amount) {
        // get back account using accountId 
        let bankAccount = {
            id: accountId,
            Avaiable: 1000000
        };
        if (amount > bankAccount.Avaiable) {
            console.log('invalid operation');
            return false;
        }
        console.log('CIB System1: Valid Account info');
        return true;
    }
}

class CentralBank {
    CheckBankCredentials(bankName, Credentials) {
        console.log(`The Central Bank: checking the Credentials ${Credentials.toString()} on ${bankName}....`);
        console.log('Valid Credentials....');
        return true;
    }

    TransferAmount(toBankName, amount) {
        console.log(`The Central Bank: Transfering ${amount} To ${toBankName}....`);
        console.log('Done');
        return true;
    }
}

class CIBBankSystem2 {
    constructor() {
        this.CentralBank = new CentralBank();
    }

    TransferAmount(toBankName, amount) {
        console.log(`CIB System2: Transfering ${amount} to The Central Bank...`);
        this.CentralBank.TransferAmount(toBankName, amount);
        console.log('CIB System2: Done');
    }
}

class CIBLoginSystem {
    checkCredentials(userId, accountId, password) {
        console.log('CIB Login System: checking Credentials....');
        console.log('Valid Credentials');
        return true;
    }
}


class BankSystemFacade {
    constructor() {
        this.LoginSystem = new CIBLoginSystem();
        this.CIBBankSystem1 = new CIBBankSystem1();
        this.CIBBankSystem2 = new CIBBankSystem2();
        this.CentralBank = new CentralBank();
    }

    Transfer(CibAccountCredentials, amount, toBank, toAccountCredentials) {
        var isValid = this.LoginSystem.checkCredentials(CibAccountCredentials);
        if (isValid) {
            isValid = this.CIBBankSystem1.CheckIsAmountAvaliable(CibAccountCredentials.id, amount);
            this.CentralBank.CheckBankCredentials(toBank, toAccountCredentials);
            this.CIBBankSystem2.TransferAmount(toBank, amount);
            return;
        }
    }
}

class Client {
    constructor() {
        this.BankSystemFacade = new BankSystemFacade();
    }

    Transfer(CibAccountCredentials, amount, toBank, toAccountCredentials) {
        this.BankSystemFacade.Transfer(CibAccountCredentials, amount, toBank, toAccountCredentials)
    }
}

function Run() {
    let c = new Client();
    c.Transfer({
            id: '123456',
            bankId: '456789',
            password: 'pass_abcd',
        }, 3000,
        'AboZaabi',
        'bankId_456789'
    );
}