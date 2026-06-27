// Navigation

function goHome() {
    document.getElementById("homePage").classList.add("active");
    document.getElementById("linearPage").classList.remove("active");
    document.getElementById("nonLinearPage").classList.remove("active");
}

function openLinear() {
    document.getElementById("homePage").classList.remove("active");
    document.getElementById("linearPage").classList.add("active");
}

function openNonLinear() {
    document.getElementById("homePage").classList.remove("active");
    document.getElementById("nonLinearPage").classList.add("active");
}

// Data

let arrayData = [];
let stackData = [];
let queueData = [];
let linkedData = [];


// Main DS Selection

function showLinearDS(type) {

    const title = document.getElementById("dsTitle");
    const theory = document.getElementById("theoryBox");
    const operations = document.getElementById("operations");
    const visual = document.getElementById("visualization");

    operations.innerHTML = "";
    visual.innerHTML = "";
    if(type === "array"){

    operations.innerHTML = `
        <button onclick="insertArray()">Insert</button>
        <button onclick="deleteArray()">Delete</button>
        <button onclick="searchArray()">Search</button>
        <button onclick="traverseArray()">Traverse</button>
        <button onclick="updateArray()">Update</button>
        <button onclick="sortArray()">Sort</button>
        <button onclick="mergeArray()">Merge</button>
    `;
}

    // if (type === "array") {

    //     title.innerText = "ARRAY";

    //     theory.innerHTML = `
    //     <h3>Array</h3>
    //     <p>
    //     An array is a linear data structure that stores multiple elements of the same type in contiguous memory locations.
    //     Each element in an array is accessed using an index, starting from 0.
    //     </p>
    //     `;

    //     createOperationButton("Insert", insertArray);
    //     createOperationButton("Delete", deleteArray);
    //     createOperationButton("Search", searchArray);
    //     createOperationButton("Traverse", traverseArray);
    // }

    else if (type === "stack") {

        title.innerText = "STACK";

        theory.innerHTML = `
        <h3>Stack</h3>
        <p>A stack is a linear data structure that follows LIFO (Last In First Out) principle.
        The last element inserted is the first one to be removed.</p>
        `;

        createOperationButton("Push", pushStack);
        createOperationButton("Pop", popStack);
        createOperationButton("Peek", peekStack);
        createOperationButton("isEmpty", isEmptyStack);
    }

    else if (type === "queue") {

        title.innerText = "QUEUE";

        theory.innerHTML = `
        <h3>Queue</h3>
        <p>A queue is a linear data structure that follows FIFO (First In First Out) principle.
        The first element inserted is the first one to be removed.</p>
        `;

        createOperationButton("Enqueue", enqueueQueue);
        createOperationButton("Dequeue", dequeueQueue);
        createOperationButton("Front", frontQueue);
        createOperationButton("Rear", rearQueue);
        createOperationButton("isEmpty", isEmptyStack)
    }

    else if (type === "linkedlist") {

        title.innerText = "LINKED LIST";

        theory.innerHTML = `
        <h3>Linked List</h3>
        <p>A linked list is a linear data structure where elements (nodes) are connected using pointers.
        Each node contains data and reference to the next node.</p>
        `;

        createOperationButton("Insert", insertLinked);
        createOperationButton("Delete", deleteLinked);
        createOperationButton("Search", searchLinked);
        createOperationButton("Update", updateLinkedList);
        createOperationButton("Sort", sortLinkedList);
        createOperationButton("Reverse", reverseLinkedList);
        createOperationButton("Traverse", traverseLinkedList);

    }
}


// Non Linear

