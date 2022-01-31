export function getCarFees(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            let fee = 0;
            switch (id) {
                case 1:
                    fee = 70;
                    break;              // added by handsomedev.
                case 2:
                    fee = 100;
                    break;              // added by handsomedev.
                case 3:
                    fee = 130;
                    break;              // /~ added by handsomedev.
                default:    
                    console.log("There is no car matched with request id.");
                    break;              // added by handsomedev.~/
            }
            resolve(fee);
        }, 200)
    })
}
