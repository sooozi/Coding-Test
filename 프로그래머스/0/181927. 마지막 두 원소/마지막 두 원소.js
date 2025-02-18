function solution(num_list) {
    const lastElement = num_list[num_list.length - 1];
    const secondLastElement = num_list[num_list.length - 2];
    
    if (lastElement > secondLastElement) {
        // 마지막 원소가 그 전 원소보다 크면, 마지막 원소에서 그 전 원소를 뺀 값을 추가
        num_list.push(lastElement - secondLastElement);
    } else {
        // 그렇지 않으면, 마지막 원소를 두 배한 값을 추가
        num_list.push(lastElement * 2);
    }
    
    return num_list;
}