function showNonLinearDS(type) {

    if (type === "tree") {

        document.getElementById("nlTitle").innerText = "TREE";

        document.getElementById("nlTheory").innerHTML = `
        <h3>Binary Tree</h3>
        <p>A tree is a non-linear data structure made of nodes connected in a hierarchy.
        It starts from a root node and branches into child nodes.</p>
        `;

        document.getElementById("nlOperations").innerHTML = `
        <button onclick="showTree()">Show Tree</button>
        <button onclick="treeTraverse()">Traverse</button>
        <button onclick="treeCount()">Count Nodes</button>
        `;

    }

    else if (type === "graph") {

        document.getElementById("nlTitle").innerText = "GRAPH";

        document.getElementById("nlTheory").innerHTML = `
        <h3>Graph</h3>
        <p>A graph is a collection of nodes (vertices) connected by edges.
        It is used to represent networks like social media, maps, etc.</p>
        <br>
        BFS / DFS
        `;

        document.getElementById("nlOperations").innerHTML = `
        <button onclick="showGraph()">Show Graph</button>
        <button onclick="graphBFS()">BFS</button>
<1 onclick="graphDFS()">DFS</button>
`;
    }
}


// Helper

function createOperationButton(text, func) {

    let btn = document.createElement("button");

    btn.innerText = text;

    btn.onclick = func;

    document.getElementById("operations").appendChild(btn);
}


// ARRAY

function insertArray() {

    let value = prompt("Enter value");

    if (value !== null && value.trim() !== "") {

        arrayData.push(value);
        document.getElementById("visualization").innerHTML +=
              `<div class="value-box">${value}</div>`;

        renderArray();

        showMessage("Inserted Successfully");
    }
}
function updateArray() {

    if(arrayData.length === 0){
        showMessage("Array is Empty");
        return;
    }

    let oldValue = prompt("Enter value to update");

    if(oldValue === null) return;

    let index = arrayData.indexOf(oldValue);

    if(index === -1){
        showMessage("Value Not Found");
        return;
    }

    let newValue = prompt("Enter new value");

    if(newValue === null || newValue.trim() === "") return;

    arrayData[index] = newValue;

    renderArray();

    showMessage("Updated Successfully");
}
function sortArray() {

    if(arrayData.length === 0){
        showMessage("Array is Empty");
        return;
    }

    arrayData.sort((a,b) => a-b);

    renderArray();

    showMessage("Array Sorted");
}
function mergeArray() {

    let values = prompt("Enter values separated by commas");

    if(values === null || values.trim() === "")
        return;

    let newArray = values.split(",");

    arrayData = arrayData.concat(newArray);

    renderArray();

    showMessage("Arrays Merged Successfully");
}
function deleteArray() {

    if(arrayData.length === 0){
        showMessage("Array is Empty");
        return;
    }

    arrayData.pop();

    renderArray();

    showMessage("Deleted Successfully");
}

function searchArray() {

    let value = prompt("Enter value");

    if(value === null) return;

    if(arrayData.includes(value)){
        showMessage("Value Found");
    }
    else{
        showMessage("Value Not Found");
    }
}

function traverseArray() {

    showMessage("Array : " + arrayData.join(", "));
}

function renderArray() {

    let visual = document.getElementById("visualization");

    visual.innerHTML = "";

    arrayData.forEach(val => {

        let box = document.createElement("div");

        box.className = "box";

        box.innerText = val;

        visual.appendChild(box);
    });
}


// STACK

function pushStack() {

    let value = prompt("Enter value");

    if (value !== null && value.trim() !== "") {

        stackData.push(value);
        document.getElementById("visualization").innerHTML +=
           `<div class="value-box">${value}</div>`;
        renderStack();

        showMessage("Pushed");
    }
}

function popStack() {

    if(stackData.length === 0){
        showMessage("Stack is Empty");
        return;
    }

    stackData.pop();

    renderStack();

    showMessage("Popped");
}
function isEmptyStack() {

    if(stackData.length === 0){
        showMessage("Stack is Empty");
    }
    else{
        showMessage("Stack is Not Empty");
    }

}
function peekStack() {

    if(stackData.length === 0){
        showMessage("Stack is Empty");
        return;
    }

    showMessage("Top : " + stackData[stackData.length - 1]);
}

function renderStack() {

    let visual = document.getElementById("visualization");

    visual.innerHTML = "";

    [...stackData].reverse().forEach(val => {

        let box = document.createElement("div");

        box.className = "box";

        box.innerText = val;

        visual.appendChild(box);
    });
}


