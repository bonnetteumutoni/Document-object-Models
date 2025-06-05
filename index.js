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
    const reviews=document.createElement("div");
    reviews.className="fa-solid fa-star fa-solid fa-star fa-solid fa-star fa-solid fa-star fa-solid fa-star"
    kiwiImg.src='Images/kiwi.jpg';
    kiwiImg.width=300;
    kiwiImg.height=225;
    kiwiImg.style.borderRadius="20px";
    addElement.textContent=item;
    for(let i=0;i<4;i++){
        const star=document.createElement("i");
        star.className="fa-solid fa-star"
        reviews.appendChild(star);
    }
    reviews.style.color="rgb(111, 117, 20)";
    const buttonCartLike=document.createElement("div");
    const cartDiv=document.createElement("div");
    const likeDiv=document.createElement("div");
    buttonCartLike.appendChild(cartDiv);
    buttonCartLike.appendChild(likeDiv);
    const cartButton=document.createElement("button");
    cartButton.textContent="+Cart";
    cartButton.style.padding="10px";
    cartButton.style.width="230%";
    cartButton.style.borderRadius="20px";
    cartButton.style.border="none";
    cartButton.style.backgroundColor="rgb(60, 65, 4)";
    cartButton.style.color="white"
    cartButton.addEventListener("click",()=>{
    cartButton.style.backgroundColor="Maroon";
    cartButton.style.color="white";
    cartButton.textContent="Added!";
    cartButton.style.border="none";
})
    cartDiv.appendChild(cartButton);
    const like=document.createElement("i")
    like.className="fa-solid fa-heart"
    like.style.color="white";
    like.addEventListener("click",()=>{
        like.style.color="red";
    });
    likeDiv.appendChild(like)

    buttonCartLike.style.display="flex";
    buttonCartLike.style.justifyContent="space-between";
    buttonCartLike.style.marginTop="20px";
    buttonCartLike.style.marginRight="20px";
    const paragraph=document.createElement("p");
    paragraph.textContent="Price: 4$"
    paragraph.style.color="rgb(131, 42, 72)";

    kiwiDiv.appendChild(kiwiImg);
    kiwiDiv.appendChild(addElement);
    kiwiDiv.appendChild(paragraph);
    fruitList.append(kiwiDiv);
    kiwiDiv.appendChild(reviews);
    kiwiDiv.appendChild(buttonCartLike);
    }else{
    const appleImg=document.createElement("img");
    const addfruit=document.createElement("li");
    const reviews=document.createElement("div");
    appleImg.src='Images/apple.jpg';
    appleImg.width=300;
    appleImg.style.borderRadius="20px";
    addfruit.textContent=item;
    for(let i=0;i<5;i++){
        const star=document.createElement("i");
        star.className="fa-solid fa-star"
        reviews.appendChild(star);
    }
    reviews.style.color="rgb(111, 117, 20)";
    const buttonCartLike=document.createElement("div");
    const cartDiv=document.createElement("div");
    const likeDiv=document.createElement("div");
    buttonCartLike.appendChild(cartDiv);
    buttonCartLike.appendChild(likeDiv);
    const cartButton=document.createElement("button");
    cartButton.textContent="+Cart";
    cartButton.style.padding="10px";
    cartButton.style.width="230%";
    cartButton.style.borderRadius="20px";
    cartButton.style.border="none";
    cartButton.style.backgroundColor="rgb(60, 65, 4)";
    cartButton.style.color="white"
    cartButton.addEventListener("click",()=>{
    cartButton.style.backgroundColor="Maroon";
    cartButton.style.color="white";
    cartButton.textContent="Added!";
    cartButton.style.border="none";
})
    cartDiv.appendChild(cartButton);
    const like=document.createElement("i")
    like.className="fa-solid fa-heart"
    like.style.color="white";
    like.addEventListener("click",()=>{
        like.style.color="red";
    });
    buttonCartLike.style.display="flex";
    buttonCartLike.style.justifyContent="space-between";
    buttonCartLike.style.marginTop="20px";
    buttonCartLike.style.marginRight="20px";
    const paragraph=document.createElement("p");
    paragraph.textContent="Price: 3$"
    paragraph.style.color="rgb(131, 42, 72)";

    likeDiv.appendChild(like)
    appleDiv.appendChild(appleImg);
    appleDiv.appendChild(addfruit);
    appleDiv.appendChild(paragraph);
    fruitList.append(appleDiv);
    appleDiv.appendChild(reviews);
    appleDiv.appendChild(buttonCartLike);
    }
});
fruitList.style.display="flex";
fruitList.style.justifyContent="space-between";
fruitList.style.listStyleType="none";
fruitList.style.fontSize="20px";



