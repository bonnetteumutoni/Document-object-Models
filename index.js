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
thirdHeadingUpper.style.background="White"
thirdHeadingUpper.style.textAlign="center"
thirdHeadingUpper.style.color="green"
thirdHeadingUpper.style.padding="28px";

const kiwiDiv=document.createElement("div");
const appleDiv=document.createElement("div");
const fruitList=document.getElementById("fruList");
const items=["Kiwi","Apple"];
items.forEach(item => {
    if(item=="Kiwi"){
    const kiwiImg=document.createElement("img")
    const addElement=document.createElement("li");
    kiwiImg.src='Images/kiwi.jpg';
    kiwiImg.width=300;
    kiwiImg.height=225;
    addElement.textContent=item;
    kiwiDiv.appendChild(kiwiImg);
    kiwiDiv.appendChild(addElement);
    fruitList.append(kiwiDiv)
    }else{
    const appleImg=document.createElement("img");
    const addfruit=document.createElement("li");
    appleImg.src='Images/apple.jpg';
    appleImg.width=300;
    addfruit.textContent=item;
    appleDiv.appendChild(appleImg);
    appleDiv.appendChild(addfruit);
    fruitList.append(appleDiv);
    }
});
fruitList.style.display="flex";
fruitList.style.justifyContent="space-between";

const brocolliDiv=document.createElement("div");
const celeryDiv=document.createElement("div");
const vegetablesList=document.getElementById("vegList");
const itemsVeg=["Broccoli","Celery"];
itemsVeg.forEach(item => {
    if(item=="Broccoli"){
    const brocImg=document.createElement("img")
    const addElem=document.createElement("li");
    brocImg.src='Images/brocolii.jpg';
    brocImg.width=300;
    brocImg.height=225;
    addElem.textContent=item;
    brocolliDiv.appendChild(brocImg);
    brocolliDiv.appendChild(addElem);
    vegetablesList.append(brocolliDiv)
    }else{
    const celImg=document.createElement("img");
    const addCel=document.createElement("li");
    celImg.src='Images/celery.jpg';
    celImg.width=200;
    celImg.height=200;
    addCel.textContent=item;
    celeryDiv.appendChild(celImg);
    celeryDiv.appendChild(addCel);
    vegetablesList.append(celeryDiv);
    }
});

vegetablesList.style.display="flex";
vegetablesList.style.justifyContent="space-between";

const image = document.getElementById('img-container');
const newImage = document.createElement('img');
newImage.src = 'Images/back.jpg';
newImage.width = 1835;
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



