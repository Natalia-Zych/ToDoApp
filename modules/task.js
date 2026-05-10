class Task{
    
    constructor(id, name, parentId){
        this.id = id;
        this.name = name;
        this.parentId = parentId;
    }

    print(){
        console.log(`Print task: ${this.name}`);

        let listItem = document.createElement("li");
        listItem.textContent = `${this.name}`;
        listItem.id = `${this.id}`;

        let list = document.getElementById(this.parentId);
        if(list !== null){
            list.appendChild(listItem);
        }

        return listItem;
    }
}



export {Task};