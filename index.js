const body=document.body;
body.style.backgroundColor="silver";

const heading=document.getElementById("title");
heading.style.color="green";

const headingUpper=document.getElementById("second-heading");
headingUpper.style.textTransform="uppercase";

const thirdHeadingUpper=document.getElementById("third-heading");
thirdHeadingUpper.style.textTransform="uppercase";

const fruitList=document.getElementById("fruList");
const items=["Kiwi","Apple","Pineapple"];
items.forEach(item => {
    const addElement=document.createElement("li");
    addElement.textContent=item;
    fruitList.append(addElement);
});

const vegetableList=document.getElementById("vegList");
const vegItems=["Broccoli","Celery","Peas"];
vegItems.forEach(item=>{
    const addElement=document.createElement("li");
    addElement.textContent=item;
    vegetableList.append(addElement);
});

const myDiv=document.getElementsByClassName("img-container");
myDiv.style.backgroundImage = "url('Image/back.jpg')";
