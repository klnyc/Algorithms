// Given the head of a linked list, remove the nth node from the end of the list and return its head.

const removeNthNode = (head, n) => {
  let pointer = head;
  let number = 1; // head is node number 1
  let map = {}; // { number: node }

  // iterate through linked list
  while (pointer) {
    // save each number and its node
    map[number] = pointer;

    // continue iteration if there's a next node
    if (pointer.next) {
      pointer = pointer.next;
      number++;
    } else {
      pointer = null; // end of the linked list, end while loop
    }
  }

  // if n equals the total number of nodes, that means remove the first node
  // return the list without the head
  if (number === n) {
    return head.next;
  }

  const cutOff = number - n;

  let front = map[cutOff]; // the node where we cut off the tail
  let tail = map[cutOff + 2]; // the node after the nth node, to reattach the tail

  if (tail) {
    front.next = tail;
  } else {
    front.next = null; // no tail, remove the last node
  }

  return head;
};
