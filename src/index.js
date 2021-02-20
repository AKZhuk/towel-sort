module.exports = function towelSort(matrix) {
    let ArrayInLine = [];
    switch (matrix) {
        case undefined:
            break;

        default:
            for (let i = 0; i < matrix.length; i++) {
                if (i % 2 != 0) {
                    matrix[i].reverse();
                }
                for (let n = 0; n < matrix[i].length; n++) {
                    ArrayInLine.push(matrix[i][n]);
                }
            }
            break;
    }

    return ArrayInLine;
};
