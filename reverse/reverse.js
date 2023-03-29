class Node {
    constructor(value=null, next_node=null) {
      this.value = value;
      this.next = next_node;
    }
    
    get_value(){
        return this.value;
    }
    
    get_next(){
        return this.next
    }
    
    set_next(node){
        this.next = node; 
    }
  }

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add_to_head(value) {
        const new_node = new Node(value);
        if (!this.head) {
            this.head = new_node;
        } else {
            new_node.set_next(this.head);
        }
    }
    
    contains(value){
        if(!this.head){
            return false;
        }
        
        let current = this.head;
        while(current){
            if(current.get_value() === value){
                return true; 
            }
            current.get_next();
        }
        return false;
    }
    
    reverse_list(node, prev){
        //your code here
        return
    }
  }

module.exports = {Node, LinkedList}