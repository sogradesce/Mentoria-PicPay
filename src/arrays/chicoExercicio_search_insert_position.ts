// https://leetcode.com/problems/search-insert-position/

// Dica: Pesquise sobre busca binária (binary search)

// fonte de ajuda: https://www.codeguru.co.in/2020/05/how-to-implement-binary-search-in.html
// fonte de ajuda2: https://blog.hellojs.org/implement-binary-search-in-typescript-using-generics-with-useful-refactorings-a4bcda932d7
// fonte de ajuda3: papai stack overflow, referencias.

function searchInsert(nums: number[], target: number): number {
    let head = 0;
    let tail = nums.length - 1;
    while (head <= tail) {
        let mid = head + Math.floor((tail - head) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            tail = mid - 1;
        } else {
            head = mid + 1;
        }
    }
    return head;
}

// att para subir ao GIT
