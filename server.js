
// Requires \\

const express = require("express");
const path = require("path");
const treeify = require("treeify");
const numberList = require("./Buttons.js");

const theport = 4009; //  Setup port

const app = express(); // Express app setup

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'BST.html'))
});

app.use(express.static(path.join(__dirname, '/')));


/*\ BST Functionality \*/

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const recursion = (node) => {
            if(node === null) {
                return new Node(value);
            }else if(value < node.value) {
                node.left = recursion(node.left);
            }else if(value > node.value) {
                node.right = recursion(node.right);
            }else{
                throw new Error("Cannot be equal You!")
            }
            
            if(nodeBalance(node) > 1) {
                return nodeRotateLeft(node);
            }else if(nodeBalance < -1) {
                return nodeRotateRight(node);
            }else{
                return node;
            }
        }
        this.root = recursion(this.root);
        }
            search(value){
            const recursiveSearch = (node) => {
                if(node === null) {
                    return false;
                }else if(value < node.value){
                    return recursiveSearch(node.left);
                }else if (value > node.value){
                    return recursiveSearch(node.right);
                }else{
                    return true;
                }
            }
            return recursiveSearch(this.root)
        }
    }
    function nodeHeight(node){
        if(node === null) {
            return -1;
        }else if(node.left === null && node.right === null){
            return 0;
        }else{
            return 1 + Math.max(nodeHeight(node.left), nodeHeight(node.right));
        }
        
    }
    function nodeBalance(node){
        return nodeHeight(node.right) - nodeHeight(node.left);
    }
    function nodeRotateLeft(node){
        if(node === null || node.right === null){
            return node;
        }
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    function nodeRotateRight(node){
        if(node === null || node.left === null){
            return node;
        }
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
};


// Port/Exports \\

app.listen(theport, () => {
  console.log(`Listened at http://localhost:${theport}`)
});

module.exports = {
  Tree
}