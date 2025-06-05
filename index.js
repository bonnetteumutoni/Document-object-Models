const body=document.body;
body.style.backgroundColor="silver";
body.style.margin="0";
body.style.padding="0";
body.style.display="flex";
body.style.flexDirection="column"

const heading=document.getElementById("title");
heading.style.color="green";

const headingUpper=document.getElementById("second-heading");
headingUpper.style.textTransform="uppercase";
headingUpper.style.background="White"
headingUpper.style.textAlign="center"
headingUpper.style.color="green"

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
const image = document.getElementById('img-container');
const newImage = document.createElement('img');
newImage.src = 'Images/back.jpg';
newImage.width = 1825;
newImage.height = 600;
newImage.style.display="block";
image.appendChild(newImage);

const textElement=document.getElementById("text-block");
textElement.style.position = "absolute";
textElement.style.top = "200px";   
textElement.style.left = "500px";   
textElement.style.color = "white"; 
textElement.style.fontSize = "24px";
textElement.style.fontWeight = "bold";
textElement.style.background="rgb(18, 34, 18)"
textElement.style.padding="40px"
textElement.style.borderRadius="30px"
textElement.style.textAlign="center"
textElement.style.textShadow = "2px 2px 4px rgba(43, 42, 42, 0.7)";