const brocolliDiv=document.createElement("div");
const celeryDiv=document.createElement("div");
const vegetablesList=document.getElementById("vegList");
const itemsVeg=["Broccoli","Celery"];
itemsVeg.forEach(item => {
    if(item=="Broccoli"){
    const brocImg=document.createElement("img")
    const addElem=document.createElement("li");
    const reviews=document.createElement("div");
    brocImg.src='Images/brocolii.jpg';
    brocImg.width=300;
    brocImg.height=225;
    brocImg.style.borderRadius="20px";
    addElem.textContent=item;
     for(let i=0;i<5;i++){
        const star=document.createElement("i");
        star.className="fa-solid fa-star"
        reviews.appendChild(star);
    }
    reviews.style.color="rgb(111, 117, 20)";
    const buttonCartLike=document.createElement("div");
    const cartDiv=document.createElement("div");
    const likeDiv=document.createElement("div");
    buttonCartLike.appendChild(cartDiv);
    buttonCartLike.appendChild(likeDiv);
    const cartButton=document.createElement("button");
    cartButton.textContent="+Cart";
    cartButton.style.padding="10px";
    cartButton.style.width="230%";
    cartButton.style.borderRadius="20px";
    cartButton.style.border="none";
    cartButton.style.backgroundColor="rgb(60, 65, 4)";
    cartButton.style.color="white"
    cartButton.addEventListener("click",()=>{
    cartButton.style.backgroundColor="Maroon";
    cartButton.style.color="white";
    cartButton.textContent="Added!";
    cartButton.style.border="none";
})
    cartDiv.appendChild(cartButton);
    const like=document.createElement("i")
    like.className="fa-solid fa-heart"
    like.style.color="white";
    like.addEventListener("click",()=>{
        like.style.color="red";
    });
    likeDiv.appendChild(like)
    buttonCartLike.style.display="flex";
    buttonCartLike.style.justifyContent="space-between";
    buttonCartLike.style.marginTop="20px";
    buttonCartLike.style.marginRight="20px";
    const paragraph=document.createElement("p");
    paragraph.textContent="Price: 4.5$"
    paragraph.style.color="rgb(131, 42, 72)";

    brocolliDiv.appendChild(brocImg);
    brocolliDiv.appendChild(addElem);
    brocolliDiv.appendChild(paragraph);
    vegetablesList.append(brocolliDiv);
    brocolliDiv.appendChild(reviews);
    brocolliDiv.appendChild(buttonCartLike);
    }else{
    const celImg=document.createElement("img");
    const addCel=document.createElement("li");
    const reviews=document.createElement("div");
    celImg.src='Images/celery.jpg';
    celImg.width=200;
    celImg.height=200;
    celImg.style.borderRadius="20px";
    addCel.textContent=item;
     for(let i=0;i<5;i++){
        const star=document.createElement("i");
        star.className="fa-solid fa-star"
        reviews.appendChild(star);
    }
    reviews.style.color="rgb(111, 117, 20)";
    const buttonCartLike=document.createElement("div");
    const cartDiv=document.createElement("div");
    const likeDiv=document.createElement("div");
    buttonCartLike.appendChild(cartDiv);
    buttonCartLike.appendChild(likeDiv);
    const cartButton=document.createElement("button");
    cartButton.textContent="+Cart";
    cartButton.style.padding="10px";
    cartButton.style.width="230%";
    cartButton.style.borderRadius="20px";
    cartButton.style.border="none";
    cartButton.style.backgroundColor="rgb(60, 65, 4)";
    cartButton.style.color="white"
    cartButton.addEventListener("click",()=>{
    cartButton.style.backgroundColor="Maroon";
    cartButton.style.color="white";
    cartButton.textContent="Added!";
    cartButton.style.border="none"});
    cartButton.addEventListener("click",()=>{
    cartButton.style.backgroundColor="Maroon";
    cartButton.style.color="white";
    cartButton.textContent="Added!";
    cartButton.style.border="none";})
    cartDiv.appendChild(cartButton);
    const like=document.createElement("i");
    like.className="fa-solid fa-heart";
    like.style.color="white";
    like.addEventListener("click",()=>{
        like.style.color="red";
    });
    likeDiv.appendChild(like);
    buttonCartLike.style.display="flex";
    buttonCartLike.style.justifyContent="space-between";
    buttonCartLike.style.marginTop="20px";
    buttonCartLike.style.marginRight="20px";

     const paragraph=document.createElement("p");
    paragraph.textContent="Price: 2.5$"
    paragraph.style.color="rgb(131, 42, 72)";



    celeryDiv.appendChild(celImg);
    celeryDiv.appendChild(addCel);
    celeryDiv.appendChild(paragraph);
    celeryDiv.appendChild(reviews);
    celeryDiv.appendChild(buttonCartLike);
    vegetablesList.append(celeryDiv);
    }
});

vegetablesList.style.display="flex";
vegetablesList.style.justifyContent="space-between";
vegetablesList.style.listStyleType="none";
vegetablesList.style.fontSize="20px";


const image = document.getElementById('img-container');
const newImage = document.createElement('img');
newImage.src = 'Images/back.jpg';
newImage.width = 1835;
newImage.height = 700;
newImage.style.display="block";
image.appendChild(newImage);

