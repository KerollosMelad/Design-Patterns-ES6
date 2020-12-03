class AbstractSortingAlgorithm {
    CompFunc(L, R) {

    }

    SWAP(arr, xIndx, yIndx) {
        let Temp = arr[xIndx];
        arr[xIndx] = arr[yIndx];
        arr[yIndx] = Temp;
    }

    Sort(Arr) {
        for (let i = 0; i < Arr.length; i++)
            for (let j = 0; j < Arr.length - i - 1; j++)
                if (this.CompFunc(Arr[j], Arr[j + 1]))
                    this.SWAP(Arr, j, j + 1);
    }
}

class ASC_Sorting extends AbstractSortingAlgorithm {
    CompFunc(L, R) {
        if (L > R)
            return true;
        return false;
    }
}

class DEC_Sorting extends AbstractSortingAlgorithm {
    CompFunc(L, R) {
        if (L < R)
            return true;
        return false;
    }
}

function run() {
    let arr = [1, 6, 4, 9, 7, 3, 5];
    console.log('array:', arr);


    let algo = new DEC_Sorting();
    algo.Sort(arr);

    console.log('DES:', arr);

    let arr2 = [1, 6, 4, 9, 7, 3, 5];
    let algo2 = new ASC_Sorting();
    algo2.Sort(arr2);

    console.log('ASC:',arr2);

}