// QUEUE

function enqueueQueue() {

    let value = prompt("Enter value");

    if (value !== null && value.trim() !== "") {

        queueData.push(value);
        document.getElementById("visualization").innerHTML +=
            `<div class="value-box">${value}</div>`;

        renderQueue();

        showMessage("Enqueued");
    }
}

function dequeueQueue() {

    if(queueData.length === 0){
        showMessage("Queue is Empty");
        return;
    }

    queueData.shift();

    renderQueue();

    showMessage("Dequeued");
}

function frontQueue() {

    if(queueData.length === 0){
        showMessage("Queue is Empty");
        return;
    }

    showMessage("Front : " + queueData[0]);
}
function rearQueue() {

    if(queueData.length === 0){
        showMessage("Queue is Empty");
        return;
    }

    showMessage("Rear Element : " + queueData[queueData.length - 1]);
}
function isEmptyQueue() {

    if(queueData.length === 0)
        showMessage("Queue is Empty");
    else
        showMessage("Queue is Not Empty");
}
function renderQueue() {

    let visual = document.getElementById("visualization");

    visual.innerHTML = "";

    queueData.forEach(val => {

        let box = document.createElement("div");

        box.className = "box";

        box.innerText = val;

        visual.appendChild(box);
    });
}


// LINKED LIST

function insertLinked() {

    let value = prompt("Enter value");

    if (value !== null && value.trim() !== "") {

        linkedData.push(value);
        document.getElementById("visualization").innerHTML +=
            `<div class="value-box">${value}</div>`;
        renderLinked();

        showMessage("Inserted");
    }
}

function deleteLinked() {

    if(linkedData.length === 0){
        showMessage("Linked List is Empty");
        return;
    }

    linkedData.pop();

    renderLinked();

    showMessage("Deleted");
}

function searchLinked() {

    let value = prompt("Enter value");

    if(value === null) return;

    if(linkedData.includes(value)){
        showMessage("Found");
    }
    else{
        showMessage("Not Found");
    }
}
function updateLinkedList() {

    let oldValue = prompt("Enter value to update");

    if(oldValue === null) return;

    let index = linkedData.indexOf(oldValue);

    if(index === -1){
        showMessage("Value Not Found");
        return;
    }

    let newValue = prompt("Enter new value");

    if(newValue === null || newValue.trim() === "") return;

    linkedData[index] = newValue;

    renderLinked();

    showMessage("Updated Successfully");
}

function sortLinkedList() {

    linkedData.sort();

    renderLinked();

    showMessage("Linked List Sorted");
}

function reverseLinkedList() {

    linkedData.reverse();

    renderLinked();

    showMessage("Linked List Reversed");
}

function traverseLinkedList() {

    if(linkedData.length === 0){
        showMessage("Linked List is Empty");
        return;
    }

    showMessage(
        "Linked List : " + linkedData.join(" ➜ ") + " ➜ NULL"
    );
}
function renderLinked() {

    let visual = document.getElementById("visualization");

    visual.innerHTML = "";

    linkedData.forEach((val, index) => {

        let box = document.createElement("div");

        box.className = "box";

        box.innerText = val;

        visual.appendChild(box);

        if (index !== linkedData.length - 1) {

            let arrow = document.createElement("div");

            arrow.className = "arrow";

            arrow.innerHTML = "➜";

            visual.appendChild(arrow);
        }
    });
}


// TREE

function showTree() {

    document.getElementById("nlVisualization").innerHTML = `
        <pre style="font-size:22px;color:cyan;">
            10
           /  \\
          5   15
         / \\    
        2   7
        </pre>
    `;
}


// GRAPH

function showGraph() {

    document.getElementById("nlVisualization").innerHTML = `
        <pre style="font-size:22px;color:cyan;">
        A ----- B
        |       |
        |       |
        C ----- D
        </pre>
    `;
}


// Message

function showMessage(msg) {

    document.getElementById("message").innerText = msg;
}
