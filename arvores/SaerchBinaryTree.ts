class Node {
    public left?: Node;
    public right?: Node;

    constructor(public data: number) {}
}

class BinarySearchTree {
    public root: Node | undefined;

    constructor(data?: number) {
        this.root = data !== undefined ? new Node(data) : undefined;
    }

    insert(value: number): void {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let current: Node | undefined = this.root;

        while (current) {
            if (value < current.data) {
                if (!current.left) {
                    current.left = new Node(value);
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = new Node(value);
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value: number): Node | null {
        let current: Node | undefined = this.root;

        while (current) {
            if (current.data === value) return current;
            current = value < current.data ? current.left : current.right;
        }
        return null;
    }

    min(node?: Node){
        let current = node ?? this.root

        while(current){
            if(current.left){
                current = current.left
            }
            else{
                return current.data
            }
        }       
    }
    max(node?: Node){
        let current = node ?? this.root

        while(current){
            if(current.right){
                current = current.right
            }
            else{
                return current.data
            }
        }       
    }

    remove(value: number, node = this.root){
        if(!node) return node

        if (value < node.data){
            node.left = this.remove(value, node.left)
        } else if (value > node.data){
            node.right = this.remove(value, node.right)
        } else {
            if(!node.left){
                return node.right
            }
            else if(!node.right){
                return node.left
            }
            else{
                const substitute = this.min(node.right)
                node.data = substitute!
                node.right = this.remove(substitute!, node.right)
            }
        }
        return node
    }



    inOrderTraversal(): void {
        this.inOrderTraversalHelper(this.root);
    }

    private inOrderTraversalHelper(node?: Node): void {
        if (!node) return;
        this.inOrderTraversalHelper(node.left);
        console.log(node.data);
        this.inOrderTraversalHelper(node.right);
    }

    levelOrderTraversal(): void{
        const treeOrderQuery = [this.root]

        while(treeOrderQuery.length > 0){
            const currentNode = treeOrderQuery.shift()
            console.log(currentNode?.data)

            currentNode?.left && treeOrderQuery.push(currentNode?.left)
            currentNode?.right && treeOrderQuery.push(currentNode?.right)
        }
    }

    postOrderTraversal(): void {
        this.postOrderTraversalHelper(this.root);
    }

    private postOrderTraversalHelper(node?: Node): void {
        if (!node) return;
        this.postOrderTraversalHelper(node.left);
        this.postOrderTraversalHelper(node.right);
        console.log(node.data);
    }

    height(): number {
        return this.heightHelper(this.root);
    }

    private heightHelper(node?: Node): number {
        if (!node) return 0;
        const leftHeight = this.heightHelper(node.left);
        const rightHeight = this.heightHelper(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const values = [61, 43, 89, 16, 51, 66, 11, 32, 55, 79, 77, 82, 100, 90]
const searchValues = [2, 10, 3, 15]

const binaryTree = new BinarySearchTree()
values.forEach(value => binaryTree.insert(value))


// searchValues.forEach(value => console.log(binaryTree.search(value)?.data))
binaryTree.remove(61)
// binaryTree.inOrderTraversal()
binaryTree.levelOrderTraversal()
// binaryTree.postOrderTraversal()