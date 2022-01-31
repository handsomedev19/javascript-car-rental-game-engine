export default class Customer {
    name;
    rentals;

    constructor(name, rentals = []) {
        this.name = name;
        this.rentals = rentals;
    }

    addRental(rental) {
        this.rentals.push(rental);
    }

    async getTotalFees() {                                      // modified by handsomedev
        let totalFees = 0;
        for (let i = 0; i < this.rentals.length; i++) {
            totalFees += await this.rentals[i].getFees();       // modified by handsomedev
        }

        return `Customer ${this.name}'s total fees is ${totalFees}`;
    }

    async getDetailedFees() {
        const output = [];

        for (let i = 0; i < this.rentals.length; i++) {                         /* ~/ modified by handsomedev */
            let fee = await this.rentals[i].getFees();
            output.push(`Fees for Rental Number ${i + 1} is ${fee}`);
        }                                                                       /* modified by handsomedev ~/ */

        return output;
    }
}
