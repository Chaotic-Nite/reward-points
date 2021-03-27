export function pointCalculator (total) {
            let totalLength = total.length;
            total = parseInt(total.split(',').join(''))
            let difference = 0
            if (totalLength === 2 && total > 50) {
                difference = total - 50;
            } else if (totalLength >2) {
                // Subtracts the first $100 and then multiple it by 2 and adds 50
                difference = ((total - 100) * 2) + 50
            }
            return difference
}
