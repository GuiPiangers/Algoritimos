class Node{
    public left?: Node
    public right?: Node

    constructor(public data?: number){
        this.data = data
    }
}
class BinarySeachTree{
    public root: Node

    constructor(data?: number, node?: Node){
        this.root = node ? node : new Node(data)
    }

    insert(value: number){
        let parent = undefined
        let current: Node | undefined = this.root

        while(current?.data){
            parent = current
            if(value < current.data) current = current.left
            else current = current.right
        }

        if(!parent?.data) return this.root = new Node(value)
        if(value < parent.data) return parent.left = new Node(value)
        return parent.right = new Node(value)
    }

    search(value: number){
        const searchHelper = (value: number, node?: Node): BinarySeachTree | undefined => {
            if(!node){
                return node
            }
            if(node.data === value){
                return new BinarySeachTree(0, node)
            }
            if(node.data && value < node.data){
                return searchHelper(value, node.left)
            }
            return searchHelper(value, node.right)
        }
        return searchHelper(value, this.root)
    }

    inOrderTraversal(node?: Node){
        if(!node) node = this.root

        node.left && this.inOrderTraversal(node.left)
        console.log(node.data)
        node.right && this.inOrderTraversal(node.right)
    }
    posOrderTraversal(node?: Node){
        if(!node) node = this.root

        node.left && this.inOrderTraversal(node.left)
        node.right && this.inOrderTraversal(node.right)
        console.log(node.data)
    }
    hight(node?: Node){
        if(!node) node = this.root

        let hLeft = 0, hRight = 0

        if(node.left) hLeft = this.hight(node.left)
        if(node.right) hRight = this.hight(node.right)
        
        return hLeft >= hRight ? hLeft + 1 : hRight + 1
    }
}

const values = [3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5]
const searchValues = [2, 10, 3, 15]

const binaryTree = new BinarySeachTree()
values.forEach(value => binaryTree.insert(value))

searchValues.forEach(value => console.log(binaryTree.search(value)?.root.data))
// binaryTree.inOrderTraversal()