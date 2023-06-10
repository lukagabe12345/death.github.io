alert("გამარჯობა");
alert("ანდა რაის გამარჯობა ამ საიტზე თუ შემოხვედი არ გაქვს კარგად საქმე...");




const shedegi = document.getElementById("shedegi");  //ეს ტექსტია რომელიც ამოვა//
const sheniBedi = document.getElementById("shenibedi"); //ეს ბათონია//

const phrases = [  //ესენი კი რენდომ ტექსტები//
  "მანქანა გაგიტანს (პარასკევი:4/07/2025)",
  "დანას გაგიყრიან (ხუთშაბათი:1/02/2032)",
  "ფეიევერკი დაგეცემა (ოთხშაბათი:31/012/2022)",
  "მეხი დაგეცემა (შაბათი:3/011/2029) ",
  "დაიხრჩობი (ოთხშაბათი:5/05/2024) ",
  "ორმოში ჩავარდები(შაბათი:13/08/2027) ",
  "დაგაბულინგებენ (ორშაბათი:5/05/2035)",
  "შავი კატა გადაგირბენს",
  "მეზობლის ბავშვი მოგკლავს",
  "გმირად მოკვდები",
"ნაჯახით დაგჩეხავენ",
"ჰორორ ფილმის ყურებისას გული გაგისკდა"

];
                 //ეს კი მუსიკა კლიკზე//
const paatasay = new Audio("./paatasay.mp3");


sheniBedi.addEventListener("click", () => {                    
  let randomNum = Math.floor(Math.random() * phrases.length);
  let randomPhrase = phrases[randomNum];
  shedegi.innerText = randomPhrase;
  paatasay.play();
});



