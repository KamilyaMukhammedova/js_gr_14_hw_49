"use strict";
const showChessBoard = (cells) => {
    let boardCell = '';
    for (let i = 0; i < cells; i++) {
        for (let j = 0; j < cells; j++) {
            if (i % 2 === 0) {
                if ((j % 2) === 1) {
                    boardCell += '  ';
                }
                else {
                    boardCell += '██';
                }
            }
            else {
                if ((j % 2) === 1) {
                    boardCell += '██';
                }
                else {
                    boardCell += '  ';
                }
            }
        }
        boardCell += '\n';
    }
    return boardCell;
};
console.log(showChessBoard(8));
