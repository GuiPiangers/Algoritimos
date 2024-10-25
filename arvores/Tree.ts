class Node{
    public left?: Node
    public right?: Node

    constructor(public data: any){
        this.data = data
    }
}
class BinaryTree{
    public root: Node

    constructor(data?: any){
        this.root = new Node(data)
    }

    simetricTraversal(node?: Node){
        if(!node) node = this.root

        node.left && this.simetricTraversal(node.left)
        console.log(node.data)
        node.right && this.simetricTraversal(node.right)
    }
    posOrderTraversal(node?: Node){
        if(!node) node = this.root

        node.left && this.simetricTraversal(node.left)
        node.right && this.simetricTraversal(node.right)
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

const tree = new BinaryTree()

const n1 = new Node('a')
const n2 = new Node('+')
const n3 = new Node('*')
const n4 = new Node('b')
const n5 = new Node('-')
const n6 = new Node('/')
const n7 = new Node('c')
const n8 = new Node('d')
const n9 = new Node('e')

n6.left = n7
n6.right = n8
n5.left = n6
n5.right = n9
n3.left = n4
n3.right = n5
n2.left = n1
n2.right = n3

tree.root = n2
console.log(tree.hight())
