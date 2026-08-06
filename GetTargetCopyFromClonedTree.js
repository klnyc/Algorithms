// Given two binary trees original and cloned and given a reference to a node target in the original tree.
// The cloned tree is a copy of the original tree.
// Return a reference to the same node in the cloned tree.

// BFS to traverse both trees at the same time
// place root in queue [original, cloned]
// while queue.length
// create next queue = []
// loop through queue, for each node,
// check if node = target, if so, return the cloned node
// if not, push child nodes into next queue if != null
// queue.push([original.left, clone.left])
// queue.push([original.right, clone.right])
// After loop, set queue = next queue

const getTargetCopyFromClonedTree = (original, cloned, target) => {
  let queue = [[original, cloned]];
  while (queue.length) {
    let next = [];
    for (let i = 0; i < queue.length; i++) {
      const pointer = queue[i];
      const [originalNode, clonedNode] = pointer;
      if (originalNode.val === target.val) return clonedNode;
      if (originalNode.left) next.push([originalNode.left, clonedNode.left]);
      if (originalNode.right) next.push([originalNode.right, clonedNode.right]);
    }
    queue = next;
  }
};
