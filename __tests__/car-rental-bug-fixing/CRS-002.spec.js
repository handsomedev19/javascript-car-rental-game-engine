const { describe, test, expect } = global;
import Car from '../../src/car-rental-bug-fixing/Car';
import Rental from '../../src/car-rental-bug-fixing/Rental';
import Customer from '../../src/car-rental-bug-fixing/Customer';

describe('CRS-002', function () {
    test('getTotalFees from Customer', async function () {
        let rental1 = new Rental([ new Car(1, "fiat") ], 2);
        let rental2 = new Rental([ new Car(2, "General"), new Car(3, "Lexus") ], 2);
        let customer = new Customer('Richard', [rental1, rental2]);

        let totalFee = await customer.getTotalFees();

        expect(totalFee).toContain('Richard');
        expect(totalFee).toContain('600');
    });

});