const textElement=document.getElementById("text-block");
textElement.style.position = "absolute";
textElement.style.top = "250px";   
textElement.style.left = "500px";   
textElement.style.color = "white"; 
textElement.style.fontSize = "24px";
textElement.style.fontWeight = "bold";
textElement.style.background="rgb(18, 34, 18)"
textElement.style.padding="40px"
textElement.style.borderRadius="30px"
textElement.style.textAlign="center"
textElement.style.textShadow = "2px 2px 4px rgba(43, 42, 42, 0.7)";

const clickButton=document.getElementById("click-button");
clickButton.addEventListener("click",()=>{
    clickButton.style.backgroundColor="rgb(60, 65, 4)";
    clickButton.textContent="Scroll down";
    clickButton.style.color="white";
});

const firstFruitIcon=document.getElementById("first-icon-frui");
firstFruitIcon.addEventListener("click",()=>{
    firstFruitIcon.style.color="red";
});

const secondFruitIcon=document.getElementById("second-icon-frui");
secondFruitIcon.addEventListener("click",()=>{
    secondFruitIcon.style.color="red";
});
const lastFruitIcon=document.getElementById("last-icon-frui");
lastFruitIcon.addEventListener("click",()=>{
    lastFruitIcon.style.color="red";
});

const firstVegIcon=document.getElementById("first-icon");
firstVegIcon.addEventListener("click",()=>{
    firstVegIcon.style.color="red";
});

const secondVegIcon=document.getElementById("second-icon");
secondVegIcon.addEventListener("click",()=>{
    secondVegIcon.style.color="red";
});

const lastVegIcon=document.getElementById("last-icon");
lastVegIcon.addEventListener("click",()=>{
    lastVegIcon.style.color="red";
});

const firstButtonFruit=document.getElementsByClassName("first-frui-button")[0];
firstButtonFruit.addEventListener("click",()=>{
    firstButtonFruit.style.backgroundColor="Maroon";
    firstButtonFruit.style.color="white";
    firstButtonFruit.textContent="Added!";
    firstButtonFruit.style.border="none";
});

const secondButtonFruit=document.getElementsByClassName("second-frui-button")[0];
secondButtonFruit.addEventListener("click",()=>{
    secondButtonFruit.style.backgroundColor="Maroon";
    secondButtonFruit.style.color="white";
    secondButtonFruit.textContent="Added!";
    secondButtonFruit.style.border="none";
});

const lastButtonFruit=document.getElementsByClassName("last-frui-button")[0];
lastButtonFruit.addEventListener("click",()=>{
    lastButtonFruit.style.backgroundColor="Maroon";
    lastButtonFruit.style.color="white";
    lastButtonFruit.textContent="Added!";
    lastButtonFruit.style.border="none";
});

const firstButtonVeg=document.getElementsByClassName("first-button")[0];
firstButtonVeg.addEventListener("click",()=>{
    firstButtonVeg.style.backgroundColor="Maroon";
    firstButtonVeg.style.color="white";
    firstButtonVeg.textContent="Added!";
    firstButtonVeg.style.border="none";
});

const secondButtonVeg=document.getElementsByClassName("second-button")[0];
secondButtonVeg.addEventListener("click",()=>{
    secondButtonVeg.style.backgroundColor="Maroon";
    secondButtonVeg.style.color="white";
    secondButtonVeg.textContent="Added!";
    secondButtonVeg.style.border="none";
});

const lastButtonVeg=document.getElementsByClassName("last-button")[0];
lastButtonVeg.addEventListener("click",()=>{
    lastButtonVeg.style.backgroundColor="Maroon";
    lastButtonVeg.style.color="white";
    lastButtonVeg.textContent="Added!";
    lastButtonVeg.style.border="none";
});


const footer=document.getElementById("footer-div");
const footerContact=document.createElement("div");
const breakElement = document.createElement('br');
footer.append(footerContact);
const email=document.createElement("p");
email.textContent="Email Address: greenkioski@gmail.com"
footerContact.appendChild(email);
const phoneNumber=document.createElement("p");
phoneNumber.textContent="Phone number: +2547673283893";
footerContact.appendChild(phoneNumber);
const message=document.createElement("form");
const label=document.createElement("label");
label.textContent="Enter a message!";
label.appendChild(breakElement);
label.appendChild(breakElement);
const input=document.createElement("input");
input.style.padding="20px";
input.style.width="40%"
const formButton=document.createElement("button");
formButton.textContent="Submit";
formButton.style.marginLeft="30px";
formButton.style.borderRadius="10px";
formButton.style.padding="10px";
formButton.style.width="10%";
formButton.style.border="none";
formButton.style.backgroundColor="yellow";
message.appendChild(label);
message.appendChild(input);
message.appendChild(formButton);
footerContact.appendChild(message);
footerContact.style.marginLeft="600px";
footer.style.backgroundColor="rgb(17, 19, 1)";
footer.style.padding="40px";
footer.style.color="white";
footer.style.fontSize="20px"


